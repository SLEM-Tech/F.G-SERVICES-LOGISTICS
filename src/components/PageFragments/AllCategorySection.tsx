"use client";
import React, { useEffect, useState } from "react";
import Picture from "../picture/Picture";
import { useCategories, WooCommerce } from "../lib/woocommerce";
import Link from "next/link";
import { convertToSlug } from "@constants";
import { useDispatch } from "react-redux";
import { updateCategorySlugId } from "../config/features/subCategoryId";
import { useRouter } from "next/navigation";
import NewCollections from "../NewCollections";

const CategoryCard = ({ 
  category, 
  productImage, 
  onClick 
}: { 
  category: CategoryType; 
  productImage: string; 
  onClick: () => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-100">
        <Picture
          src={productImage}
          alt={category?.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300" />
        
        {/* Category Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="text-white">
            <h3 className="text-lg md:text-xl font-semibold mb-2 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
              <span dangerouslySetInnerHTML={{ __html: category?.name }} />
            </h3>
            <p className="text-sm opacity-90 transform transition-all duration-300 group-hover:opacity-100">
              SHOP FOR {category?.name?.toUpperCase()}
            </p>
          </div>
        </div>

        {/* Hover Button */}
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
          isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}>
          <button className="bg-white text-black px-6 py-3 rounded-full font-medium text-sm hover:bg-gray-100 transition-colors shadow-lg">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

const AllCategorySection = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch = useDispatch();
  const router = useRouter();

  // State to hold first product image by category
  const [categoryProductsMap, setCategoryProductsMap] = useState<{
    [key: string]: string;
  }>({});

  // WooCommerce API Category
  const {
    data: categories,
    isLoading: categoryWpIsLoading,
    isError: categoryIsError,
  } = useCategories("");

  const Categories: CategoryType[] = categories;

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        setIsLoading(true);

        const filteredCategories = categories
          ?.filter((category: CategoryType) => category?.count > 0)
          ?.slice(0, 6); // Get up to 6 categories

        if (filteredCategories) {
          const productsPromises = filteredCategories.map(
            async (category: CategoryType) => {
              const response = await WooCommerce.get(
                `products?category=${category?.id}&per_page=1`
              );

              // Check if there is at least one product in the category
              const firstProductImage =
                response?.data.length > 0
                  ? response?.data[0]?.images[0]?.src
                  : null;

              return {
                categoryId: category?.id,
                firstProductImage: firstProductImage,
              };
            }
          );

          const productsResults = await Promise.all(productsPromises);

          // Update the state with the first product images mapped by category
          const productsMap = productsResults.reduce(
            (acc: any, result: any) => ({
              ...acc,
              [result.categoryId]: result.firstProductImage,
            }),
            {}
          );

          setCategoryProductsMap(productsMap);
        }
      } catch (error) {
        console.error("Error fetching category products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (categories?.length) {
      fetchCategoryProducts();
    }
  }, [categories]);

  const handleCategoryClick = (category: CategoryType) => {
    const categorySlugId = `${convertToSlug(category?.name) + "-" + category?.id}`;
    dispatch(updateCategorySlugId({ categorySlugId }));
    router.push(`/category/${convertToSlug(category?.name) + "-" + category?.id}`);
  };

  // Filter categories that have product images
  const categoriesWithImages = Categories?.filter(
    (category: CategoryType) => categoryProductsMap[category?.id] && categoryProductsMap[category?.id] !== null
  ) || [];

  return (
    <div className="w-full">
      {/* Loading State */}
      {categoryWpIsLoading && (
        <section className="mb-8 lg:mb-16">
          {/* Hero Banner Skeleton */}
          <div className="w-full h-[200px] sm:h-[400px] bg-gray-200 rounded-lg animate-pulse mb-8" />

          {/* Categories Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="aspect-[4/5] bg-gray-200 rounded-lg animate-pulse"
              />
            ))}
          </div>
        </section>
      )}

      {/* Content */}
      {Categories && !categoryWpIsLoading && (
        <>
          {/* Hero Section */}
          <section className="mb-8 lg:mb-16">
            <NewCollections />
          </section>

          {/* Categories Section */}
          <section className="mb-8 lg:mb-16">
            {/* Section Header */}
            <div className="text-center mb-8 lg:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Shop by Category
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover our carefully curated collections designed for every lifestyle and occasion
              </p>
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8">
              {categoriesWithImages.slice(0, 3).map((category: CategoryType) => {
                const productImage = categoryProductsMap[category?.id];
                
                return (
                  <CategoryCard
                    key={category?.id}
                    category={category}
                    productImage={productImage}
                    onClick={() => handleCategoryClick(category)}
                  />
                );
              })}
            </div>

            {/* View All Categories Link */}
            {categoriesWithImages.length > 6 && (
              <div className="text-center mt-8 lg:mt-12">
                <Link
                  href="/categories"
                  className="inline-flex items-center px-8 py-3 border border-gray-900 text-gray-900 font-medium rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300"
                >
                  View All Categories
                </Link>
              </div>
            )}
          </section>
          
        </>
      )}

      {/* Error State */}
      {categoryIsError && (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Unable to load categories
          </h3>
          <p className="text-gray-600 mb-4">
            Please try refreshing the page or check back later
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            Retry
          </button>
        </div>
      )}
    </div>
  );
};

export default AllCategorySection;
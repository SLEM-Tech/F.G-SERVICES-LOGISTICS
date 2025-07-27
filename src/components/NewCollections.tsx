import React from "react";
import { Calendar, ShoppingBag, Gift, RefreshCw } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CollectionItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface ServiceFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const NewCollections: React.FC = () => {
  const collections: CollectionItem[] = [
    {
      id: 1,
      image: "/images/product.png",
      title: "SOFT LEATHER JACKETS",
      description:
        "Crafted for comfort and style, our leather jackets blend modern design with timeless appeal.",
    },
    {
      id: 2,
      image: "/images/product2.png",
      title: "CROPPED MOTO JACKETS",
      description:
        "Edgy and elegant. This cropped leather moto is your go-to for bold minimalism.",
    },
    {
      id: 3,
      image: "/images/product3.png",
      title: "BELTED TRENCH LEATHER",
      description:
        "Effortlessly refined. The belted design flatters while offering flexible wearability.",
    },
  ];

  const services: ServiceFeature[] = [
    {
      icon: <Calendar className="w-8 h-8 text-gray-700" />,
      title: "Book An Appointment",
      description:
        "Chat with our style consultants to get personalized advice on what suits you best.",
    },
    {
      icon: <ShoppingBag className="w-8 h-8 text-gray-700" />,
      title: "Pick Up In Store",
      description:
        "Order online and pick up your purchase from the nearest location at your convenience.",
    },
    {
      icon: <Gift className="w-8 h-8 text-gray-700" />,
      title: "Special Packaging",
      description:
        "All items are carefully wrapped and presented in premium packaging.",
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-gray-700" />,
      title: "Free Global Returns",
      description:
        "Enjoy hassle-free returns from anywhere in the world.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-8">
              New Collections
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
              Discover this season&apos;s most stylish arrivals. Our curated collection of soft leather jackets brings comfort, elegance, and versatility to your wardrobe.
            </p>
          </div>

          {/* Collections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {collections.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <Link href="/category">
                  <div className="relative overflow-hidden bg-gray-200 aspect-[4/5] mb-6">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium text-gray-900 tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                    <button className="text-gray-900 text-sm font-medium tracking-wider hover:text-gray-600 transition-colors duration-200 border-b border-gray-900 hover:border-gray-600 pb-1">
                      DISCOVER NOW
                    </button>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4 tracking-wide">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewCollections;

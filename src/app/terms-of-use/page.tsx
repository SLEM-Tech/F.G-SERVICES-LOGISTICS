"use client";
import React, { useEffect, useState } from "react";
import AppLayout from "@src/components/AppLayout";
import { useSearchParams } from "next/navigation";
import { CompanyName } from "@constants";
import RefundPolicy from "./_components/RefundPolicy";
import DeliveryReturn from "./_components/DeliveryReturn";

const Page = () => {
	const searchParams = useSearchParams().toString();
	const search = searchParams.replace(/=$/, "");
	const [activeTab, setActiveTab] = useState<string>("termsOfUse");

	useEffect(() => {
		if (search === "terms-of-use") {
			setActiveTab("termsOfUse");
		} else if (search === "privacy-policy") {
			setActiveTab("privacyPolicy");
		} else if (search === "delivery-return") {
			setActiveTab("deliveryReturn");
		} else if (search === "refund-policy") {
			setActiveTab("refundPolicy");
		}
	}, [search]);

	const handleTabClick = (tab: string) => {
		setActiveTab(tab);
	};

	return (
		<AppLayout>
			<main className='bg-white mx-auto mt-32 pb-24'>
			<section className='flex w-full flex-col items-center pt-8 xl:pt-16 gap-2 sm:gap-3 px-2 sm:px-8 md:px-16 text-center'>
				<h4 className='text-black text-base sm:text-xl font-semibold leading-[120%]'>
				Our Policies
				</h4>
				<h3 className='font-semibold text-xl sm:text-2xl md:text-3xl leading-[150%]'>
				F.G Services Logistics Limited Policies
				</h3>
				<span className='text-xs sm:text-sm xl:text-base leading-[150%] text-gray-400 sm:max-w-3xl slg:max-w-2xl'>
				At F.G Services Logistics Limited, we provide comprehensive logistics solutions, general merchandise supply, and contract services with emphasis on efficient supply chain management, reliable delivery systems, and professional contract execution.
				</span>
				<div className='flex gap-2 mt-3 xl:mt-8 text-[10px] xs:text-xs sm:text-sm slg:text-base leading-[140%] bg-[#F5F5F5] p-1 rounded-md transition'>
				<button
					className={`px-2 xl:px-4 py-2 rounded-md ${
					activeTab === "termsOfUse"
						? "bg-white text-black"
						: "bg-[#F5F5F5] text-[#667085]"
					}`}
					onClick={() => handleTabClick("termsOfUse")}
				>
					Terms of use
				</button>
				<button
					className={`px-2 xl:px-4 py-2 rounded-md ${
					activeTab === "privacyPolicy"
						? "bg-white text-black"
						: "bg-[#F5F5F5] text-[#667085]"
					}`}
					onClick={() => handleTabClick("privacyPolicy")}
				>
					Privacy Policy
				</button>
				<button
					className={`px-2 xl:px-4 py-2 rounded-md ${
					activeTab === "deliveryReturn"
						? "bg-white text-black"
						: "bg-[#F5F5F5] text-[#667085]"
					}`}
					onClick={() => handleTabClick("deliveryReturn")}
				>
					Delivery & Return
				</button>
				<button
					className={`px-2 xl:px-4 py-2 rounded-md ${
					activeTab === "refundPolicy"
						? "bg-white text-black"
						: "bg-[#F5F5F5] text-[#667085]"
					}`}
					onClick={() => handleTabClick("refundPolicy")}
				>
					Refund Policy
				</button>
				</div>
			</section>
			
			<div className='flex mx-auto w-full mt-4 md:mt-8 text-base leading-[155%] px-2 sm:px-0 sm:max-w-xl slg:max-w-2xl pb-20'>
				{activeTab === "termsOfUse" && (
				<div id='termsOfUse' className='text-[#667085]'>
					<h4 className='text-base sm:text-xl xl:text-2xl font-semibold text-black capitalize'>
					Terms of Use - F.G Services Logistics Limited
					</h4>

					<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
					By engaging F.G Services Logistics Limited for logistics solutions, general merchandise supply, or contract services, you agree to the following comprehensive terms and conditions:
					</p>

					<ul className='list-disc pl-5 mt-2 space-y-2 text-xs md:text-sm xl:text-base'>
					<li>
						<span className='font-medium'>Comprehensive Logistics Solutions:</span> F.G Services Logistics specializes in end-to-end supply chain management including warehousing, inventory management, transportation coordination, distribution services, freight forwarding, and last-mile delivery solutions for businesses of all sizes.
					</li>
					<li>
						<span className='font-medium'>General Merchandise Supply:</span> We provide comprehensive procurement and supply services for general merchandise including consumer goods, business supplies, industrial materials, and specialty items with competitive pricing, quality assurance, and reliable delivery schedules.
					</li>
					<li>
						<span className='font-medium'>Contract Services:</span> Our contract services include project logistics, supply chain optimization, warehouse management, distribution network setup, and specialized logistics consulting designed to improve operational efficiency and reduce costs.
					</li>
					<li>
						<span className='font-medium'>Supply Chain Management:</span> We offer integrated supply chain solutions including demand forecasting, inventory optimization, supplier relationship management, and performance analytics to enhance business operations and customer satisfaction.
					</li>
					<li>
						<span className='font-medium'>Transportation & Distribution:</span> Comprehensive transportation services including local delivery, interstate shipping, freight coordination, and specialized handling for various cargo types with real-time tracking and delivery confirmation.
					</li>
					<li>
						<span className='font-medium'>Warehousing Services:</span> Professional warehousing solutions including storage, inventory management, order fulfillment, cross-docking, and value-added services such as packaging, labeling, and quality control inspection.
					</li>
					<li>
						<span className='font-medium'>Technology Integration:</span> Advanced logistics technology including inventory management systems, tracking platforms, EDI integration, and reporting dashboards to provide visibility and control over supply chain operations.
					</li>
					<li>
						<span className='font-medium'>Quality Assurance:</span> Rigorous quality control processes including supplier verification, product inspection, handling protocols, and damage prevention measures to ensure merchandise quality and customer satisfaction.
					</li>
					<li>
						<span className='font-medium'>Payment & Contract Terms:</span> Flexible payment arrangements including net terms for qualified businesses, milestone-based billing for project contracts, and volume pricing for regular shipments and ongoing logistics services.
					</li>
					</ul>

					<p className='mt-4 leading-[1.8] text-xs md:text-sm xl:text-base'>
					<span className='font-medium'>Performance Standards:</span> We maintain industry-leading performance standards with service level agreements, delivery time guarantees, and quality metrics monitoring to ensure consistent service excellence.
					</p>

					<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
					<span className='font-medium'>Continuous Improvement:</span> Our operations include continuous improvement processes, technology upgrades, and staff training to enhance service quality and adapt to changing business requirements.
					</p>
				</div>
				)}

				{activeTab === "privacyPolicy" && (
				<div id='privacyPolicy' className='text-[#667085]'>
					<h4 className='text-sm sm:text-xl xl:text-2xl font-semibold text-black'>
					PRIVACY POLICY - F.G SERVICES LOGISTICS LIMITED
					</h4>
					
					<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
					F.G Services Logistics Limited is committed to protecting confidential business information while providing comprehensive logistics solutions, merchandise supply, and contract services. This policy explains our data practices for supply chain and logistics operations.
					</p>

					<h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
					LOGISTICS & SUPPLY CHAIN DATA COLLECTION
					</h4>
					
					<ul className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base list-decimal pl-4'>
					<li>Business client information (company details, shipping addresses, contact personnel)</li>
					<li>Supply chain data including product specifications, quantities, and delivery requirements</li>
					<li>Transportation and logistics information for route optimization and delivery coordination</li>
					<li>Inventory management data including stock levels, turnover rates, and replenishment schedules</li>
					<li>Supplier and vendor information for procurement and quality management</li>
					<li>Contract service specifications and project management data</li>
					<li>Performance metrics and analytics for supply chain optimization</li>
					<li>Payment and billing information for logistics and merchandise services</li>
					</ul>

					<h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
					LOGISTICS DATA USAGE PRACTICES
					</h4>
					
					<ul className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base list-disc pl-4'>
					<li>To coordinate and execute comprehensive logistics and supply chain operations</li>
					<li>To optimize transportation routes and delivery schedules for efficiency</li>
					<li>To manage inventory levels and coordinate replenishment activities</li>
					<li>To process procurement orders and coordinate supplier relationships</li>
					<li>To provide supply chain analytics and performance reporting</li>
					<li>To ensure quality control and compliance with logistics standards</li>
					<li>To coordinate contract services and project logistics management</li>
					<li>To improve operational efficiency through data analysis and optimization</li>
					</ul>

					<h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
					SUPPLY CHAIN DATA SECURITY
					</h4>
					
					<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
					We implement comprehensive security measures for all logistics and supply chain data including secure data transmission, encrypted storage systems, and restricted access protocols. Business-sensitive information is protected through professional confidentiality agreements and industry-standard security practices. Tracking and shipment data is secured to prevent unauthorized access and ensure delivery integrity.
					</p>

					<h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
					PARTNER & VENDOR RELATIONSHIPS
					</h4>
					
					<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
					Logistics partners and transportation providers operate under strict confidentiality agreements protecting client shipment and business information. Supplier data is shared only as necessary for procurement and quality management purposes. All partnerships maintain data protection standards and comply with logistics industry privacy requirements.
					</p>

					<h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
					CLIENT CONTROL & LOGISTICS TRANSPARENCY
					</h4>
					
					<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
					Clients have access to their supply chain data, shipment tracking information, and performance analytics. Logistics operations are transparent with real-time visibility and reporting capabilities. Business information confidentiality is maintained through secure access controls and professional data handling practices. For logistics privacy inquiries, contact privacy@fgservices.com.ng.
					</p>
				</div>
				)}

				{activeTab === "deliveryReturn" && (
				<div id='deliveryReturn' className='text-[#667085]'>
					<h3 className='font-semibold text-sm md:text-base xl:text-lg mb-2'>
					LOGISTICS DELIVERY & SERVICE POLICY - F.G SERVICES LOGISTICS LIMITED
					</h3>

					<p className='text-xs md:text-sm xl:text-base mb-4'>
					F.G Services Logistics Limited provides comprehensive delivery solutions and logistics services with guaranteed performance standards, real-time tracking, and professional supply chain management to ensure efficient and reliable business operations.
					</p>

					<div className='mb-6'>
					<h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
						Comprehensive Delivery Services
					</h4>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
						<div>
						<h5 className='font-medium text-xs md:text-sm mb-1'>Local & Regional Delivery</h5>
						<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
							<li>Same-day delivery within Lagos metropolitan area</li>
							<li>Next-day delivery across Lagos State and neighboring regions</li>
							<li>Scheduled delivery appointments for business convenience</li>
							<li>Rush delivery services for urgent business requirements</li>
						</ul>
						</div>
						<div>
						<h5 className='font-medium text-xs md:text-sm mb-1'>National Distribution</h5>
						<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
							<li>Nationwide delivery network covering all major cities</li>
							<li>Interstate freight services with tracking capabilities</li>
							<li>Hub-and-spoke distribution for efficient coverage</li>
							<li>Cross-docking services for consolidation efficiency</li>
						</ul>
						</div>
					</div>
					</div>

					<div className='mb-6'>
					<h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
						Supply Chain & Logistics Solutions
					</h4>
					<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
						<li>End-to-end supply chain management with performance monitoring</li>
						<li>Inventory management and demand forecasting services</li>
						<li>Vendor management and supplier relationship coordination</li>
						<li>Order fulfillment and distribution center operations</li>
						<li>Reverse logistics and returns management processing</li>
						<li>Supply chain analytics and optimization consulting</li>
					</ul>
					</div>

					<div className='mb-6'>
					<h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
						Warehousing & Storage Services
					</h4>
					<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
						<li>Modern warehouse facilities with climate control and security</li>
						<li>Inventory management systems with real-time tracking</li>
						<li>Pick, pack, and ship services for e-commerce and retail</li>
						<li>Value-added services including labeling, kitting, and assembly</li>
						<li>Quality control inspection and damage prevention protocols</li>
						<li>Flexible storage solutions for short-term and long-term needs</li>
					</ul>
					</div>

					<div className='mb-6'>
					<h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
						Technology & Tracking Systems
					</h4>
					<div className='space-y-3'>
						<div>
						<p className='font-medium text-xs md:text-sm'>Real-Time Visibility:</p>
						<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
							<li>GPS tracking for all delivery vehicles and shipments</li>
							<li>Customer portal for shipment status and delivery updates</li>
							<li>Mobile notifications and email alerts for delivery milestones</li>
							<li>Proof of delivery with electronic signatures and timestamps</li>
						</ul>
						</div>
						<div>
						<p className='font-medium text-xs md:text-sm'>Analytics & Reporting:</p>
						<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
							<li>Supply chain performance dashboards and KPI monitoring</li>
							<li>Cost analysis and optimization recommendations</li>
							<li>Delivery performance reports and service level tracking</li>
							<li>Inventory turnover analysis and demand pattern insights</li>
						</ul>
						</div>
					</div>
					</div>

					<div className='mb-6'>
					<h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
						Service Guarantees & Quality Standards
					</h4>
					<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
						<li>Service level agreements with delivery time guarantees</li>
						<li>Damage-free delivery guarantee with insurance coverage</li>
						<li>Temperature-controlled delivery for sensitive products</li>
						<li>Professional handling protocols for all merchandise categories</li>
						<li>Customer satisfaction guarantee with performance monitoring</li>
						<li>Continuous improvement processes based on performance metrics</li>
					</ul>
					</div>

					{/* <div className='mt-6 pt-4 border-t border-gray-200'>
					<h4 className='font-semibold text-xs md:text-sm xl:text-base mb-2'>
						Logistics Contact Information
					</h4>
					<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
						<li>Operations Center: operations@fgservices.com.ng</li>
						<li>Customer Service: service@fgservices.com.ng</li>
						<li>Logistics Planning: logistics@fgservices.com.ng</li>
						<li>Emergency Dispatch: +234-801-234-5019 (24/7)</li>
						<li>Website: www.fgservices.com.ng</li>
					</ul>
					</div> */}
				</div>
				)}

				{activeTab === "refundPolicy" && (
				<div id='refundPolicy' className='text-[#667085]'>
					<h3 className='font-semibold text-sm md:text-base xl:text-lg mb-2'>
					REFUND POLICY - F.G SERVICES LOGISTICS LIMITED
					</h3>
					<p className='text-xs md:text-sm xl:text-base mb-4'>
					Effective Date: {new Date().toLocaleDateString('en-GB')}
					</p>

					<p className='text-xs md:text-sm xl:text-base mb-4'>
					At F.G Services Logistics Limited, we are committed to delivering exceptional logistics solutions, reliable merchandise supply, and professional contract services. Our comprehensive refund policy ensures accountability while maintaining the high-quality standards our clients expect from supply chain operations.
					</p>

					<ul className='list-disc pl-5 space-y-3 leading-[1.8] text-xs md:text-sm xl:text-base'>
					<li>
						<span className='font-medium'>1. Logistics Service Refunds</span>
						<ul className='list-disc pl-5 mt-1 space-y-1'>
						<li>Service level agreement violation refunds for missed delivery commitments</li>
						<li>Full refund for logistics services not performed due to our operational failures</li>
						<li>Prorated refunds for incomplete supply chain management services</li>
						<li>Delivery guarantee refunds for packages lost or significantly delayed</li>
						<li>Performance standard refunds for services not meeting agreed KPIs</li>
						</ul>
					</li>

					<li>
						<span className='font-medium'>2. Merchandise Supply Refunds</span>
						<ul className='list-disc pl-5 mt-1 space-y-1'>
						<li>Quality defect refunds for merchandise not meeting specifications</li>
						<li>Procurement failure refunds if agreed merchandise cannot be sourced</li>
						<li>Delivery damage refunds for merchandise damaged during transportation</li>
						<li>Quantity discrepancy refunds for incorrect order fulfillment</li>
						<li>Supplier default protection with alternative sourcing at agreed prices</li>
						</ul>
					</li>

					<li>
						<span className='font-medium'>3. Contract Service Refunds</span>
						<ul className='list-disc pl-5 mt-1 space-y-1'>
						<li>Project completion refunds for contracts not completed within agreed timelines</li>
						<li>Performance optimization refunds if promised efficiency gains are not achieved</li>
						<li>Supply chain setup refunds for systems that don't meet operational requirements</li>
						<li>Consulting service refunds for recommendations that don't deliver promised results</li>
						<li>Technology implementation refunds for systems that fail to integrate properly</li>
						</ul>
					</li>

					<li>
						<span className='font-medium'>4. Warehousing & Storage Refunds</span>
						<ul className='list-disc pl-5 mt-1 space-y-1'>
						<li>Storage damage refunds for merchandise damaged while in our custody</li>
						<li>Inventory accuracy refunds for discrepancies in stock management</li>
						<li>Temperature control failure refunds for sensitive product damage</li>
						<li>Security breach refunds for theft or unauthorized access incidents</li>
						<li>Service availability refunds for warehouse access disruptions</li>
						</ul>
					</li>

					<li>
						<span className='font-medium'>5. Non-Refundable Logistics Services</span>
						<ul className='list-disc pl-5 mt-1 space-y-1'>
						<li>Successfully completed deliveries with proof of delivery confirmation</li>
						<li>Contract services completed according to agreed specifications and timelines</li>
						<li>Third-party costs including fuel surcharges, tolls, and regulatory fees</li>
						<li>Client-initiated changes or cancellations after logistics coordination begins</li>
						<li>Force majeure events including weather, natural disasters, or government restrictions</li>
						</ul>
					</li>

					<li>
						<span className='font-medium'>6. Logistics Refund Process</span>
						<p className='mt-1'>To request refunds for logistics services:</p>
						<ul className='list-disc pl-5 mt-1 space-y-1'>
						{/* <li>Email: refunds@fgservices.com.ng</li>
						<li>Operations Manager: +234-801-234-5019 (ext. 100)</li> */}
						<li>Provide shipment tracking numbers and service documentation</li>
						<li>Include delivery confirmation records and timeline evidence</li>
						<li>Submit formal incident report for service failures or damages</li>
						</ul>
					</li>

					<li>
						<span className='font-medium'>7. Performance Assessment & Resolution</span>
						<ul className='list-disc pl-5 mt-1 space-y-1'>
						<li>Operations team review of all logistics performance refund requests</li>
						<li>Third-party logistics audit for complex service disputes</li>
						<li>Supply chain analysis to identify root causes of service failures</li>
						<li>Client consultation to develop corrective action plans</li>
						<li>Performance improvement implementation to prevent future issues</li>
						</ul>
					</li>

					<li>
						<span className='font-medium'>8. Alternative Logistics Solutions</span>
						<ul className='list-disc pl-5 mt-1 space-y-1'>
						<li>Service credits applied to future logistics and supply chain services</li>
						<li>Enhanced service levels and priority handling as compensation</li>
						<li>Additional value-added services at no charge to remedy performance issues</li>
						<li>Extended service agreements with improved terms and conditions</li>
						<li>Supply chain optimization consulting to improve overall performance</li>
						</ul>
					</li>
					</ul>

					{/* <div className='mt-6 pt-4 border-t border-gray-200'>
					<h4 className='font-semibold text-xs md:text-sm xl:text-base mb-2'>
						Contact Information
					</h4>
					<p className='text-xs md:text-sm xl:text-base'>
						For logistics refunds and service resolution:
					</p>
					<ul className='list-disc pl-5 mt-2 space-y-1 text-xs md:text-sm xl:text-base'>
						<li>F.G Services Logistics Limited</li>
						<li>Email: refunds@fgservices.com.ng</li>
						<li>Customer Service: service@fgservices.com.ng</li>
						<li>Phone: +234-801-234-5019</li>
						<li>Website: www.fgservices.com.ng</li>
					</ul>
					</div> */}
				</div>
				)}
			</div>
			</main>
		</AppLayout>
	);
};

export default Page;

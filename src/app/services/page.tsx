/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Our Services - Jaykay Freighters",
    description:
        "Comprehensive freight forwarding and logistics services including air freight, ocean freight, customs clearance, and more.",
}

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">Our Services</h1>

                    <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8 transition-colors">
                        <h2 className="text-2xl font-bold mb-4 text-[#1a237e] dark:text-blue-400">
                            Comprehensive Logistics Solutions
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            Content will be added here. This page will showcase all our services including detailed descriptions,
                            features, and benefits of each service we offer.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                            Please provide the content you'd like to display for each service, and I'll create detailed service cards
                            and sections.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Air Freight",
                            "Ocean Freight",
                            "Road Freight",
                            "Custom Clearance",
                            "Warehousing",
                            "Consultancy",
                            "Multi Modal Transportation",
                            "Value Added Services",
                        ].map((service, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700 transition-colors"
                            >
                                <h3 className="text-xl font-bold mb-3 text-[#1a237e] dark:text-blue-400">{service}</h3>
                                <p className="text-gray-700 dark:text-gray-300">Service details to be added...</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}

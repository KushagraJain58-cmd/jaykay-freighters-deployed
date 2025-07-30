import type { Metadata } from "next"
import { Plane, Clock, Globe, Shield, Package, Zap } from "lucide-react"
import Breadcrumb from "@/components/breadcrumb"

export const metadata: Metadata = {
    title: "Air Freight Services - Jaykay Freighters",
    description:
        "Comprehensive range of air freight services for fast and secure international and domestic cargo transportation.",
}

const breadcrumbItems = [
    { label: "HOME", href: "/" },
    { label: "SERVICES", href: "/services" },
    { label: "AIR FREIGHT" },
]

const services = [
    {
        icon: <Zap className="h-8 w-8 text-yellow-500" />,
        title: "Express Services",
        description: "Urgent shipments with guaranteed delivery times for time-critical cargo.",
    },
    {
        icon: <Package className="h-8 w-8 text-yellow-500" />,
        title: "Consolidated Cargo",
        description: "Cost-effective solutions for smaller shipments through consolidation services.",
    },
    {
        icon: <Shield className="h-8 w-8 text-yellow-500" />,
        title: "Special Cargo",
        description: "Handling of dangerous goods, perishables, and oversized cargo with special care.",
    },
    {
        icon: <Globe className="h-8 w-8 text-yellow-500" />,
        title: "Global Network",
        description: "Worldwide coverage through partnerships with major airlines and cargo carriers.",
    },
]

export default function AirFreightPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
            {/* Hero Section */}
            <div className="bg-[#1a237e] dark:bg-gray-800 text-white py-16 transition-colors relative">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="flex justify-center mb-6">
                            <Plane className="h-16 w-16 text-yellow-500" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">AIR FREIGHT SERVICES</h1>
                        <p className="text-xl text-gray-200 mb-6">
                            With a comprehensive range of air freight services for fast and secure cargo transportation.
                        </p>
                        <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
                    </div>
                </div>

                {/* Breadcrumb */}
                <div className="absolute bottom-6 left-6">
                    <Breadcrumb items={breadcrumbItems} />
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-6xl mx-auto">
                    {/* Service Overview */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Service Overview</h2>
                        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg border dark:border-gray-700 transition-colors">
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                                Our Air Freight Services provide the fastest and most reliable solution for time-sensitive shipments.
                                With extensive partnerships with major airlines and cargo carriers worldwide, we offer comprehensive air
                                cargo solutions for both import and export requirements.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                From express delivery of urgent documents to specialized handling of high-value cargo, our air freight
                                services ensure your shipments reach their destination quickly and safely, with full tracking and
                                insurance coverage.
                            </p>
                        </div>
                    </div>

                    {/* Service Types */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                            Our Air Freight Services
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700 transition-colors"
                                >
                                    <div className="flex items-start">
                                        <div className="mr-4 mt-1">{service.icon}</div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{service.title}</h3>
                                            <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Advantages */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                            Air Freight Advantages
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <Clock className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Speed</h3>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Fastest mode of transportation for international shipments with transit times of 1-3 days.
                                </p>
                            </div>
                            <div className="text-center">
                                <Shield className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Security</h3>
                                <p className="text-gray-700 dark:text-gray-300">
                                    High security standards with minimal handling and reduced risk of damage or theft.
                                </p>
                            </div>
                            <div className="text-center">
                                <Globe className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Global Reach</h3>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Access to virtually any destination worldwide through extensive airline networks.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Service Details */}
                    <div className="bg-[#1a237e] dark:bg-gray-800 text-white p-8 rounded-lg transition-colors">
                        <h2 className="text-3xl font-bold text-center mb-8">Complete Air Freight Solutions</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-bold mb-4 text-yellow-400">Import Services</h3>
                                <ul className="space-y-2 text-gray-200">
                                    <li>• Airport cargo handling</li>
                                    <li>• Customs clearance</li>
                                    <li>• Door delivery services</li>
                                    <li>• Consolidation services</li>
                                    <li>• Temperature-controlled cargo</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-4 text-yellow-400">Export Services</h3>
                                <ul className="space-y-2 text-gray-200">
                                    <li>• Pickup and collection</li>
                                    <li>• Export documentation</li>
                                    <li>• Airline booking and space allocation</li>
                                    <li>• Dangerous goods handling</li>
                                    <li>• Real-time tracking</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

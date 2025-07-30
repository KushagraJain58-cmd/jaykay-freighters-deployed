import type { Metadata } from "next"
import { Warehouse, Package, Shield, Truck, BarChart, Clock } from "lucide-react"
import Breadcrumb from "@/components/breadcrumb"

export const metadata: Metadata = {
    title: "Warehousing Services - Jaykay Freighters",
    description: "Professional warehousing facilities across major ports with secure storage and distribution services.",
}

const breadcrumbItems = [
    { label: "HOME", href: "/" },
    { label: "SERVICES", href: "/services" },
    { label: "WAREHOUSING" },
]

const features = [
    {
        icon: <Shield className="h-8 w-8 text-yellow-500" />,
        title: "Secure Storage",
        description: "24/7 security monitoring with CCTV surveillance and access control systems.",
    },
    {
        icon: <BarChart className="h-8 w-8 text-yellow-500" />,
        title: "Inventory Management",
        description: "Real-time inventory tracking with advanced warehouse management systems.",
    },
    {
        icon: <Truck className="h-8 w-8 text-yellow-500" />,
        title: "Distribution Services",
        description: "Efficient order fulfillment and distribution to final destinations.",
    },
    {
        icon: <Clock className="h-8 w-8 text-yellow-500" />,
        title: "Flexible Terms",
        description: "Short-term and long-term storage options to meet your specific requirements.",
    },
]

export default function WarehousingPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
            {/* Hero Section */}
            <div className="bg-[#1a237e] dark:bg-gray-800 text-white py-16 transition-colors relative">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="flex justify-center mb-6">
                            <Warehouse className="h-16 w-16 text-yellow-500" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">WAREHOUSING SERVICES</h1>
                        <p className="text-xl text-gray-200 mb-6">
                            We provide warehousing facilities across major ports with secure storage solutions.
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
                                Our Warehousing Services provide secure, efficient, and cost-effective storage solutions across major
                                ports and inland locations in India. With state-of-the-art facilities and advanced inventory management
                                systems, we ensure your cargo is stored safely and can be accessed whenever needed.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                Whether you need temporary storage during customs clearance or long-term warehousing for distribution,
                                our facilities are equipped to handle all types of cargo including general goods, hazardous materials,
                                and temperature-sensitive products.
                            </p>
                        </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Key Features</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700 transition-colors"
                                >
                                    <div className="flex items-start">
                                        <div className="mr-4 mt-1">{feature.icon}</div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
                                            <p className="text-gray-700 dark:text-gray-300">{feature.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Warehouse Locations */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Strategic Locations</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <Package className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Port Warehouses</h3>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Strategic locations near major ports including JNPT, Chennai, Kolkata, and Kandla for quick cargo
                                    handling.
                                </p>
                            </div>
                            <div className="text-center">
                                <Warehouse className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Inland Facilities</h3>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Inland container depots and warehouses in major industrial centers for distribution convenience.
                                </p>
                            </div>
                            <div className="text-center">
                                <Shield className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Bonded Warehouses</h3>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Customs bonded facilities for duty-free storage of imported goods until final clearance.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Services Offered */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Services Offered</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700 transition-colors">
                                <h3 className="text-xl font-bold mb-4 text-[#1a237e] dark:text-blue-400">Storage Solutions</h3>
                                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                    <li>• General cargo storage</li>
                                    <li>• Temperature-controlled storage</li>
                                    <li>• Hazardous material storage</li>
                                    <li>• Bonded warehouse facilities</li>
                                    <li>• Container freight stations (CFS)</li>
                                </ul>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700 transition-colors">
                                <h3 className="text-xl font-bold mb-4 text-[#1a237e] dark:text-blue-400">Value-Added Services</h3>
                                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                    <li>• Cargo consolidation and deconsolidation</li>
                                    <li>• Packaging and repackaging</li>
                                    <li>• Labeling and marking</li>
                                    <li>• Quality inspection services</li>
                                    <li>• Order fulfillment and distribution</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Our Warehousing */}
                    <div className="bg-[#1a237e] dark:bg-gray-800 text-white p-8 rounded-lg transition-colors">
                        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Warehousing Services?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <Warehouse className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-2">Modern Facilities</h3>
                                <p className="text-gray-200">
                                    State-of-the-art warehouses with advanced handling equipment and systems
                                </p>
                            </div>
                            <div className="text-center">
                                <Shield className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-2">Security & Safety</h3>
                                <p className="text-gray-200">
                                    Comprehensive security measures and insurance coverage for your peace of mind
                                </p>
                            </div>
                            <div className="text-center">
                                <BarChart className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-2">Real-Time Tracking</h3>
                                <p className="text-gray-200">Advanced WMS for complete visibility and control over your inventory</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

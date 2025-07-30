import type { Metadata } from "next"
import { Truck, Ship, Plane, Train, Route, Clock } from "lucide-react"
import Breadcrumb from "@/components/breadcrumb"

export const metadata: Metadata = {
    title: "Multi Modal Transportation - Jaykay Freighters",
    description:
        "Comprehensive multi-modal transportation solutions combining road, rail, air, and sea freight for optimal logistics.",
}

const breadcrumbItems = [
    { label: "HOME", href: "/" },
    { label: "SERVICES", href: "/services" },
    { label: "MULTI MODAL TRANSPORTATION" },
]

const transportModes = [
    {
        icon: <Truck className="h-8 w-8 text-yellow-500" />,
        title: "Road Transport",
        description: "Flexible door-to-door delivery with extensive truck network across India.",
    },
    {
        icon: <Train className="h-8 w-8 text-yellow-500" />,
        title: "Rail Freight",
        description: "Cost-effective bulk cargo transportation via Indian Railways network.",
    },
    {
        icon: <Ship className="h-8 w-8 text-yellow-500" />,
        title: "Sea Freight",
        description: "International and coastal shipping for heavy and bulk cargo.",
    },
    {
        icon: <Plane className="h-8 w-8 text-yellow-500" />,
        title: "Air Freight",
        description: "Express delivery for time-sensitive and high-value shipments.",
    },
]

export default function MultiModalTransportationPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
            {/* Hero Section */}
            <div className="bg-[#1a237e] dark:bg-gray-800 text-white py-16 transition-colors relative">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="flex justify-center mb-6">
                            <Route className="h-16 w-16 text-yellow-500" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">MULTI MODAL TRANSPORTATION</h1>
                        <p className="text-xl text-gray-200 mb-6">
                            We provide our customers with comprehensive solutions combining multiple transport modes.
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
                                Our Multi Modal Transportation services combine the best of all transport modes to provide the most
                                efficient, cost-effective, and reliable logistics solutions. As an approved International Multimodal
                                Transport Operator (MTO), we seamlessly integrate road, rail, air, and sea freight to optimize your
                                supply chain.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                This integrated approach allows us to leverage the strengths of each transport mode while minimizing
                                costs and transit times, providing you with a single point of contact for all your transportation needs.
                            </p>
                        </div>
                    </div>

                    {/* Transport Modes */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Transport Modes</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {transportModes.map((mode, index) => (
                                <div
                                    key={index}
                                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700 transition-colors"
                                >
                                    <div className="flex items-start">
                                        <div className="mr-4 mt-1">{mode.icon}</div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{mode.title}</h3>
                                            <p className="text-gray-700 dark:text-gray-300">{mode.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Key Benefits</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <Clock className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Time Optimization</h3>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Strategic mode selection to minimize total transit time while maintaining cost efficiency.
                                </p>
                            </div>
                            <div className="text-center">
                                <Route className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Route Flexibility</h3>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Multiple routing options to avoid congestion and ensure reliable delivery schedules.
                                </p>
                            </div>
                            <div className="text-center">
                                <Truck className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Single Responsibility</h3>
                                <p className="text-gray-700 dark:text-gray-300">
                                    One contract, one point of contact for the entire journey from origin to destination.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Service Features */}
                    <div className="bg-[#1a237e] dark:bg-gray-800 text-white p-8 rounded-lg transition-colors">
                        <h2 className="text-3xl font-bold text-center mb-8">Our Multi Modal Capabilities</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-bold mb-4 text-yellow-400">Integrated Solutions</h3>
                                <ul className="space-y-2 text-gray-200">
                                    <li>• Seamless mode transitions</li>
                                    <li>• Consolidated documentation</li>
                                    <li>• Single liability coverage</li>
                                    <li>• End-to-end tracking</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-4 text-yellow-400">Value-Added Services</h3>
                                <ul className="space-y-2 text-gray-200">
                                    <li>• Route optimization</li>
                                    <li>• Cargo consolidation</li>
                                    <li>• Warehousing and distribution</li>
                                    <li>• Real-time visibility</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

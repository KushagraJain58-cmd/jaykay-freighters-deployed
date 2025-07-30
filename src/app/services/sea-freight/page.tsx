/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next"
import { Ship, Container, Anchor, Globe, DollarSign } from "lucide-react"
import Breadcrumb from "@/components/breadcrumb"

export const metadata: Metadata = {
    title: "Sea Freight Services - Jaykay Freighters",
    description:
        "Cost-effective sea freight services from groupage shipments to full container loads for international trade.",
}

const breadcrumbItems = [
    { label: "HOME", href: "/" },
    { label: "SERVICES", href: "/services" },
    { label: "SEA FREIGHT" },
]

const services = [
    {
        icon: <Container className="h-8 w-8 text-yellow-500" />,
        title: "FCL (Full Container Load)",
        description: "Dedicated container services for large volume shipments with direct port-to-port delivery.",
    },
    {
        icon: <Ship className="h-8 w-8 text-yellow-500" />,
        title: "LCL (Less Container Load)",
        description: "Consolidated shipments for smaller cargo volumes sharing container space with other shippers.",
    },
    {
        icon: <Anchor className="h-8 w-8 text-yellow-500" />,
        title: "Break Bulk Cargo",
        description: "Specialized handling of oversized, heavy, or irregularly shaped cargo that cannot fit in containers.",
    },
    {
        icon: <Globe className="h-8 w-8 text-yellow-500" />,
        title: "Project Cargo",
        description: "Complex logistics solutions for large-scale industrial projects and heavy machinery transportation.",
    },
]

export default function SeaFreightPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
            {/* Hero Section */}
            <div className="bg-[#1a237e] dark:bg-gray-800 text-white py-16 transition-colors relative">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="flex justify-center mb-6">
                            <Ship className="h-16 w-16 text-yellow-500" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">SEA FREIGHT SERVICES</h1>
                        <p className="text-xl text-gray-200 mb-6">
                            From groupage shipments to full container loads - cost-effective ocean freight solutions.
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
                                Our Sea Freight Services offer the most cost-effective solution for international cargo transportation.
                                With extensive partnerships with major shipping lines and comprehensive port coverage worldwide, we
                                provide reliable ocean freight services for all types of cargo.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                Whether you're shipping a few pallets or require multiple containers, our sea freight solutions are
                                designed to optimize costs while ensuring safe and timely delivery of your cargo to destinations across
                                the globe.
                            </p>
                        </div>
                    </div>

                    {/* Service Types */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                            Our Sea Freight Services
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
                            Sea Freight Advantages
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <DollarSign className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Cost Effective</h3>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Most economical option for large volume shipments and non-urgent cargo transportation.
                                </p>
                            </div>
                            <div className="text-center">
                                <Container className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">High Capacity</h3>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Ability to handle large volumes and oversized cargo that cannot be transported by air.
                                </p>
                            </div>
                            <div className="text-center">
                                <Globe className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Global Coverage</h3>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Extensive network covering all major ports and trade routes worldwide.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Service Details */}
                    <div className="bg-[#1a237e] dark:bg-gray-800 text-white p-8 rounded-lg transition-colors">
                        <h2 className="text-3xl font-bold text-center mb-8">Complete Sea Freight Solutions</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-bold mb-4 text-yellow-400">Import Services</h3>
                                <ul className="space-y-2 text-gray-200">
                                    <li>• Port handling and clearance</li>
                                    <li>• Container destuffing</li>
                                    <li>• Inland transportation</li>
                                    <li>• Warehousing and distribution</li>
                                    <li>• Documentation support</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-4 text-yellow-400">Export Services</h3>
                                <ul className="space-y-2 text-gray-200">
                                    <li>• Container stuffing and sealing</li>
                                    <li>• Export documentation</li>
                                    <li>• Shipping line booking</li>
                                    <li>• Port formalities</li>
                                    <li>• Bill of lading issuance</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

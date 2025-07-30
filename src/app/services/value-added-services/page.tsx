import type { Metadata } from "next"
import { ShieldCheck, Package, FileText, Truck, Clock, Users } from "lucide-react"
import Breadcrumb from "@/components/breadcrumb"

export const metadata: Metadata = {
    title: "Value Added Services - Jaykay Freighters",
    description:
        "Comprehensive value-added services including cargo insurance, packaging, documentation, and specialized logistics solutions.",
}

const breadcrumbItems = [
    { label: "HOME", href: "/" },
    { label: "SERVICES", href: "/services" },
    { label: "VALUE ADDED SERVICES" },
]

const services = [
    {
        icon: <ShieldCheck className="h-8 w-8 text-yellow-500" />,
        title: "Cargo Insurance",
        description:
            "Comprehensive insurance coverage to protect your shipments against loss, damage, or theft during transit.",
    },
    {
        icon: <Package className="h-8 w-8 text-yellow-500" />,
        title: "Packaging Services",
        description: "Professional packaging and crating services to ensure safe transportation of your valuable cargo.",
    },
    {
        icon: <FileText className="h-8 w-8 text-yellow-500" />,
        title: "Documentation Support",
        description:
            "Complete assistance with all shipping documents, certificates, and regulatory compliance requirements.",
    },
    {
        icon: <Truck className="h-8 w-8 text-yellow-500" />,
        title: "Door-to-Door Service",
        description: "End-to-end logistics solutions from pickup at origin to delivery at final destination.",
    },
]

export default function ValueAddedServicesPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
            {/* Hero Section */}
            <div className="bg-[#1a237e] dark:bg-gray-800 text-white py-16 transition-colors relative">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="flex justify-center mb-6">
                            <ShieldCheck className="h-16 w-16 text-yellow-500" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">VALUE ADDED SERVICES</h1>
                        <p className="text-xl text-gray-200 mb-6">
                            Cargo Insurance - We help you protect your shipment and provide comprehensive support services.
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
                                Our Value Added Services go beyond basic freight forwarding to provide comprehensive logistics support
                                that adds real value to your supply chain operations. From cargo insurance to specialized packaging, we
                                offer a complete suite of services designed to protect your interests and streamline your logistics
                                processes.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                These additional services are designed to give you peace of mind and ensure that every aspect of your
                                shipment is handled with the utmost care and professionalism, from origin to final destination.
                            </p>
                        </div>
                    </div>

                    {/* Core Services */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                            Our Value Added Services
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

                    {/* Detailed Services */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Additional Services</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <Clock className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Real-Time Tracking</h3>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Advanced tracking systems providing real-time visibility of your shipments throughout the journey.
                                </p>
                            </div>
                            <div className="text-center">
                                <Users className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Dedicated Support</h3>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Dedicated customer service representatives to handle your specific requirements and queries.
                                </p>
                            </div>
                            <div className="text-center">
                                <FileText className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Compliance Management</h3>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Ensuring full compliance with international trade regulations and documentation requirements.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Insurance Details */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                            Cargo Insurance Coverage
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700 transition-colors">
                                <h3 className="text-xl font-bold mb-4 text-[#1a237e] dark:text-blue-400">Coverage Options</h3>
                                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                    <li>• All risks coverage</li>
                                    <li>• Total loss coverage</li>
                                    <li>• General average coverage</li>
                                    <li>• War and strikes coverage</li>
                                    <li>• Delay in start-up coverage</li>
                                </ul>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700 transition-colors">
                                <h3 className="text-xl font-bold mb-4 text-[#1a237e] dark:text-blue-400">Benefits</h3>
                                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                    <li>• Financial protection against loss</li>
                                    <li>• Quick claims processing</li>
                                    <li>• Competitive premium rates</li>
                                    <li>• Global coverage</li>
                                    <li>• Expert claims handling</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Our Value Added Services */}
                    <div className="bg-[#1a237e] dark:bg-gray-800 text-white p-8 rounded-lg transition-colors">
                        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Value Added Services?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <ShieldCheck className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-2">Complete Protection</h3>
                                <p className="text-gray-200">Comprehensive insurance and risk management solutions for your cargo</p>
                            </div>
                            <div className="text-center">
                                <Package className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-2">Professional Service</h3>
                                <p className="text-gray-200">Expert handling and packaging services to ensure cargo safety</p>
                            </div>
                            <div className="text-center">
                                <Clock className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                                <p className="text-gray-200">Round-the-clock customer support and real-time shipment monitoring</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

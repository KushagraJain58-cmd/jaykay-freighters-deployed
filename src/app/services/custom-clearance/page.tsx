import type { Metadata } from "next"
import { Package, CheckCircle, Clock, Shield, FileText, Users } from "lucide-react"
import Breadcrumb from "@/components/breadcrumb"

export const metadata: Metadata = {
    title: "Custom Clearance - Jaykay Freighters",
    description:
        "Professional custom clearance services for import and export cargo with expert documentation and compliance.",
}

const breadcrumbItems = [
    { label: "HOME", href: "/" },
    { label: "SERVICES", href: "/services" },
    { label: "CUSTOM CLEARANCE" },
]

const features = [
    {
        icon: <FileText className="h-8 w-8 text-yellow-500" />,
        title: "Documentation Support",
        description: "Complete assistance with all required customs documentation and paperwork.",
    },
    {
        icon: <CheckCircle className="h-8 w-8 text-yellow-500" />,
        title: "Compliance Assurance",
        description: "Ensuring full compliance with customs regulations and trade policies.",
    },
    {
        icon: <Clock className="h-8 w-8 text-yellow-500" />,
        title: "Fast Processing",
        description: "Quick and efficient clearance to minimize delays and storage costs.",
    },
    {
        icon: <Shield className="h-8 w-8 text-yellow-500" />,
        title: "Risk Management",
        description: "Expert handling of complex clearance procedures and risk mitigation.",
    },
]

export default function CustomClearancePage() {
    return (
        <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
            {/* Hero Section */}
            <div className="bg-[#1a237e] dark:bg-gray-800 text-white py-16 transition-colors relative">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="flex justify-center mb-6">
                            <Package className="h-16 w-16 text-yellow-500" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">CUSTOM CLEARANCE</h1>
                        <p className="text-xl text-gray-200 mb-6">
                            The documented permission to import or export goods with expert compliance and efficiency.
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
                                Our Custom Clearance services provide comprehensive support for all your import and export documentation
                                needs. As an authorized customs broker with decades of experience, we ensure smooth and compliant
                                clearance of your cargo through all major ports and airports in India.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                We handle all types of cargo including machinery, engineering goods, raw materials, metals, chemicals,
                                pharmaceuticals, consumer goods, perishable cargo, and project cargo, ensuring each shipment meets all
                                regulatory requirements.
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

                    {/* Services Included */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Services Included</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700 transition-colors">
                                <h3 className="text-xl font-bold mb-4 text-[#1a237e] dark:text-blue-400">Import Clearance</h3>
                                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                    <li>• Bill of Entry preparation and filing</li>
                                    <li>• Duty calculation and payment</li>
                                    <li>• Document verification</li>
                                    <li>• Physical examination coordination</li>
                                    <li>• Delivery order processing</li>
                                </ul>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700 transition-colors">
                                <h3 className="text-xl font-bold mb-4 text-[#1a237e] dark:text-blue-400">Export Clearance</h3>
                                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                    <li>• Shipping Bill preparation</li>
                                    <li>• Export documentation</li>
                                    <li>• Duty drawback claims</li>
                                    <li>• Certificate of origin</li>
                                    <li>• Let Export Order (LEO) processing</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="bg-[#1a237e] dark:bg-gray-800 text-white p-8 rounded-lg transition-colors">
                        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Custom Clearance Services?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <Users className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-2">Expert Team</h3>
                                <p className="text-gray-200">Experienced customs brokers with 30+ years of expertise</p>
                            </div>
                            <div className="text-center">
                                <Shield className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-2">AEO Certified</h3>
                                <p className="text-gray-200">Authorized Economic Operator certification for trusted service</p>
                            </div>
                            <div className="text-center">
                                <Clock className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                                <p className="text-gray-200">Round-the-clock assistance for urgent clearance requirements</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

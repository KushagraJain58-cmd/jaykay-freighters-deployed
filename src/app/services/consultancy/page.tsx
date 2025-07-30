/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next"
import { Users, FileText, TrendingUp, Shield, Lightbulb, CheckCircle } from "lucide-react"
import Breadcrumb from "@/components/breadcrumb"

export const metadata: Metadata = {
    title: "Consultancy Services - Jaykay Freighters",
    description:
        "Expert consultancy services for customs, trade compliance, and logistics optimization with 30+ years of experience.",
}

const breadcrumbItems = [
    { label: "HOME", href: "/" },
    { label: "SERVICES", href: "/services" },
    { label: "CONSULTANCY" },
]

const consultancyAreas = [
    {
        icon: <FileText className="h-8 w-8 text-yellow-500" />,
        title: "Trade Compliance",
        description: "Expert guidance on customs regulations, trade policies, and compliance requirements.",
    },
    {
        icon: <TrendingUp className="h-8 w-8 text-yellow-500" />,
        title: "Process Optimization",
        description: "Streamline your logistics operations for improved efficiency and cost reduction.",
    },
    {
        icon: <Shield className="h-8 w-8 text-yellow-500" />,
        title: "Risk Management",
        description: "Identify and mitigate supply chain risks with comprehensive risk assessment.",
    },
    {
        icon: <Lightbulb className="h-8 w-8 text-yellow-500" />,
        title: "Strategic Planning",
        description: "Develop long-term logistics strategies aligned with your business objectives.",
    },
]

export default function ConsultancyPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
            {/* Hero Section */}
            <div className="bg-[#1a237e] dark:bg-gray-800 text-white py-16 transition-colors relative">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="flex justify-center mb-6">
                            <Users className="h-16 w-16 text-yellow-500" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">CONSULTANCY SERVICES</h1>
                        <p className="text-xl text-gray-200 mb-6">
                            Expert consultancy is also a part of our comprehensive service offerings.
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
                                Our Consultancy Services leverage over three decades of experience in customs, freight forwarding, and
                                international trade to provide strategic guidance and practical solutions for your business challenges.
                                We help organizations optimize their supply chain operations, ensure regulatory compliance, and achieve
                                operational excellence.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                Whether you're looking to enter new markets, streamline existing operations, or navigate complex
                                regulatory requirements, our expert consultants provide tailored solutions that drive results.
                            </p>
                        </div>
                    </div>

                    {/* Consultancy Areas */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Our Expertise</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {consultancyAreas.map((area, index) => (
                                <div
                                    key={index}
                                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700 transition-colors"
                                >
                                    <div className="flex items-start">
                                        <div className="mr-4 mt-1">{area.icon}</div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{area.title}</h3>
                                            <p className="text-gray-700 dark:text-gray-300">{area.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Detailed Services */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Detailed Services</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700 transition-colors">
                                <h3 className="text-xl font-bold mb-4 text-[#1a237e] dark:text-blue-400">Customs & Trade</h3>
                                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                                        Customs procedure optimization
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                                        Trade agreement utilization
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                                        Duty optimization strategies
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                                        Regulatory compliance audits
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700 transition-colors">
                                <h3 className="text-xl font-bold mb-4 text-[#1a237e] dark:text-blue-400">Supply Chain</h3>
                                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                                        Logistics network design
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                                        Cost reduction analysis
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                                        Performance benchmarking
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                                        Technology implementation
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Our Consultancy */}
                    <div className="bg-[#1a237e] dark:bg-gray-800 text-white p-8 rounded-lg transition-colors">
                        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Consultancy?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <Users className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-2">Experienced Team</h3>
                                <p className="text-gray-200">30+ years of hands-on experience in international trade and logistics</p>
                            </div>
                            <div className="text-center">
                                <TrendingUp className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-2">Proven Results</h3>
                                <p className="text-gray-200">Track record of delivering measurable improvements and cost savings</p>
                            </div>
                            <div className="text-center">
                                <Lightbulb className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-2">Tailored Solutions</h3>
                                <p className="text-gray-200">Customized strategies designed specifically for your business needs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

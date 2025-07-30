/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next"
import { Users, Briefcase, TrendingUp, Award } from "lucide-react"
import Breadcrumb from "@/components/breadcrumb"

export const metadata: Metadata = {
    title: "Career With Us - Jaykay Freighters",
    description: "Join our team at Jaykay Freighters and build a rewarding career in logistics and freight forwarding.",
}

const breadcrumbItems = [
    { label: "HOME", href: "/" },
    { label: "CONTACT US", href: "/contact/contact-details" },
    { label: "CAREER WITH US" },
]

const benefits = [
    {
        icon: <TrendingUp className="h-8 w-8 text-yellow-500" />,
        title: "Career Growth",
        description: "Opportunities for professional development and career advancement in the logistics industry.",
    },
    {
        icon: <Award className="h-8 w-8 text-yellow-500" />,
        title: "Competitive Benefits",
        description: "Attractive compensation packages with comprehensive benefits and performance incentives.",
    },
    {
        icon: <Users className="h-8 w-8 text-yellow-500" />,
        title: "Team Environment",
        description: "Work with experienced professionals in a collaborative and supportive team environment.",
    },
    {
        icon: <Briefcase className="h-8 w-8 text-yellow-500" />,
        title: "Industry Experience",
        description: "Gain valuable experience in international trade, customs, and freight forwarding operations.",
    },
]

export default function CareerWithUsPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
            {/* Hero Section */}
            <div className="bg-[#1a237e] dark:bg-gray-800 text-white py-16 transition-colors relative">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="flex justify-center mb-6">
                            <Users className="h-16 w-16 text-yellow-500" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">CAREER WITH US</h1>
                        <p className="text-xl text-gray-200 mb-6">
                            Join our team and build a rewarding career in logistics and freight forwarding.
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
                    {/* Introduction */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Join Our Team</h2>
                        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg border dark:border-gray-700 transition-colors">
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                                At Jaykay Freighters Pvt. Ltd., we believe our people are our greatest asset. With over three decades of
                                experience in the logistics and freight forwarding industry, we offer exciting career opportunities for
                                professionals who want to grow with a leading company.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                We are always looking for talented individuals who share our commitment to excellence, customer service,
                                and innovation. Whether you're an experienced professional or just starting your career, we provide the
                                environment and opportunities to help you succeed.
                            </p>
                        </div>
                    </div>

                    {/* Why Join Us */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Why Join Us?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700 transition-colors"
                                >
                                    <div className="flex items-start">
                                        <div className="mr-4 mt-1">{benefit.icon}</div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{benefit.title}</h3>
                                            <p className="text-gray-700 dark:text-gray-300">{benefit.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Career Areas */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Career Opportunities</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700 transition-colors">
                                <h3 className="text-xl font-bold mb-4 text-[#1a237e] dark:text-blue-400">Operations</h3>
                                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                    <li>• Freight Forwarding Executives</li>
                                    <li>• Operations Coordinators</li>
                                    <li>• Documentation Specialists</li>
                                    <li>• Warehouse Supervisors</li>
                                </ul>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700 transition-colors">
                                <h3 className="text-xl font-bold mb-4 text-[#1a237e] dark:text-blue-400">Customs & Compliance</h3>
                                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                    <li>• Customs Brokers</li>
                                    <li>• Compliance Officers</li>
                                    <li>• Trade Specialists</li>
                                    <li>• Documentation Experts</li>
                                </ul>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700 transition-colors">
                                <h3 className="text-xl font-bold mb-4 text-[#1a237e] dark:text-blue-400">Business Development</h3>
                                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                    <li>• Sales Executives</li>
                                    <li>• Account Managers</li>
                                    <li>• Business Development Managers</li>
                                    <li>• Customer Service Representatives</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Application Process */}
                    <div className="bg-[#1a237e] dark:bg-gray-800 text-white p-8 rounded-lg transition-colors">
                        <h2 className="text-3xl font-bold text-center mb-8">How to Apply</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-bold mb-4 text-yellow-400">Send Your Resume</h3>
                                <p className="text-gray-200 mb-4">
                                    Email your resume and cover letter to our HR department. Make sure to mention the position you're
                                    interested in.
                                </p>
                                <p className="text-yellow-400 font-medium">Email: careers@jaykayfreighters.com</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-4 text-yellow-400">What We Look For</h3>
                                <ul className="space-y-2 text-gray-200">
                                    <li>• Relevant education and experience</li>
                                    <li>• Strong communication skills</li>
                                    <li>• Problem-solving abilities</li>
                                    <li>• Team collaboration skills</li>
                                    <li>• Commitment to excellence</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

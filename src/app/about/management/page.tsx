/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next"
import Breadcrumb from "@/components/breadcrumb"
import CertificationLogos from "@/components/certificationLogos"

export const metadata: Metadata = {
    title: "Management - About Jaykay Freighters",
    description: "Meet the management team of Jaykay Freighters Pvt. Ltd. and learn about our leadership.",
}

const breadcrumbItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about/introduction" },
    { label: "MANAGEMENT" },
]

export default function ManagementPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
            {/* Hero Section */}
            <div className="bg-[#1a237e] dark:bg-gray-800 text-white py-16 transition-colors relative">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">ABOUT THE MANAGEMENT</h1>
                        <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
                    </div>
                </div>

                {/* Breadcrumb */}
                <div className="absolute bottom-6 left-6">
                    <Breadcrumb items={breadcrumbItems} />
                </div>
            </div>

            {/* Management Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">MANAGEMENT</h2>
                    <div className="w-20 h-1 bg-yellow-500 mx-auto mb-12"></div>

                    <div className="space-y-8">
                        {/* Introduction */}
                        <div className="text-center mb-12">
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
                                Integrity is a vital part of our functions. The teachings of Lord Mahavira of sound code of conduct and
                                ethics in business are much needed in the world of today. Our family's elder, Late Sh. Jaswant Singh Ji
                                Jain, a true Karmayogi held in high esteem in business and social circles. He was an embodiment of
                                selfless service, sincerity, dedication and righteousness. The footprints left behind by him helps us
                                light and guide our path.
                            </p>
                        </div>

                        {/* Management Team */}
                        <div className="space-y-8">
                            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border dark:border-gray-700 transition-colors">
                                <h3 className="text-xl font-bold text-[#1a237e] dark:text-blue-400 mb-3">Puneet Jain, Director</h3>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Started career in Customs Clearing & Forwarding in 1987. Having adequate knowledge in custom clearance
                                    of Import, Export Cargo, Policy & Procedures, he is credited with good business acumen and
                                    professional trade expertise backed by nearly three decades of experience.
                                </p>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border dark:border-gray-700 transition-colors">
                                <h3 className="text-xl font-bold text-[#1a237e] dark:text-blue-400 mb-3">Vikas Jain, Director</h3>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Is the promoter Director of the company credited with good business acumen and professional trade
                                    expertise backed by well over three decades of experience. He is looking after the overall functioning
                                    and forwarding aspect of the business.
                                </p>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border dark:border-gray-700 transition-colors">
                                <h3 className="text-xl font-bold text-[#1a237e] dark:text-blue-400 mb-3">Rachna Jain, Director</h3>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Is credited with good business acumen, backed by two decades of experience.
                                </p>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border dark:border-gray-700 transition-colors">
                                <h3 className="text-xl font-bold text-[#1a237e] dark:text-blue-400 mb-3">Surbhi Jain, Director</h3>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Is the newest member of our Jaykay family and she looks after internal administration.
                                </p>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border dark:border-gray-700 transition-colors">
                                <h3 className="text-xl font-bold text-[#1a237e] dark:text-blue-400 mb-3">
                                    Divyam Jain, Vice President
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Is the logistics head in the company, where he oversees the strategic planning and execution of supply
                                    chain operations. With over 8 years of experience in logistics and supply chain management. He is also
                                    an advocate for sustainable logistics practices and is committed to enhancing the company's green
                                    initiatives.
                                </p>
                            </div>
                        </div>

                        {/* Closing Statement */}
                        <div className="text-center mt-12 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border dark:border-yellow-800 transition-colors">
                            <p className="text-gray-700 dark:text-gray-300 font-medium italic">
                                All the Directors belong to reputed and well-connected business family
                            </p>
                        </div>
                    </div>

                    {/* Certification Logos */}
                    <CertificationLogos />

                </div>
            </div>
        </main>
    )
}

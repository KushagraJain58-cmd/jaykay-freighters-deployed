import type { Metadata } from "next"
import Breadcrumb from "@/components/breadcrumb"
import CertificationLogos from "@/components/certificationLogos"

export const metadata: Metadata = {
    title: "Associates - About Jaykay Freighters",
    description: "Learn about our trusted associates and partners at Jaykay Freighters Pvt. Ltd.",
}

const breadcrumbItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about/introduction" },
    { label: "ASSOCIATES" },
]

export default function AssociatesPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
            {/* Hero Section */}
            <div className="bg-[#1a237e] dark:bg-gray-800 text-white py-16 transition-colors relative">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">OUR ASSOCIATES</h1>
                        <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
                    </div>
                </div>

                {/* Breadcrumb */}
                <div className="absolute bottom-6 left-6">
                    <Breadcrumb items={breadcrumbItems} />
                </div>
            </div>

            {/* Associates Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">ASSOCIATES</h2>
                    <div className="w-20 h-1 bg-yellow-500 mx-auto mb-12"></div>

                    {/* Associate Company */}
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg border dark:border-gray-700 transition-colors mb-8">
                            <h3 className="text-2xl font-bold text-[#1a237e] dark:text-blue-400 mb-6 text-center">
                                PARSHVA GLOBAL SERVICES
                            </h3>

                            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                                <p>
                                    One of the leading licensed customs broker backed by the expertise of over 3 decades, is specialized
                                    in most dependable custom clearance and forwarding services. They specialize in arranging and
                                    coordinating all activities for shipping of goods out of India and goods coming in India.
                                </p>

                                <p>
                                    The Proprietor, Mr. Vikas Jain, has a vast and varied business experience of well over 30 years,
                                    having expert and professional team working with expertise in custom clearance of import and export
                                    cargo.
                                </p>
                            </div>

                            <div className="mt-8 p-6 bg-white dark:bg-gray-700 rounded-lg border dark:border-gray-600 transition-colors">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white mb-2">Contact:</h4>
                                        <p className="text-gray-700 dark:text-gray-300">admin@parshvaglobal.com</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white mb-2">Phone:</h4>
                                        <p className="text-gray-700 dark:text-gray-300">+91-9873056561</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Additional Associates Section */}
                        <div className="text-center mb-12">
                            <p className="text-gray-700 dark:text-gray-300 italic">
                                We work with a network of trusted partners and associates to provide comprehensive logistics solutions
                                across India and internationally.
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

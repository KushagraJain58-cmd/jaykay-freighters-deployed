/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next"
import Breadcrumb from "@/components/breadcrumb"
import CertificationLogos from "@/components/certificationLogos"

export const metadata: Metadata = {
    title: "Introduction - About Jaykay Freighters",
    description:
        "Learn about Jaykay Freighters Pvt. Ltd., our history, services, and commitment to excellence in freight forwarding.",
}

const breadcrumbItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about/introduction" },
    { label: "INTRODUCTION" },
]

export default function IntroductionPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
            {/* Hero Section */}
            <div className="bg-[#1a237e] dark:bg-gray-800 text-white py-16 transition-colors relative">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">ABOUT JAYKAY FREIGHTERS</h1>
                        <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
                    </div>
                </div>

                {/* Breadcrumb */}
                <div className="absolute bottom-6 left-6">
                    <Breadcrumb items={breadcrumbItems} />
                </div>
            </div>

            {/* Introduction Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">INTRODUCTION</h2>
                    <div className="w-20 h-1 bg-yellow-500 mx-auto mb-12"></div>

                    <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                        <p className="text-lg">
                            We at <strong>Jaykay Freighters Pvt. Ltd.</strong> are extremely happy to have a large family of
                            customers. We understand that our business does well when our partners do well. Therefore, our customers'
                            success is our success.
                        </p>

                        <p>
                            With kind patronage of its clients the Company has grown manifold with the ability to provide personalized
                            and dependable core competence in handling all types of cargo clearance of very wide product range like
                            machinery, engineering goods, raw material, metals, chemicals, pharmaceuticals, consumer goods, perishable
                            cargo, project cargo etc. for both import and export by sea and air and also serving as international
                            freight forwarders to provide door to door service.
                        </p>

                        <p>
                            The company is constantly working more arduously to provide great customer satisfaction through its
                            exemplary integrated logistics services to provide optimum benefit to the user. We are dedicated to help
                            you meet your total logistics needs with the very best of our services.
                        </p>

                        <p>
                            There is a strong team of dedicated, seasoned and professional staff on the job to provide excellent
                            innovative customized solutions to our client's needs. Our dedicated trained and experienced teams work
                            24×7 to ensure efficient movement of cargo, and respond to client's requirements with the kind of
                            knowledge that is required in this highly specialised stream.
                        </p>

                        <p>
                            We constantly emphasizing on creating innovative technologies, involving e-filing documentation, and
                            keeping abreast with the improving infrastructure in our country. There is a lot to be done.
                        </p>

                        <p>
                            We, JFPL is a total logistics company and ensures to maintain best standards of services with personalised
                            attention in handling a wide range of products under one roof providing a "single window concept" to its
                            clients in the competitive world.
                        </p>

                        <p>
                            We enjoy good rapport and meritorious status with our valued Clients, Shipping/Air Lines, Port
                            Authorities, ICDs, Train Operators and concerned government departments.
                        </p>

                        <p>
                            <strong>JFPL is the answer to all your shipping needs.</strong> We aim to take our customer to the next
                            level of logistics services. We constantly pursue improvements through innovative ideas and services to
                            achieve competitive advantage.
                        </p>

                        <p className="italic">We value your feedback to improve our services.</p>
                    </div>

                    {/* Certification Logos */}
                    <CertificationLogos />
                </div>
            </div>
        </main>
    )
}

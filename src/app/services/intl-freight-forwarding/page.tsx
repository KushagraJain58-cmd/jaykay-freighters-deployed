import type { Metadata } from "next"
import { Globe, Truck, Ship, Plane, Package, MapPin } from "lucide-react"
import Breadcrumb from "@/components/breadcrumb"

export const metadata: Metadata = {
    title: "International Freight Forwarding - Jaykay Freighters",
    description:
        "Comprehensive international freight forwarding services from groupage shipments to full container loads worldwide.",
}

const breadcrumbItems = [
    { label: "HOME", href: "/" },
    { label: "SERVICES", href: "/services" },
    { label: "INTL. FREIGHT FORWARDING" },
]

const services = [
    {
        icon: <Ship className="h-8 w-8 text-yellow-500" />,
        title: "Ocean Freight",
        description: "Full container loads (FCL) and less than container loads (LCL) worldwide.",
    },
    {
        icon: <Plane className="h-8 w-8 text-yellow-500" />,
        title: "Air Freight",
        description: "Express and standard air freight services to all major destinations.",
    },
    {
        icon: <Truck className="h-8 w-8 text-yellow-500" />,
        title: "Land Transportation",
        description: "Cross-border trucking and rail freight services.",
    },
    {
        icon: <Package className="h-8 w-8 text-yellow-500" />,
        title: "Consolidation",
        description: "Groupage services for cost-effective shipping solutions.",
    },
]

export default function IntlFreightForwardingPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
            {/* Hero Section */}
            <div className="bg-[#1a237e] dark:bg-gray-800 text-white py-16 transition-colors relative">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="flex justify-center mb-6">
                            <Globe className="h-16 w-16 text-yellow-500" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">INTERNATIONAL FREIGHT FORWARDING</h1>
                        <p className="text-xl text-gray-200 mb-6">
                            From groupage shipments to full container loads - comprehensive global logistics solutions.
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
                                Our International Freight Forwarding services provide end-to-end logistics solutions for businesses
                                looking to expand their global reach. As a licensed International Multimodal Transport Operator (MTO),
                                we offer comprehensive shipping solutions across all modes of transport.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                Whether you need to ship a single package or manage complex supply chain operations, our experienced
                                team ensures your cargo reaches its destination safely, on time, and cost-effectively.
                            </p>
                        </div>
                    </div>

                    {/* Services Grid */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Our Services</h2>
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

                    {/* Global Network */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Global Network</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <MapPin className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Asia Pacific</h3>
                                <p className="text-gray-700 dark:text-gray-300">Comprehensive coverage across Asian markets</p>
                            </div>
                            <div className="text-center">
                                <MapPin className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Europe & Americas</h3>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Direct connections to major European and American ports
                                </p>
                            </div>
                            <div className="text-center">
                                <MapPin className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Middle East & Africa</h3>
                                <p className="text-gray-700 dark:text-gray-300">Strategic partnerships in emerging markets</p>
                            </div>
                        </div>
                    </div>

                    {/* Value Proposition */}
                    <div className="bg-[#1a237e] dark:bg-gray-800 text-white p-8 rounded-lg transition-colors">
                        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our International Services?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-bold mb-4 text-yellow-400">Comprehensive Solutions</h3>
                                <ul className="space-y-2 text-gray-200">
                                    <li>• Door-to-door delivery services</li>
                                    <li>• Multi-modal transportation options</li>
                                    <li>• Customs clearance at origin and destination</li>
                                    <li>• Insurance and cargo protection</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-4 text-yellow-400">Expert Support</h3>
                                <ul className="space-y-2 text-gray-200">
                                    <li>• 30+ years of international experience</li>
                                    <li>• Real-time shipment tracking</li>
                                    <li>• Dedicated customer support</li>
                                    <li>• Competitive pricing and flexible terms</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

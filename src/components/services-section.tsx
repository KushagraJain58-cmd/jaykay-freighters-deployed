/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"
import { Package, Globe, Box, Warehouse } from "lucide-react"

const services = [
    {
        id: 1,
        title: "CUSTOM CLEARANCE",
        description: "The documented permission to import or export goods.",
        icon: <Package className="h-12 w-12 text-yellow-500 dark:text-yellow-400" />,
        href: "/services/custom-clearance",
    },
    {
        id: 2,
        title: "INTL. FREIGHT FORWARDING & MULTI MODAL TRANSPORTATION",
        description: "From group-age shipments to full container loads.",
        icon: <Globe className="h-12 w-12 text-yellow-500 dark:text-yellow-400" />,
        href: "/services/intl-freight-forwarding",
    },
    // {
    //     id: 3,
    //     title: "MULTI MODAL TRANSPORTATION",
    //     description: "We provide our customers with comprehensive solutions.",
    //     icon: <Truck className="h-12 w-12 text-yellow-500 dark:text-yellow-400" />,
    //     href: "/services/multi-modal-transportation",
    // },
    {
        id: 3,
        title: "CONSULTANCY",
        description: "Consultancy is also a part of our services.",
        icon: <Box className="h-12 w-12 text-yellow-500 dark:text-yellow-400" />,
        href: "/services/consultancy",
    },
    {
        id: 4,
        title: "WAREHOUSING",
        description: "We provide warehousing facilities across major ports.",
        icon: <Warehouse className="h-12 w-12 text-yellow-500 dark:text-yellow-400" />,
        href: "/services/warehousing",
    },
    // {
    //     id: 5,
    //     title: "AIR FREIGHT",
    //     description: "With a comprehensive range of air freight services.",
    //     icon: <Plane className="h-12 w-12 text-yellow-500 dark:text-yellow-400" />,
    //     href: "/services/air-freight",
    // },
    // {
    //     id: 6,
    //     title: "SEA FREIGHT",
    //     description: "From group age shipments to full container loads.",
    //     icon: <Ship className="h-12 w-12 text-yellow-500 dark:text-yellow-400" />,
    //     href: "/services/sea-freight",
    // },
    // {
    //     id: 7,
    //     title: "VALUE ADDED SERVICES",
    //     description: "Cargo Insurance - We help you protect your shipment.",
    //     icon: <ShieldCheck className="h-12 w-12 text-yellow-500 dark:text-yellow-400" />,
    //     href: "/services/value-added-services",
    // },
]

export default function ServicesSection() {
    return (
        <section className="py-16 bg-[#212121] dark:bg-gray-800 transition-colors">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="back-section-title text-4xl font-bold text-center mb-8 uppercase text-white">OUR SERVICES</h2>
                <p className="text-center text-gray-300 dark:text-gray-400 max-w-3xl mx-auto mb-12 italic">
                    Over the years, we have changed our working to match the requirements of our customers. We have a motivated
                    and dedicated team of professionals and experts in their respective disciplines. Our team at the same time is
                    creating ultimate customer's satisfaction by providing the most personalised services.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
                    {services.map((service) => (
                        <Link
                            key={service.id}
                            href={service.href}
                            className="service-card bg-[#1e1e1e] dark:bg-gray-700 text-white border-gray-600 dark:border-gray-500 cursor-pointer group"
                        >
                            <div className="flex items-start">
                                <div className="mr-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                                <div>
                                    <h3 className="text-xl font-bold text-yellow-500 dark:text-yellow-400 mb-2 group-hover:text-yellow-400 dark:group-hover:text-yellow-300 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-300 dark:text-gray-200">{service.description}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

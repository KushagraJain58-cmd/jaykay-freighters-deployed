import Image from "next/image"
import air from "../assets/images/home-slider/air.jpg"
import road from "../assets/images/home-slider/road.jpg"
import sea from "../assets/images/home-slider/sea.jpg"
import railway from "../assets/images/home-slider/railway.jpg"

const freightTypes = [
    {
        id: 1,
        title: "AIR FREIGHT",
        description: "Fast and reliable air freight services for time-sensitive shipments worldwide.",
        image: air,
    },
    {
        id: 2,
        title: "OCEAN FREIGHT",
        description: "Cost-effective ocean freight solutions for international shipping needs.",
        image: sea,
    },
    {
        id: 3,
        title: "ROAD FREIGHT",
        description: "Reliable and efficient road freight services across the country with timely delivery.",
        image: road,
    },
    {
        id: 4,
        title: "RAILWAY SHIPMENT",
        description: "Eco-friendly and cost-effective railway shipment solutions for bulk cargo.",
        image: railway,
    },
]

export default function FreightTypesSection() {
    return (
        <section className="py-16 bg-white dark:bg-gray-900 transition-colors">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    {freightTypes.map((type) => (
                        <div
                            key={type.id}
                            className="flex flex-col md:flex-row gap-6 items-center bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border dark:border-gray-700 transition-colors"
                        >
                            <div className="w-full md:w-1/2">
                                <Image
                                    src={type.image || "/placeholder.svg"}
                                    alt={type.title}
                                    width={600}
                                    height={400}
                                    className="rounded-lg object-cover w-full h-64"
                                />
                            </div>
                            <div className="w-full md:w-1/2">
                                <h3 className="text-2xl font-bold mb-4 text-[#1a237e] dark:text-blue-400">{type.title}</h3>
                                <p className="text-gray-700 dark:text-gray-300">{type.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

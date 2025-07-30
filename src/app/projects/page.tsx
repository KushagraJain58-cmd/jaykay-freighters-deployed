import type { Metadata } from "next"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import Breadcrumb from "@/components/breadcrumb"

export const metadata: Metadata = {
    title: "Our Projects - Jaykay Freighters",
    description:
        "Explore our successful freight forwarding and logistics projects including aviation and plant & machinery transportation.",
}

const projectCategories = [
    {
        id: 1,
        title: "Aviation - Helicopter",
        images: [
            {
                src: "/placeholder.svg?height=300&width=400",
                alt: "Helicopter transportation project 1",
            },
            {
                src: "/placeholder.svg?height=300&width=400",
                alt: "Helicopter transportation project 2",
            },
        ],
    },
    {
        id: 2,
        title: "Plant & Machinery",
        images: [
            {
                src: "/placeholder.svg?height=300&width=400",
                alt: "Plant and machinery project 1",
            },
            {
                src: "/placeholder.svg?height=300&width=400",
                alt: "Plant and machinery project 2",
            },
        ],
    },
]

const certificationLogos = [
    { name: "JAS-ANZ", logo: "/placeholder.svg?height=80&width=120" },
    { name: "MTO", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Association Delhi", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Indian Customs", logo: "/placeholder.svg?height=80&width=120" },
    { name: "BCBA", logo: "/placeholder.svg?height=80&width=120" },
    { name: "FFI", logo: "/placeholder.svg?height=80&width=120" },
    { name: "FIEO", logo: "/placeholder.svg?height=80&width=120" },
]

const breadcrumbItems = [{ label: "HOME", href: "/" }, { label: "PROJECTS" }]

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
            {/* Hero Section */}
            <div className="relative h-[400px] bg-gray-800 dark:bg-gray-900 overflow-hidden">
                {/* Background Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50">
                    <Image
                        src="/placeholder.svg?height=400&width=1200"
                        alt="Industrial background"
                        fill
                        className="object-cover opacity-50"
                        priority
                    />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 flex items-center justify-center h-full">
                    <div className="text-center text-white">
                        <h1 className="text-5xl md:text-6xl font-bold mb-4">OUR PROJECTS</h1>
                    </div>
                </div>

                {/* Breadcrumb */}
                <div className="absolute bottom-6 left-6 z-10">
                    <Breadcrumb items={breadcrumbItems} />
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-6xl mx-auto">
                    {/* Section Title */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">PROJECTS</h2>
                        <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
                    </div>

                    {/* Project Categories */}
                    <div className="space-y-16">
                        {projectCategories.map((category) => (
                            <div key={category.id} className="space-y-6">
                                {/* Category Title */}
                                <div className="flex items-center">
                                    <ChevronRight className="h-5 w-5 text-yellow-500 mr-2" />
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
                                </div>

                                {/* Project Images */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-7">
                                    {category.images.map((image, index) => (
                                        <div
                                            key={index}
                                            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                                        >
                                            <div className="aspect-[4/3] relative">
                                                <Image
                                                    src={image.src || "/placeholder.svg"}
                                                    alt={image.alt}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                                            </div>

                                            {/* Image Overlay */}
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="bg-white/90 dark:bg-gray-800/90 px-4 py-2 rounded-md">
                                                    <span className="text-gray-900 dark:text-white font-medium">View Project</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Add More Projects Button */}
                    <div className="text-center mt-16">
                        <button className="bg-[#1a237e] dark:bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-900 dark:hover:bg-blue-700 transition-colors font-medium">
                            Load More Projects
                        </button>
                    </div>
                </div>
            </div>

            {/* Certification Logos Section */}
            <div className="bg-gray-50 dark:bg-gray-800 py-12 transition-colors">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-wrap justify-center items-center gap-8">
                            {certificationLogos.map((cert, index) => (
                                <div
                                    key={index}
                                    className="w-24 h-16 md:w-32 md:h-20 bg-white dark:bg-gray-700 p-2 rounded-md shadow-sm border dark:border-gray-600 flex items-center justify-center transition-colors hover:shadow-md"
                                >
                                    <Image
                                        src={cert.logo || "/placeholder.svg"}
                                        alt={cert.name}
                                        width={120}
                                        height={80}
                                        className="object-contain max-w-full max-h-full"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

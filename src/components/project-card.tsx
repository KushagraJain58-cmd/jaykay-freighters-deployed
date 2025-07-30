"use client"

import Image from "next/image"
import { useState } from "react"

interface ProjectCardProps {
    title: string
    description?: string
    images: string[]
    category: string
}

export default function ProjectCard({ title, description, images, category }: ProjectCardProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border dark:border-gray-700 transition-colors">
            {/* Image Section */}
            <div className="relative h-64 bg-gray-200 dark:bg-gray-700">
                {images.length > 0 && (
                    <Image src={images[currentImageIndex] || "/placeholder.svg"} alt={title} fill className="object-cover" />
                )}

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">{category}</span>
                </div>

                {/* Image Navigation */}
                {images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                        <div className="flex space-x-2">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-colors ${index === currentImageIndex ? "bg-white" : "bg-white/50"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
                {description && <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>}

                <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        {images.length} {images.length === 1 ? "Image" : "Images"}
                    </span>
                    <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-medium">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    )
}

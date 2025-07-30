"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface ProjectGalleryProps {
    images: string[]
    isOpen: boolean
    onClose: () => void
    initialIndex?: number
}

export default function ProjectGallery({ images, isOpen, onClose, initialIndex = 0 }: ProjectGalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex)

    if (!isOpen) return null

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
    }

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    return (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            >
                <X className="h-8 w-8" />
            </button>

            {/* Navigation Buttons */}
            {images.length > 1 && (
                <>
                    <button onClick={prevImage} className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10">
                        <ChevronLeft className="h-8 w-8" />
                    </button>
                    <button
                        onClick={nextImage}
                        className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10"
                    >
                        <ChevronRight className="h-8 w-8" />
                    </button>
                </>
            )}

            {/* Main Image */}
            <div className="relative max-w-4xl max-h-[80vh] w-full h-full flex items-center justify-center p-4">
                <Image
                    src={images[currentIndex] || "/placeholder.svg"}
                    alt={`Project image ${currentIndex + 1}`}
                    width={800}
                    height={600}
                    className="object-contain max-w-full max-h-full"
                />
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
                <span>
                    {currentIndex + 1} / {images.length}
                </span>
            </div>

            {/* Thumbnail Strip */}
            {images.length > 1 && (
                <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2 max-w-md overflow-x-auto">
                    {images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`flex-shrink-0 w-16 h-12 relative rounded overflow-hidden border-2 transition-colors ${index === currentIndex ? "border-white" : "border-transparent"
                                }`}
                        >
                            <Image src={image || "/placeholder.svg"} alt={`Thumbnail ${index + 1}`} fill className="object-cover" />
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

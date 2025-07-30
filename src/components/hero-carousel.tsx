"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import air from "../assets/images/home-slider/air.jpg"
import road from "../assets/images/home-slider/road.jpg"
import sea from "../assets/images/home-slider/sea.jpg"
import railway from "../assets/images/home-slider/railway.jpg"

const slides = [
    {
        id: 1,
        title: "ROAD FREIGHT",
        description: "Reliable and efficient road freight services across the country with timely delivery and tracking.",
        image: road,
        buttonText: "KNOW MORE",
    },
    {
        id: 2,
        title: "AIR FREIGHT",
        description: "Fast and secure air freight services for time-sensitive shipments worldwide.",
        image: air,
        buttonText: "KNOW MORE",
    },
    {
        id: 3,
        title: "OCEAN FREIGHT",
        description: "Cost-effective ocean freight solutions for international shipping needs.",
        image: sea,
        buttonText: "KNOW MORE",
    },
    {
        id: 4,
        title: "RAILWAY SHIPMENT",
        description: `They’re creepy and they’re kooky mysterious and spooky. They’re all together ooky
        the Addams Family.Believe it or not I’m walking on air.I never
        thought I could feel so free.`,
        image: railway,
        buttonText: "KNOW MORE",
    },
]

export default function HeroCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    }

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="relative h-[80vh] w-full overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-3000 ${index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
                        }`}
                >
                    {/* <div className="absolute inset-0 bg-black/50 z-10"></div> */}
                    <Image
                        src={slide.image || "/placeholder.svg"}
                        alt={slide.title}
                        fill
                        quality={100}
                        priority={index === 0}
                        sizes="100vw"
                        className="object-cover object-center brightness-100 contrast-100"
                    />
                    <div className="absolute inset-0 flex items-center z-20">
                        <div className="container mx-auto px-4 md:px-6">
                            <div className="max-w-xl bg-black/70 p-8 rounded-md">
                                <h1 className="text-5xl font-bold text-white mb-4">{slide.title}</h1>
                                <p className="text-white/80 mb-6">{slide.description}</p>
                                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">{slide.buttonText}</Button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
                aria-label="Previous slide"
            >
                <ChevronLeft className="h-6 w-6" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
                aria-label="Next slide"
            >
                <ChevronRight className="h-6 w-6" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-yellow-500" : "bg-white/50"}`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}

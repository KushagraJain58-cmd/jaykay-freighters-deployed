import { MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import aeo from "../assets/logos/aeo.png"
import bcba from "../assets/logos/bcba.jpg"
import ffi from "../assets/logos/ffi.png"
import mto from "../assets/logos/mto.jpg"
import fieo from "../assets/logos/fieo.png"
import jasans1 from "../assets/logos/jasans1.png"
import association from "../assets/logos/association.png.jpg"
import Image from "next/image"

export default function ContactSection() {
    return (
        <section className="py-16 bg-gray-100 dark:bg-gray-800 transition-colors">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="section-title text-gray-900 dark:text-white">GET IN TOUCH</h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
                    <div className="lg:col-span-1">
                        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border dark:border-gray-700 transition-colors">
                            <div className="flex items-center mb-6">
                                <div className="bg-yellow-500 dark:bg-yellow-600 rounded-full p-2 mr-3 transition-colors">
                                    <MapPin className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white">ADDRESS</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">
                                        WHITE HOUSE, 1/18-20, RANI JHANSI ROAD,
                                        <br />
                                        PANCHKUIAN ROAD CORNER,
                                        <br />
                                        NEW DELHI – 110055, INDIA
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center mb-6">
                                <div className="bg-yellow-500 dark:bg-yellow-600 rounded-full p-2 mr-3 transition-colors">
                                    <Phone className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white">PHONE</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">+91 11 23538881-82</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">+91 11 64648881-84</p>
                                </div>
                            </div>

                            <form className="mt-6">
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors"
                                    />
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors"
                                    />
                                </div>
                                <div className="mb-4">
                                    <textarea
                                        placeholder="Your Message"
                                        rows={4}
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors"
                                    ></textarea>
                                </div>
                                <Button className="w-full bg-[#1a237e] hover:bg-blue-900 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors">
                                    SEND MESSAGE
                                </Button>
                            </form>
                        </div>
                    </div>

                    <div className="lg:col-span-2 h-[400px] rounded-lg overflow-hidden">
                        {/* This is a placeholder for the map. In a real application, you would integrate Google Maps or another map provider */}
                        <div className="w-full h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center transition-colors">
                            <p className="text-gray-600 dark:text-gray-300">Map will be displayed here</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-8 mt-12">
                    {/* Certification logos */}
                    {[jasans1, mto, association, aeo, bcba, ffi, fieo].map((src, i) => (
                        <div
                            key={i}
                            className="w-24 h-24 bg-white dark:bg-gray-900 p-1 rounded-md shadow-sm border dark:border-gray-700 flex items-center justify-center transition-colors"
                        >
                            <Image
                                src={src}
                                alt={`Certification ${i + 1}`}
                                width={94}
                                height={94}
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

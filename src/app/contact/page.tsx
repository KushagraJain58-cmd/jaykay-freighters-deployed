/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    title: "Contact Us - Jaykay Freighters",
    description: "Get in touch with Jaykay Freighters for all your freight forwarding and logistics needs.",
}

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">Contact Us</h1>

                    <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8 transition-colors">
                        <h2 className="text-2xl font-bold mb-4 text-[#1a237e] dark:text-blue-400">Get In Touch</h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            Content will be added here. This page will contain detailed contact information, office locations, contact
                            forms, and any additional contact details.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                            Please provide the specific contact information and any additional details you'd like to include.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700 transition-colors">
                                <div className="flex items-center mb-4">
                                    <MapPin className="h-6 w-6 text-yellow-500 dark:text-yellow-400 mr-3" />
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Office Address</h3>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300">
                                    WHITE HOUSE, 1/18-20, RANI JHANSI ROAD,
                                    <br />
                                    PANCHKUIAN ROAD CORNER,
                                    <br />
                                    NEW DELHI – 110055, INDIA
                                </p>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700 transition-colors">
                                <div className="flex items-center mb-4">
                                    <Phone className="h-6 w-6 text-yellow-500 dark:text-yellow-400 mr-3" />
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Phone Numbers</h3>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300">
                                    +91 11 23538881-84
                                    <br />
                                    +91 9212359057-58
                                </p>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700 transition-colors">
                                <div className="flex items-center mb-4">
                                    <Mail className="h-6 w-6 text-yellow-500 dark:text-yellow-400 mr-3" />
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Email</h3>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300">INFO@JAYKAYFREIGHTERS.COM</p>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700 transition-colors">
                                <div className="flex items-center mb-4">
                                    <Clock className="h-6 w-6 text-yellow-500 dark:text-yellow-400 mr-3" />
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Business Hours</h3>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Monday - Friday: 9:00 AM - 6:00 PM
                                    <br />
                                    Saturday: 9:00 AM - 1:00 PM
                                    <br />
                                    Sunday: Closed
                                </p>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700 transition-colors">
                            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Send us a Message</h3>
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name *</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message *</label>
                                    <textarea
                                        rows={5}
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
                                        required
                                    ></textarea>
                                </div>
                                <Button className="w-full bg-[#1a237e] hover:bg-blue-900 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors">
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

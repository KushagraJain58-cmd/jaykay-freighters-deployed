/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    title: "Enquiry - Jaykay Freighters",
    description: "Submit your freight forwarding and logistics enquiries to Jaykay Freighters.",
}

export default function EnquiryPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">Submit an Enquiry</h1>

                    <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8 transition-colors">
                        <h2 className="text-2xl font-bold mb-4 text-[#1a237e] dark:text-blue-400">Get a Quote</h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            Content will be added here. This page will contain enquiry forms for different services, quote requests,
                            and any specific enquiry processes.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                            Please provide the specific enquiry form fields and any additional information you'd like to collect.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-gray-700 transition-colors">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        First Name *
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Last Name *</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Service Required *
                                </label>
                                <select
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
                                    required
                                >
                                    <option value="">Select a service</option>
                                    <option value="air-freight">Air Freight</option>
                                    <option value="ocean-freight">Ocean Freight</option>
                                    <option value="road-freight">Road Freight</option>
                                    <option value="custom-clearance">Custom Clearance</option>
                                    <option value="warehousing">Warehousing</option>
                                    <option value="consultancy">Consultancy</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Enquiry Details *
                                </label>
                                <textarea
                                    rows={6}
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
                                    placeholder="Please provide details about your enquiry..."
                                    required
                                ></textarea>
                            </div>

                            <Button className="w-full bg-[#1a237e] hover:bg-blue-900 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors">
                                Submit Enquiry
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

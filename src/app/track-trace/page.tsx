/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Search, Package, Truck, Plane, Ship } from "lucide-react"

export const metadata: Metadata = {
    title: "Track & Trace - Jaykay Freighters",
    description: "Track your shipments in real-time with Jaykay Freighters' advanced tracking system.",
}

export default function TrackTracePage() {
    return (
        <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">Track & Trace</h1>

                    <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8 transition-colors">
                        <h2 className="text-2xl font-bold mb-4 text-[#1a237e] dark:text-blue-400">Real-Time Shipment Tracking</h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            Content will be added here. This page will contain the tracking system interface, tracking number input,
                            shipment status display, and tracking history.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                            Please provide the tracking system specifications and any additional features you'd like to include.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-gray-700 transition-colors mb-8">
                        <div className="flex items-center mb-6">
                            <Search className="h-6 w-6 text-yellow-500 dark:text-yellow-400 mr-3" />
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Track Your Shipment</h3>
                        </div>

                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Enter Tracking Number
                                </label>
                                <div className="flex gap-4">
                                    <input
                                        type="text"
                                        placeholder="Enter your tracking number here..."
                                        className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
                                    />
                                    <Button className="bg-[#1a237e] hover:bg-blue-900 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors px-8">
                                        Track Now
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700 text-center transition-colors">
                            <Package className="h-12 w-12 text-yellow-500 dark:text-yellow-400 mx-auto mb-3" />
                            <h4 className="font-bold text-gray-900 dark:text-white">Package Tracking</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Track individual packages</p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700 text-center transition-colors">
                            <Truck className="h-12 w-12 text-yellow-500 dark:text-yellow-400 mx-auto mb-3" />
                            <h4 className="font-bold text-gray-900 dark:text-white">Road Freight</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Track road shipments</p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700 text-center transition-colors">
                            <Plane className="h-12 w-12 text-yellow-500 dark:text-yellow-400 mx-auto mb-3" />
                            <h4 className="font-bold text-gray-900 dark:text-white">Air Freight</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Track air shipments</p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700 text-center transition-colors">
                            <Ship className="h-12 w-12 text-yellow-500 dark:text-yellow-400 mx-auto mb-3" />
                            <h4 className="font-bold text-gray-900 dark:text-white">Ocean Freight</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Track ocean shipments</p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700 transition-colors">
                        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">How to Track</h3>
                        <div className="space-y-3">
                            <div className="flex items-start">
                                <div className="bg-yellow-500 dark:bg-yellow-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                                    1
                                </div>
                                <p className="text-gray-700 dark:text-gray-300">Enter your tracking number in the field above</p>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-yellow-500 dark:bg-yellow-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                                    2
                                </div>
                                <p className="text-gray-700 dark:text-gray-300">Click "Track Now" to get real-time updates</p>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-yellow-500 dark:bg-yellow-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                                    3
                                </div>
                                <p className="text-gray-700 dark:text-gray-300">View detailed shipment status and location</p>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-yellow-500 dark:bg-yellow-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                                    4
                                </div>
                                <p className="text-gray-700 dark:text-gray-300">Get estimated delivery date and time</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

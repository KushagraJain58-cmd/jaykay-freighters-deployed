/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button"

export default function TrackPage() {
    return (
        <main className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-8 text-center">Track & Trace</h1>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Track your shipment in real-time with our advanced tracking system. Enter your tracking number below to get
                started.
            </p>

            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
                <form className="mb-8">
                    <div className="flex flex-col md:flex-row gap-4">
                        <input
                            type="text"
                            placeholder="Enter your tracking number"
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <Button className="bg-[#1a237e] hover:bg-blue-900">TRACK NOW</Button>
                    </div>
                </form>

                <div className="bg-gray-100 p-6 rounded-md">
                    <h2 className="text-xl font-bold mb-4 text-[#1a237e]">How to Track Your Shipment</h2>
                    <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                        <li>Enter your tracking number in the field above</li>
                        <li>Click on the "Track Now" button</li>
                        <li>View the current status and location of your shipment</li>
                        <li>Check the estimated delivery date and time</li>
                    </ol>

                    <div className="mt-6">
                        <h3 className="font-bold text-gray-800 mb-2">Don't have a tracking number?</h3>
                        <p className="text-gray-700 mb-4">
                            If you don't have a tracking number, please contact our customer service team with your shipment details:
                        </p>
                        <div className="bg-white p-4 rounded-md border border-gray-300">
                            <p className="text-gray-700">
                                <strong>Email:</strong> tracking@jaykayfreighters.com
                                <br />
                                <strong>Phone:</strong> +91 11 23538881-84
                                <br />
                                <strong>Working Hours:</strong> Monday to Friday, 9:00 AM to 6:00 PM IST
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

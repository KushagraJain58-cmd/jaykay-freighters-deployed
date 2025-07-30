/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "General Information - Jaykay Freighters",
    description: "Important information about customs regulations, shipping guidelines, and industry resources.",
}

export default function GeneralInformationPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">General Information</h1>

                    <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8 transition-colors">
                        <h2 className="text-2xl font-bold mb-4 text-[#1a237e] dark:text-blue-400">
                            Important Resources & Guidelines
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            Content will be added here. This page will contain important information about customs regulations,
                            shipping guidelines, documentation requirements, and industry resources.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                            Please provide the specific information, guidelines, or resources you'd like to include on this page.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700 transition-colors">
                            <h3 className="text-xl font-bold mb-3 text-[#1a237e] dark:text-blue-400">Customs Regulations</h3>
                            <p className="text-gray-700 dark:text-gray-300">Customs regulations content to be added...</p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700 transition-colors">
                            <h3 className="text-xl font-bold mb-3 text-[#1a237e] dark:text-blue-400">Shipping Guidelines</h3>
                            <p className="text-gray-700 dark:text-gray-300">Shipping guidelines content to be added...</p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700 transition-colors">
                            <h3 className="text-xl font-bold mb-3 text-[#1a237e] dark:text-blue-400">Documentation Requirements</h3>
                            <p className="text-gray-700 dark:text-gray-300">Documentation requirements content to be added...</p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700 transition-colors">
                            <h3 className="text-xl font-bold mb-3 text-[#1a237e] dark:text-blue-400">Industry Resources</h3>
                            <p className="text-gray-700 dark:text-gray-300">Industry resources and links to be added...</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

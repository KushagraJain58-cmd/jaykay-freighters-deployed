/* eslint-disable react/no-unescaped-entities */
"use client"

import Link from "next/link"
import { Facebook, Twitter, Linkedin, Phone, Mail, ArrowUp } from "lucide-react"

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (
        <footer className="bg-[#212121] dark:bg-gray-900 text-white transition-colors">
            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4 border-b border-blue-800 dark:border-blue-600 pb-2">ABOUT US</h3>
                        <p className="text-gray-300 dark:text-gray-400 mb-4">
                            Jaykay Freighters Pvt. Ltd. is an ISO 9001:2008 Certified Company, being one of the country's leading
                            Government Authorised Customs Broker (Custom House Agent) backed by the expertise of nearly three decades
                            being
                        </p>
                        <div className="flex space-x-2">
                            <Link
                                href="#"
                                className="bg-blue-800 dark:bg-blue-700 p-2 rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                            >
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link
                                href="#"
                                className="bg-blue-400 dark:bg-blue-500 p-2 rounded-md hover:bg-blue-500 dark:hover:bg-blue-400 transition-colors"
                            >
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link
                                href="#"
                                className="bg-blue-600 dark:bg-blue-500 p-2 rounded-md hover:bg-blue-700 dark:hover:bg-blue-400 transition-colors"
                            >
                                <Linkedin className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4 border-b border-blue-800 dark:border-blue-600 pb-2">LATEST TWEETS</h3>
                        <div className="space-y-4">
                            <div className="flex">
                                <Twitter className="h-5 w-5 text-blue-400 dark:text-blue-300 mr-2 flex-shrink-0 mt-1" />
                                <p className="text-gray-300 dark:text-gray-400 text-sm">
                                    RT @freightassoc: New regulations for international shipping coming into effect next month. Stay
                                    updated!
                                    <span className="block text-blue-400 dark:text-blue-300 mt-1">2 days ago</span>
                                </p>
                            </div>
                            <div className="flex">
                                <Twitter className="h-5 w-5 text-blue-400 dark:text-blue-300 mr-2 flex-shrink-0 mt-1" />
                                <p className="text-gray-300 dark:text-gray-400 text-sm">
                                    We're proud to announce our new partnership with Global Logistics Alliance. Expanding our reach
                                    worldwide!
                                    <span className="block text-blue-400 dark:text-blue-300 mt-1">1 week ago</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4 border-b border-blue-800 dark:border-blue-600 pb-2">FACEBOOK</h3>
                        <div className="bg-gray-800 dark:bg-gray-700 p-4 rounded-md border dark:border-gray-600 transition-colors">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-gray-700 dark:bg-gray-600 rounded-full mr-3"></div>
                                <div>
                                    <h4 className="font-semibold">Jaykay Freighters Pvt. Ltd.</h4>
                                    <p className="text-xs text-gray-400 dark:text-gray-500">133 followers</p>
                                </div>
                            </div>
                            <button className="bg-blue-600 dark:bg-blue-500 text-white text-sm py-1 px-3 rounded-md w-full hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors">
                                Follow Page
                            </button>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4 border-b border-blue-800 dark:border-blue-600 pb-2">CONTACT</h3>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <Phone className="h-5 w-5 text-yellow-500 dark:text-yellow-400 mr-2" />
                                <div>
                                    <p className="text-gray-300 dark:text-gray-400">+91 9212359057-59</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <Mail className="h-5 w-5 text-yellow-500 dark:text-yellow-400 mr-2" />
                                <p className="text-gray-300 dark:text-gray-400">INFO@JAYKAYFREIGHTERS.COM</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-6 border-t border-gray-800 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center">
                    <div className="text-gray-400 dark:text-gray-500 text-sm mb-4 md:mb-0">
                        © COPYRIGHT 2023. ALL RIGHTS RESERVED
                    </div>
                    <div className="flex space-x-4 text-sm">
                        <Link
                            href="/"
                            className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            href="/associates"
                            className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors"
                        >
                            Associates
                        </Link>
                        <Link
                            href="/career"
                            className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors"
                        >
                            Career
                        </Link>
                        <Link
                            href="/services"
                            className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors"
                        >
                            Services
                        </Link>
                        <Link
                            href="/track"
                            className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors"
                        >
                            Track & Trace
                        </Link>
                        <Link
                            href="/brochure"
                            className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors"
                        >
                            Company Brochure
                        </Link>
                        <Link
                            href="/terms"
                            className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors"
                        >
                            Terms
                        </Link>
                        <Link
                            href="/privacy"
                            className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors"
                        >
                            Privacy
                        </Link>
                    </div>
                </div>
            </div>

            <button
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 bg-yellow-500 dark:bg-yellow-600 text-black dark:text-white p-3 rounded-full shadow-lg hover:bg-yellow-600 dark:hover:bg-yellow-500 transition-colors"
                aria-label="Scroll to top"
            >
                <ArrowUp className="h-6 w-6" />
            </button>
        </footer>
    )
}

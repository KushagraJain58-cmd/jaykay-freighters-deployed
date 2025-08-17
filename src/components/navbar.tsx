"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, MapPin, Phone, Mail, ChevronDown } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import jf from "@/assets/logos/jf.png"
import Image from "next/image"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
    const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false)
    const pathname = usePathname()

    const navItems = [
        { href: "/projects", label: "PROJECTS" },
        { href: "/general-information", label: "GENERAL INFORMATION" },
        { href: "/enquiry", label: "ENQUIRY" },
        { href: "/track-trace", label: "TRACK & TRACE" },
    ]

    const aboutDropdownItems = [
        { href: "/about/introduction", label: "INTRODUCTION" },
        { href: "/about/management", label: "MANAGEMENT" },
        { href: "/about/associates", label: "ASSOCIATES" },
        { href: "#", label: "COMPANY BROCHURE", isDownload: true },
    ]

    const servicesDropdownItems = [
        { href: "/services/custom-clearance", label: "CUSTOM CLEARANCE" },
        { href: "/services/intl-freight-forwarding", label: "INTL. FREIGHT FORWARDING" },
        { href: "/services/multi-modal-transportation", label: "MULTI MODAL TRANSPORTATION" },
        { href: "/services/consultancy", label: "CONSULTANCY" },
        { href: "/services/warehousing", label: "WAREHOUSING" },
        { href: "/services/air-freight", label: "AIR FREIGHT" },
        { href: "/services/sea-freight", label: "SEA FREIGHT" },
        { href: "/services/value-added-services", label: "VALUE ADDED SERVICES" },
    ]

    const contactDropdownItems = [
        { href: "/contact/contact-details", label: "CONTACT DETAILS" },
        { href: "/contact/career-with-us", label: "CAREER WITH US" },
        { href: "/contact/current-openings", label: "CURRENT OPENINGS" },
    ]

    const isActive = (href: string) => {
        if (href === "/") {
            return pathname === "/"
        }
        return pathname.startsWith(href)
    }

    const isAboutActive = () => {
        return pathname.startsWith("/about")
    }

    const isServicesActive = () => {
        return pathname.startsWith("/services")
    }

    const isContactActive = () => {
        return pathname.startsWith("/contact")
    }

    const handleBrochureDownload = () => {
        // Placeholder for PDF download functionality
        // You can replace this with actual PDF download logic
        console.log("Download company brochure")
        // Example: window.open('/path/to/company-brochure.pdf', '_blank')
    }

    return (
        <>
            <div className="bg-white dark:bg-gray-900 py-2 px-4 md:px-6 border-b border-gray-200 dark:border-gray-700 transition-colors">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center mb-2 md:mb-0">
                        <div className="mr-4">
                            <Link href="/">
                                {/* <div className="flex items-center">
                                    <div className="w-12 h-12 relative">
                                        <div className="w-full h-full bg-[#1a237e] dark:bg-[#2563eb] flex items-center justify-center text-white font-bold text-xl rounded transition-colors">
                                            JF
                                        </div>
                                    </div>
                                </div> */}
                                <div className="flex items-center">
                                    <div className="h-12 relative">
                                        <Image
                                            src={jf}
                                            alt="Profile"
                                            className="w-full h-full rounded object-cover"
                                        />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                        <div className="flex items-center">
                            <div className="bg-yellow-500 dark:bg-yellow-600 rounded-full p-2 mr-3 transition-colors">
                                <MapPin className="h-5 w-5 text-white" />
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold uppercase text-gray-900 dark:text-gray-100">OUR LOCATION</h3>
                                <p className="text-xs text-gray-600 dark:text-gray-300">
                                    White House, 1/18-20 Rani Jhansi Road New Delhi
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div className="bg-yellow-500 dark:bg-yellow-600 rounded-full p-2 mr-3 transition-colors">
                                <Phone className="h-5 w-5 text-white" />
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold uppercase text-gray-900 dark:text-gray-100">
                                    FEEL FREE TO CALL US
                                </h3>
                                <p className="text-xs text-gray-600 dark:text-gray-300">+91 9212359057-59</p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div className="bg-yellow-500 dark:bg-yellow-600 rounded-full p-2 mr-3 transition-colors">
                                <Mail className="h-5 w-5 text-white" />
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold uppercase text-gray-900 dark:text-gray-100">MAIL US FOR QUOTES</h3>
                                <p className="text-xs text-gray-600 dark:text-gray-300">INFO@JAYKAYFREIGHTERS.COM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="bg-[#1a237e] dark:bg-gray-800 text-white transition-colors">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex justify-between items-center h-16">
                        <div className="hidden md:flex space-x-8">
                            <Link
                                href="/"
                                className={`font-medium transition-colors ${isActive("/")
                                    ? "text-yellow-400 dark:text-yellow-300"
                                    : "hover:text-yellow-400 dark:hover:text-yellow-300"
                                    }`}
                            >
                                HOME
                            </Link>

                            {/* About Dropdown */}
                            <div
                                className="relative"
                                onMouseEnter={() => setIsAboutDropdownOpen(true)}
                                onMouseLeave={() => setIsAboutDropdownOpen(false)}
                            >
                                <button
                                    className={`font-medium transition-colors flex items-center ${isAboutActive()
                                        ? "text-yellow-400 dark:text-yellow-300"
                                        : "hover:text-yellow-400 dark:hover:text-yellow-300"
                                        }`}
                                >
                                    ABOUT
                                    <ChevronDown className="ml-1 h-4 w-4" />
                                </button>

                                {/* About Dropdown Menu */}
                                {isAboutDropdownOpen && (
                                    <div className="absolute top-full left-0 mt-0 w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg z-50">
                                        {aboutDropdownItems.map((item) => (
                                            <div key={item.href}>
                                                {item.isDownload ? (
                                                    <button
                                                        onClick={handleBrochureDownload}
                                                        className="block w-full text-left px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                                    >
                                                        {item.label}
                                                    </button>
                                                ) : (
                                                    <Link
                                                        href={item.href}
                                                        className={`block px-4 py-3 text-sm transition-colors ${isActive(item.href)
                                                            ? "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200"
                                                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                                            }`}
                                                    >
                                                        {item.label}
                                                    </Link>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Services Dropdown */}
                            <div
                                className="relative"
                                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                                onMouseLeave={() => setIsServicesDropdownOpen(false)}
                            >
                                <button
                                    className={`font-medium transition-colors flex items-center ${isServicesActive()
                                        ? "text-yellow-400 dark:text-yellow-300"
                                        : "hover:text-yellow-400 dark:hover:text-yellow-300"
                                        }`}
                                >
                                    SERVICES
                                    <ChevronDown className="ml-1 h-4 w-4" />
                                </button>

                                {/* Services Dropdown Menu */}
                                {isServicesDropdownOpen && (
                                    <div className="absolute top-full left-0 mt-0 w-72 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg z-50 custom-scrollbar max-h-96 overflow-y-auto">
                                        {servicesDropdownItems.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                className={`block px-4 py-3 text-sm transition-colors ${isActive(item.href)
                                                    ? "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200"
                                                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                                    }`}
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`font-medium transition-colors ${isActive(item.href)
                                        ? "text-yellow-400 dark:text-yellow-300"
                                        : "hover:text-yellow-400 dark:hover:text-yellow-300"
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            ))}

                            {/* Contact Us Dropdown */}
                            <div
                                className="relative"
                                onMouseEnter={() => setIsContactDropdownOpen(true)}
                                onMouseLeave={() => setIsContactDropdownOpen(false)}
                            >
                                <button
                                    className={`font-medium transition-colors flex items-center ${isContactActive()
                                        ? "text-yellow-400 dark:text-yellow-300"
                                        : "hover:text-yellow-400 dark:hover:text-yellow-300"
                                        }`}
                                >
                                    CONTACT US
                                    <ChevronDown className="ml-1 h-4 w-4" />
                                </button>

                                {/* Contact Dropdown Menu */}
                                {isContactDropdownOpen && (
                                    <div className="absolute top-full left-0 mt-0 w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg z-50">
                                        {contactDropdownItems.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                className={`block px-4 py-3 text-sm transition-colors ${isActive(item.href)
                                                    ? "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200"
                                                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                                    }`}
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <ThemeToggle />
                            <div className="md:hidden">
                                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-[#1a237e] dark:bg-gray-800 pb-4 px-4 transition-colors">
                        <div className="flex flex-col space-y-3">
                            <Link
                                href="/"
                                className={`font-medium transition-colors py-2 border-b border-blue-800 dark:border-gray-600 ${isActive("/")
                                    ? "text-yellow-400 dark:text-yellow-300"
                                    : "hover:text-yellow-400 dark:hover:text-yellow-300"
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                HOME
                            </Link>

                            {/* Mobile About Section */}
                            <div className="py-2 border-b border-blue-800 dark:border-gray-600">
                                <div className="font-medium text-yellow-400 dark:text-yellow-300 mb-2">ABOUT</div>
                                <div className="pl-4 space-y-2">
                                    {aboutDropdownItems.map((item) => (
                                        <div key={item.href}>
                                            {item.isDownload ? (
                                                <button
                                                    onClick={() => {
                                                        handleBrochureDownload()
                                                        setIsMenuOpen(false)
                                                    }}
                                                    className="block text-sm text-gray-300 hover:text-yellow-400 dark:hover:text-yellow-300 transition-colors"
                                                >
                                                    {item.label}
                                                </button>
                                            ) : (
                                                <Link
                                                    href={item.href}
                                                    className={`block text-sm transition-colors ${isActive(item.href)
                                                        ? "text-yellow-400 dark:text-yellow-300"
                                                        : "text-gray-300 hover:text-yellow-400 dark:hover:text-yellow-300"
                                                        }`}
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    {item.label}
                                                </Link>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Mobile Services Section */}
                            <div className="py-2 border-b border-blue-800 dark:border-gray-600">
                                <div className="font-medium text-yellow-400 dark:text-yellow-300 mb-2">SERVICES</div>
                                <div className="pl-4 space-y-2">
                                    {servicesDropdownItems.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className={`block text-sm transition-colors ${isActive(item.href)
                                                ? "text-yellow-400 dark:text-yellow-300"
                                                : "text-gray-300 hover:text-yellow-400 dark:hover:text-yellow-300"
                                                }`}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`font-medium transition-colors py-2 border-b border-blue-800 dark:border-gray-600 ${isActive(item.href)
                                        ? "text-yellow-400 dark:text-yellow-300"
                                        : "hover:text-yellow-400 dark:hover:text-yellow-300"
                                        }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}

                            {/* Mobile Contact Section */}
                            <div className="py-2 border-b border-blue-800 dark:border-gray-600">
                                <div className="font-medium text-yellow-400 dark:text-yellow-300 mb-2">CONTACT US</div>
                                <div className="pl-4 space-y-2">
                                    {contactDropdownItems.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className={`block text-sm transition-colors ${isActive(item.href)
                                                ? "text-yellow-400 dark:text-yellow-300"
                                                : "text-gray-300 hover:text-yellow-400 dark:hover:text-yellow-300"
                                                }`}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </>
    )
}

"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"
import Breadcrumb from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import CertificationLogos from "@/components/certificationLogos"

const breadcrumbItems = [
    { label: "HOME", href: "/" },
    { label: "CONTACT US", href: "/contact/contact-details" },
    { label: "CONTACT DETAILS" },
]

export default function ContactDetailsClientPage() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        message: "",
        preferredContact: "email",
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({
            ...prev,
            preferredContact: e.target.value,
        }))
    }

    // const handleSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault()

    //     // Email logic ready for implementation
    //     const emailData = {
    //         to: "jainkushagra582@gmail.com",
    //         subject: `New Contact Form Submission from ${formData.fullName}`,
    //         body: `
    //     Name: ${formData.fullName}
    //     Email: ${formData.email}
    //     Phone: ${formData.phoneNumber}
    //     Preferred Contact Method: ${formData.preferredContact}

    //     Message:
    //     ${formData.message}
    //   `,
    //         formData: formData,
    //     }

    //     // TODO: Implement email sending logic here
    //     console.log("Email data ready to send:", emailData)

    //     // For now, just show an alert
    //     // alert("Form submission is currently disabled. Email logic is ready for implementation.")
    // }
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            // const response = await fetch("/api/send-email", {
            //     method: "POST",
            //     headers: { "Content-Type": "application/json" },
            //     body: JSON.stringify(formData),
            // })

            // const result = await response.json()

            // if (result.success) {
            //     alert("Email sent successfully!")
            //     setFormData({
            //         fullName: "",
            //         email: "",
            //         phoneNumber: "",
            //         message: "",
            //         preferredContact: "email",
            //     })
            // } else {
            //     alert("Failed to send email. Please try again later.")
            // }
            alert("Form submission is currently disabled. Email logic is ready for implementation.")
        } catch (error) {
            console.error("Error submitting form:", error)
            alert("Something went wrong.")
        }
    }


    return (
        <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
            {/* Hero Section */}
            <div
                className="relative h-[400px] bg-gradient-to-r from-[#1a237e] to-[#3949ab] dark:from-gray-800 dark:to-gray-700 text-white overflow-hidden"
                style={{
                    backgroundImage: "url('/placeholder.svg?height=400&width=1200')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#1a237e]/80 dark:bg-gray-800/80"></div>

                {/* Airplane silhouette */}
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-20">
                    <div className="w-96 h-48 bg-white/10 rounded-full transform rotate-12"></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 flex items-center justify-center h-full">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-4">GET IN TOUCH</h1>
                    </div>
                </div>

                {/* Breadcrumb */}
                <div className="absolute bottom-6 left-6 z-10">
                    <Breadcrumb items={breadcrumbItems} />
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-7xl mx-auto">
                    {/* Section Title */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">CONTACT US</h2>
                        <div className="w-20 h-1 bg-[#1a237e] dark:bg-blue-500 mx-auto"></div>
                    </div>

                    {/* Two Column Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Left Column - Contact Form */}
                        <div>
                            <h3 className="text-2xl font-bold text-[#1a237e] dark:text-blue-400 mb-4">GET IN TOUCH WITH US</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-8">
                                Please enter your details, and reason for enquiry in the form below. One of our friendly staff will be
                                in contact with you shortly.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <input
                                        type="text"
                                        name="fullName"
                                        placeholder="Full Name"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a237e] dark:focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors"
                                        required
                                    />
                                </div>

                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a237e] dark:focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors"
                                        required
                                    />
                                </div>

                                <div>
                                    <input
                                        type="tel"
                                        name="phoneNumber"
                                        placeholder="Phone Number"
                                        value={formData.phoneNumber}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a237e] dark:focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors"
                                        required
                                    />
                                </div>

                                <div>
                                    <textarea
                                        name="message"
                                        placeholder="Your Message"
                                        rows={6}
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a237e] dark:focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors resize-vertical"
                                        required
                                    ></textarea>
                                </div>

                                {/* Preferred Contact Method */}
                                <div>
                                    <p className="text-gray-700 dark:text-gray-300 mb-3 font-medium">Preferred contact method:</p>
                                    <div className="flex space-x-6">
                                        <label className="flex items-center">
                                            <input
                                                type="radio"
                                                name="preferredContact"
                                                value="phone"
                                                checked={formData.preferredContact === "phone"}
                                                onChange={handleRadioChange}
                                                className="mr-2 text-[#1a237e] focus:ring-[#1a237e]"
                                            />
                                            <span className="text-gray-700 dark:text-gray-300">Phone</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input
                                                type="radio"
                                                name="preferredContact"
                                                value="email"
                                                checked={formData.preferredContact === "email"}
                                                onChange={handleRadioChange}
                                                className="mr-2 text-[#1a237e] focus:ring-[#1a237e]"
                                            />
                                            <span className="text-gray-700 dark:text-gray-300">Email</span>
                                        </label>
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    disabled={true} // Currently disabled as requested
                                    className="bg-[#1a237e] hover:bg-blue-900 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Send className="h-4 w-4 mr-2" />
                                    Submit
                                </Button>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                                    *Submit button is currently disabled. Email functionality is ready for implementation.
                                </p>
                            </form>
                        </div>

                        {/* Right Column - Company Details */}
                        <div>
                            <h3 className="text-2xl font-bold text-[#1a237e] dark:text-blue-400 mb-8">COMPANY DETAILS</h3>

                            <div className="space-y-8">
                                {/* Company Name */}
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">JAYKAY FREIGHTERS PVT. LTD.</h4>
                                </div>

                                {/* CIN */}
                                <div>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        <span className="font-medium italic">CIN:</span> U60231DL1996PTC076894
                                    </p>
                                </div>

                                {/* Phone */}
                                <div>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        <span className="font-medium italic">Phone:</span> +91 11 23538881-84, +91 9212359057-58
                                    </p>
                                </div>

                                {/* Email */}
                                <div>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        <span className="font-medium italic">Email:</span> info@jaykayfreighters.com
                                    </p>
                                </div>

                                {/* Address */}
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">ADDRESS</h4>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        White House, 1/18-20 Rani Jhansi Road Panchkuian Road Corner,
                                        <br />
                                        New Delhi 110055 (India)
                                    </p>
                                </div>

                                {/* Google Maps */}
                                <div className="mt-8">
                                    <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.0123456789!2d77.2090!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd0123456789%3A0x1234567890abcdef!2sWhite%20House%2C%20Rani%20Jhansi%20Road%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            title="Jaykay Freighters Office Location"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Certification Logos Section */}
            <div className="bg-gray-50 dark:bg-gray-800 py-12 transition-colors">
                <CertificationLogos />

            </div>
        </main>
    )
}

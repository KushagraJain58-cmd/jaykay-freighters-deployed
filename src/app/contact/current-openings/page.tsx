/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next"
import { Briefcase, MapPin, Clock, Users } from "lucide-react"
import Breadcrumb from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    title: "Current Openings - Jaykay Freighters",
    description: "Explore current job openings and career opportunities at Jaykay Freighters Pvt. Ltd.",
}

const breadcrumbItems = [
    { label: "HOME", href: "/" },
    { label: "CONTACT US", href: "/contact/contact-details" },
    { label: "CURRENT OPENINGS" },
]

const jobOpenings = [
    {
        id: 1,
        title: "Senior Freight Forwarding Executive",
        department: "Operations",
        location: "New Delhi",
        type: "Full-time",
        experience: "3-5 years",
        description:
            "Handle international freight forwarding operations, coordinate with overseas agents, and manage customer relationships.",
        requirements: [
            "Bachelor's degree in relevant field",
            "3-5 years experience in freight forwarding",
            "Knowledge of customs procedures",
            "Strong communication skills",
        ],
    },
    {
        id: 2,
        title: "Customs Broker",
        department: "Customs & Compliance",
        location: "New Delhi",
        type: "Full-time",
        experience: "2-4 years",
        description: "Handle customs clearance procedures, prepare documentation, and ensure compliance with regulations.",
        requirements: [
            "Customs broker license preferred",
            "2-4 years experience in customs clearance",
            "Knowledge of import/export procedures",
            "Attention to detail",
        ],
    },
    {
        id: 3,
        title: "Business Development Manager",
        department: "Sales & Marketing",
        location: "New Delhi",
        type: "Full-time",
        experience: "5+ years",
        description:
            "Develop new business opportunities, maintain client relationships, and achieve sales targets in logistics sector.",
        requirements: [
            "MBA or equivalent qualification",
            "5+ years experience in business development",
            "Strong network in logistics industry",
            "Excellent presentation skills",
        ],
    },
]

export default function CurrentOpeningsPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
            {/* Hero Section */}
            <div className="bg-[#1a237e] dark:bg-gray-800 text-white py-16 transition-colors relative">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="flex justify-center mb-6">
                            <Briefcase className="h-16 w-16 text-yellow-500" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">CURRENT OPENINGS</h1>
                        <p className="text-xl text-gray-200 mb-6">
                            Explore exciting career opportunities and join our growing team.
                        </p>
                        <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
                    </div>
                </div>

                {/* Breadcrumb */}
                <div className="absolute bottom-6 left-6">
                    <Breadcrumb items={breadcrumbItems} />
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-6xl mx-auto">
                    {/* Introduction */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Available Positions</h2>
                        <div className="text-center mb-12">
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                                We are currently looking for talented professionals to join our team. Explore the opportunities below
                                and take the next step in your career with Jaykay Freighters.
                            </p>
                        </div>
                    </div>

                    {/* Job Listings */}
                    <div className="space-y-8">
                        {jobOpenings.map((job) => (
                            <div
                                key={job.id}
                                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-gray-700 transition-colors"
                            >
                                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{job.title}</h3>
                                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                                            <div className="flex items-center">
                                                <Briefcase className="h-4 w-4 mr-1" />
                                                {job.department}
                                            </div>
                                            <div className="flex items-center">
                                                <MapPin className="h-4 w-4 mr-1" />
                                                {job.location}
                                            </div>
                                            <div className="flex items-center">
                                                <Clock className="h-4 w-4 mr-1" />
                                                {job.type}
                                            </div>
                                            <div className="flex items-center">
                                                <Users className="h-4 w-4 mr-1" />
                                                {job.experience}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:ml-6">
                                        <Button className="bg-[#1a237e] hover:bg-blue-900 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors">
                                            Apply Now
                                        </Button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Job Description</h4>
                                        <p className="text-gray-700 dark:text-gray-300">{job.description}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Requirements</h4>
                                        <ul className="space-y-2">
                                            {job.requirements.map((requirement, index) => (
                                                <li key={index} className="text-gray-700 dark:text-gray-300 flex items-start">
                                                    <span className="text-yellow-500 mr-2">•</span>
                                                    {requirement}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* No Current Openings Message (if needed) */}
                    {jobOpenings.length === 0 && (
                        <div className="text-center py-16">
                            <Briefcase className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">No Current Openings</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-6">
                                We don't have any open positions at the moment, but we're always interested in hearing from talented
                                professionals.
                            </p>
                            <Button className="bg-[#1a237e] hover:bg-blue-900 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors">
                                Send Your Resume
                            </Button>
                        </div>
                    )}

                    {/* Contact Information */}
                    <div className="mt-16 bg-[#1a237e] dark:bg-gray-800 text-white p-8 rounded-lg transition-colors">
                        <h2 className="text-3xl font-bold text-center mb-8">Ready to Apply?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-bold mb-4 text-yellow-400">Application Process</h3>
                                <p className="text-gray-200 mb-4">
                                    To apply for any of the above positions, please send your resume along with a cover letter to our HR
                                    department.
                                </p>
                                <p className="text-yellow-400 font-medium">Email: careers@jaykayfreighters.com</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-4 text-yellow-400">What to Include</h3>
                                <ul className="space-y-2 text-gray-200">
                                    <li>• Updated resume/CV</li>
                                    <li>• Cover letter mentioning the position</li>
                                    <li>• Relevant certificates and documents</li>
                                    <li>• Expected salary and notice period</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

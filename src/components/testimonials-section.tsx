"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
    {
        id: 1,
        text: "I had the pleasure of working with JFPL (Jaykay Freighters Pvt. Ltd.) a well known and renowned Custom Broking and Freight Forwarding Company, my experience with them is extremely great. Their professional team of experienced people is there to understand the client's requirements and ensure that the respective job is completed well in time with complete satisfaction.",
        author: "Client Name",
        position: "Company Name",
    },
    {
        id: 2,
        text: "My experience with Jaykay Freighters was an amazing one!! They have a widespread knowledge of the day to day problems in the business and are ready with multiple and efficient solutions also keeping up with the time. I would strongly recommend one to be a part of this exquisite work relationship.",
        author: "Another Client",
        position: "Company Name",
    },
    {
        id: 3,
        text: "Jaykay Freighters has been our trusted logistics partner for over 5 years. Their attention to detail and commitment to timely delivery has helped our business grow exponentially. We highly recommend their services to anyone looking for reliable freight solutions.",
        author: "Third Client",
        position: "Company Name",
    },
    {
        id: 4,
        text: `We appreciate the quality work provided by you and your team towards smooth handling of our break bulk, ODC and general shipments. We commend you for cost-effective services, an outstanding customer care team and the level of accountability and dedication demonstrated by your organization. 
        We wish you and your organization a continued fruitful professional success in all time to come.
        Thank you for your Cooperation and looking forward to many more years of association with you.
        `,
        author: "Fourth Client",
        position: "Company Name",
    }
]

export default function TestimonialsSection() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0)

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    }

    return (
        <section className="py-16 bg-white dark:bg-gray-900 transition-colors">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="section-title text-gray-900 dark:text-white">WORDS FROM OUR CLIENTS</h2>

                <div className="relative max-w-4xl mx-auto mt-12">
                    <div className="flex overflow-hidden">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={testimonial.id}
                                className={`w-full flex-shrink-0 transition-all duration-500 ease-in-out transform ${index === currentTestimonial ? "opacity-100 translate-x-0" : "opacity-0 absolute"
                                    }`}
                                style={{
                                    transform:
                                        index === currentTestimonial
                                            ? "translateX(0)"
                                            : `translateX(${(index - currentTestimonial) * 100}%)`,
                                }}
                            >
                                <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg relative border dark:border-gray-700 transition-colors">
                                    <Quote className="h-12 w-12 text-yellow-500 dark:text-yellow-400 absolute -top-6 left-6" />
                                    <p className="text-gray-700 dark:text-gray-300 italic mb-6 pt-4">{testimonial.text}</p>
                                    {/* <div className="flex items-center">
                                        <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full mr-4"></div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.author}</h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.position}</p>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={prevTestimonial}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full border dark:border-gray-600 transition-colors"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                        onClick={nextTestimonial}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full border dark:border-gray-600 transition-colors"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="h-6 w-6" />
                    </button>

                    <div className="flex justify-center mt-6 space-x-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentTestimonial(index)}
                                className={`w-3 h-3 rounded-full transition-colors ${index === currentTestimonial ? "bg-yellow-500 dark:bg-yellow-400" : "bg-gray-300 dark:bg-gray-600"
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

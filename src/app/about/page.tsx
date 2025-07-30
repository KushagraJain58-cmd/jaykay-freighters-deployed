import type { Metadata } from "next"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
    title: "About Us - Jaykay Freighters",
    description:
        "Learn about Jaykay Freighters Pvt. Ltd., an ISO 9001:2015 certified freight forwarding company with three decades of expertise.",
}

export default function AboutPage() {
    // Redirect to introduction page since About shouldn't be directly accessible
    redirect("/about/introduction")
}

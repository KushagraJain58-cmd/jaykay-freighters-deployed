import type { Metadata } from "next"
import ContactDetailsClientPage from "./ContactDetailsClientPage"

export const metadata: Metadata = {
    title: "Contact Details - Jaykay Freighters",
    description: "Get in touch with Jaykay Freighters for all your freight forwarding and logistics needs.",
}

export default function ContactDetailsPage() {
    return <ContactDetailsClientPage />
}

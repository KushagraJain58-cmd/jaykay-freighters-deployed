import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface BreadcrumbItem {
    label: string
    href?: string
}

interface BreadcrumbProps {
    items: BreadcrumbItem[]
    className?: string
}

export default function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
    return (
        <nav className={`flex items-center text-sm font-medium ${className}`} aria-label="Breadcrumb">
            {items.map((item, index) => (
                <div key={index} className="flex items-center">
                    {index > 0 && <ChevronRight className="h-4 w-4 mx-2 text-yellow-400" />}
                    {item.href ? (
                        <Link href={item.href} className="text-yellow-400 hover:text-yellow-300 transition-colors cursor-pointer">
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-yellow-400">{item.label}</span>
                    )}
                </div>
            ))}
        </nav>
    )
}

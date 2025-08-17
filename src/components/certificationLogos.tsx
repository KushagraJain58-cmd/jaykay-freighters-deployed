"use client"

import Image from "next/image"
import aeo from "@/assets/logos/aeo.png"
import bcba from "@/assets/logos/bcba.jpg"
import ffi from "@/assets/logos/ffi.png"
import mto from "@/assets/logos/mto.jpg"
import fieo from "@/assets/logos/fieo.png"
import iso from "@/assets/logos/iso.jpg"
import dcba from "@/assets/logos/dcba.jpg"
import amtoi from "@/assets/logos/amtoi.jpg"
import msme from "@/assets/logos/msme.jpg"

const logos = [iso, mto, dcba, bcba, aeo, amtoi, ffi, fieo, msme]

export default function CertificationLogos() {
    return (
        <div className="flex flex-wrap justify-center items-center gap-8 mt-12">
            {logos.map((src, i) => (
                <div
                    key={i}
                    className="w-24 h-24 bg-white dark:bg-gray-900 p-1 rounded-md shadow-sm border dark:border-gray-700 flex items-center justify-center transition-colors"
                >
                    <Image
                        src={src}
                        alt={`Certification ${i + 1}`}
                        width={94}
                        height={94}
                        className="object-contain"
                    />
                </div>
            ))}
        </div>
    )
}

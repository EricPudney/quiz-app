'use client'

import Link from "next/link";

export default function EditBtn({hRef}: {hRef: string}) {

    return (
        <>
            <Link href={hRef} className="px-6 py-2 rounded-xl bg-green-600 hover:bg-green-800 w-[35%]">
            <span className="text-white">
            Edit
            </span>
            </Link>
        </>
    )
}
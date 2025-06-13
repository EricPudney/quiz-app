'use client'

import { Question, Quiz } from "../data/definitions";

export default function EditBtn({item}: {item: Quiz | Question}) {

    const editItem = ()=>{
        // redirect to edit item page
    }

    return (
        <>
        <button className="px-6 py-2 rounded-xl bg-green-600 text-white hover:bg-green-800 w-[35%]" onClick={editItem}>
            Edit
        </button>
        </>
    )
}
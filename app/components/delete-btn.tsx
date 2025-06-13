'use client'

import { Question, Quiz } from "../data/definitions";

export default function DeleteBtn({item}: {item: Quiz | Question}) {

    const deleteItem = ()=>{
        // delete server action?
    }

    return (
        <>
        <button className="px-6 py-2 rounded-xl bg-red-600 text-white hover:bg-red-800 w-[35%]" onClick={deleteItem}>
            Delete
        </button>
        </>
    )
}
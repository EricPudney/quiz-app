'use client'

import { deleteItem } from "../data/actions";

export default function DeleteBtn({id, type}: {id: number, type: string}) {

    const deleteIt = async ()=>{
        const response = await deleteItem({id, type})
        console.log(response)
    }

    return (
        <>
        <button className="px-6 py-2 rounded-xl bg-red-600 text-white hover:bg-red-800 w-[35%]" onClick={deleteIt}>
            Delete
        </button>
        </>
    )
}
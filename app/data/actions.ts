'use server'

import { Question, Quiz } from "./definitions";
import { createClient } from '@/app/utils/supabase/server';


export async function editItem(item: Quiz | Question) {

}

export async function deleteItem({id, type}: {id: number, type: string}) {
    console.log("running server action")
    const supabase = await createClient()
    const response = await supabase
    .from(type).delete()
    .eq('id', id)
    return response
}
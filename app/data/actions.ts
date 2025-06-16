'use server'

import { redirect } from "next/navigation";
import { Question, Quiz } from "./definitions";
import { createClient } from '@/app/utils/supabase/server';
import { revalidatePath } from "next/cache";


export async function editItem({id, type}: {id: number, type: string}) {

}

export async function deleteItem({id, type}: {id: number, type: string}) {
    console.log("running server action")
    const supabase = await createClient()
    const response = await supabase
    .from(type).delete()
    .eq('id', id)
    revalidatePath('/', 'layout')
    redirect(`/${type}`)
}

export async function login(formData: FormData) {
  const supabase = await createClient()
  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }
  const { error } = await supabase.auth.signInWithPassword(data)
  if (error) {
    console.log(error.message)
    redirect('/error')
  }
  revalidatePath('/', 'layout')
  redirect('/quizzes')
}
export async function signup(formData: FormData) {
  const supabase = await createClient()
  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }
  const { error } = await supabase.auth.signUp(data)
  if (error) {
    redirect('/error')
  }
  revalidatePath('/', 'layout')
  redirect('/')
}
"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/app/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function editItem({ formData, id, type }: { formData: FormData; id: number; type: string }) {
  console.log("updating item in db");
  const supabase = await createClient();
  const response = await supabase.from(type).update(formData).eq('id', id);
  return response
}

export async function deleteItem({ id, type }: { id: number; type: string }) {
  const supabase = await createClient();
  const response = await supabase.from(type).delete().eq("id", id);
  revalidatePath("/", "layout");
  redirect(`/${type}`);
}

export async function addQuestion(formData: FormData) {
  console.log(formData);
  const supabase = await createClient();
  const newQ = {
    text: formData.get("text") as string,
    answer: formData.get("answer") as string,
  }
  const response = await supabase.from("questions").insert(newQ);
  console.log(response);
  revalidatePath("/", "layout");
  redirect(`/questions`);
}

export async function addQuiz(formData: FormData) {
  console.log(formData);
  const supabase = await createClient();
  const newQ = {
    description: formData.get("description") as string,
  }
  const response = await supabase.from("quizzes").insert(newQ);
  console.log(response);
  revalidatePath("/", "layout");
  redirect(`/quizzes`);
}

export async function login(formData: FormData) {
  const supabase = await createClient();
  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };
  const { error } = await supabase.auth.signInWithPassword(data);
  if (error) {
    console.log(error.message);
    redirect("/error");
  }
  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup(formData: FormData) {
  const supabase = await createClient();
  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };
  const { error } = await supabase.auth.signUp(data);
  if (error) {
    redirect("/error");
  }
  revalidatePath("/", "layout");
  redirect("/");
}

export async function signOut() {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("Error: ", error.message);
  }
  revalidatePath("/", "layout");
  redirect("/");
}

export async function checkUser() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser()
  return user ? true : false;
}

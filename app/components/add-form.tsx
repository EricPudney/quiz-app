"use client";

import { addQuestion, addQuiz } from "../data/actions";

export default function AddForm({ type }: { type: string }) {
  const fields = type === "quizzes" ? ["description"] : ["text", "answer"];
  return (
    <>
      <form action={type === "quizzes" ? addQuiz : addQuestion}>
        {fields.map((i, j) => {
          return <div className="flex flex-col"><label>{i}</label><input type="text" key={j} name={i} /></div>;
        })}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

import { Question } from "../data/definitions";

export default function QuestionInfo({question}: {question: Question}) {
    return(
        <>
        <h3>{question.text}</h3>
        </>
    )
}
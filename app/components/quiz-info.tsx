import { Quiz } from "../data/definitions";

export default function QuizInfo({quiz}: {quiz: Quiz}) {
    return(
        <>
        <h3>{quiz.description}</h3>
        </>
    )
}
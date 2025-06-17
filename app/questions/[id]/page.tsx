import QuestionInfo from '@/app/components/question-info';
import { Question } from '@/app/data/definitions';
import { createClient } from '@/app/utils/supabase/server';

export default async function QuizPage({ params }: { params: { id: string } }) {
    const id = Number(params.id)
    const supabase = await createClient();
    const { data: question, error } = await supabase.from("questions").select().eq('id', id);
    if (error) {
        console.error("Error fetching quiz:", error.message);
        return <div>Error loading quizzes.</div>;
    }
    if (!question) {
        return <div>Quiz not found.</div>;
    }
    const questionString = JSON.stringify(question[0])
    const questionData: Question = JSON.parse(questionString)

    return <>
    <main className='mt-16'>
        <QuestionInfo question={questionData}/>
    </main>
    </>
}
import QuizInfo from '@/app/components/quiz-info';
import { Quiz } from '@/app/data/definitions';
import { createClient } from '@/app/utils/supabase/server';

export default async function QuizPage({ params }: { params: { id: string } }) {
    const id = Number(await params.id)
    const supabase = await createClient();
    const { data: quiz, error } = await supabase.from("quizzes").select().eq('id', id);
    if (error) {
        console.error("Error fetching quiz:", error.message);
        return <div>Error loading quizzes.</div>;
    }
    if (!quiz) {
        return <div>Quiz not found.</div>;
    }
    const quizString = JSON.stringify(quiz[0])
    const quizData: Quiz = JSON.parse(quizString)

    return <QuizInfo quiz={quizData}/>
}
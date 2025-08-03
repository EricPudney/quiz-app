import { createClient } from '@/app/utils/supabase/server';
import { Question } from '../data/definitions';
import QuestionCard from '../components/question-card';
import AddForm from '../components/add-form';


export default async function Questions() {

    const supabase = await createClient();
    const { data: questions, error } = await supabase.from("questions").select();
    if (error) {
        console.error("Error fetching questions:", error.message);
        return <div>Error loading questions.</div>;
    }
    const questionString = JSON.stringify(questions)
    const questionData: Question[] = JSON.parse(questionString)
   

    return (
        <>
            <main className='mt-16'>
                <h1 className='text-4xl font-extrabold text-center text-blue-700 dark:text-blue-400 my-6'>My Questions</h1>
                <div className='flex flex-wrap justify-center gap-4'>
                    {questionData.map((q: Question)=><QuestionCard item={q} key={q.id}/>)}
                </div>
                <AddForm type="questions" key="1"/>
            </main>
        </>
    )
}
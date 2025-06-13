import { createClient } from '@/app/utils/supabase/server';
import Card from '../components/card';
import { Quiz } from '../data/definitions';


export default async function Quizzes() {

    const supabase = await createClient();
    const { data: quizzes, error } = await supabase.from("quizzes").select();
    if (error) {
        console.error("Error fetching quizzes:", error.message);
        return <div>Error loading quizzes.</div>;
    }
    const quizString = JSON.stringify(quizzes)
    const quizData: Quiz[] = JSON.parse(quizString)
   

    return (
        <>
            <main >
                <h1 className='text-4xl font-extrabold text-center text-blue-700 dark:text-blue-400 my-6'>My Quizzes</h1>
                <div className='flex flex-wrap justify-center gap-4'>
                    {quizData.map((q: Quiz)=><Card item={q} key={q.id}/>)}
                </div>
            </main>
        </>
    )
}





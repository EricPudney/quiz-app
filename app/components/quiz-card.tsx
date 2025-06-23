import {Quiz} from '@/app/data/definitions'
import DeleteBtn from './delete-btn'
import EditBtn from './edit-btn'

export default function QuizCard({item}: {item: Quiz }) {

    return (
        <div className="w-xs mt-6 mx-8 p-4 text-center border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between min-h-[200px]">
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{item.description}</h3>
                <span className="mb-5 text-xs text-gray-500 dark:text-gray-400">created on {item.date_created}</span>
            <div className="flex justify-center space-x-4">
                <DeleteBtn id={item.id} type="quizzes"/>
                <EditBtn hRef={`quizzes/${item.id}`}/>
            </div>
        </div>
    )
}

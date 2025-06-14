import {Question} from '@/app/data/definitions'
import DeleteBtn from './delete-btn'
import EditBtn from './edit-btn'

export default function QuestionCard({item}: {item: Question}) {

    return (
        <div className="w-xs mt-6 mx-8 p-4 text-center border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between min-h-[200px]">
                <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">{item.text}</p>
                <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">{item.answer}</p>
                <span className="mb-5 text-xs text-gray-500 dark:text-gray-400">created on {item.date_created}</span>
            <div className="flex justify-center space-x-4">
                <DeleteBtn id={item.id} type={"questions"}/>
                <EditBtn hRef={`questions/${item.id}`}/>
            </div>
        </div>
    )
}
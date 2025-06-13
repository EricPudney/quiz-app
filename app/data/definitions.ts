export type Quiz = {
    card_type: "quiz"
    date_created: string | null
    description: string | null
    id: number
}

export type Question = {
    card_type: "question"
    date_created: string | null
    text: string | null
    answer: string | null
    type: string | null
    id: number
}

export type Quiz = {
    date_created: string | null
    description: string | null
    id: number
}

export type Question = {
    date_created: string | null
    text: string | null
    answer: string | null
    type: string | null
    id: number
}

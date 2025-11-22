
interface Category {
    category: string
    sub_categories: Sub_Category[]
}

interface Sub_Category {
    title: string
    value: string | number | null
    africa: number | string
    world: number | string
}

export const rankings: Category[] = [
    {
        category: "Geral",
        sub_categories: [
            {
                title: "Área territorial",
                value: "1.246.700 km²",
                africa: 7,
                world: 23
            },
            {
                title: "População ",
                value: "37 – 39 milhões",
                africa: 12,
                world: 39
            }
        ]
    },
    {
        category: "Economia",
        sub_categories: [
            {
                title: "PIB (PPC) — total",
                value: null,
                africa: "6º – 10",
                world: "~58"
            },
            {
                title: "PIB (nominal)",
                value: null,
                africa: "8º – 10",
                world: "~67"
            }
        ]
    },
    {
        category: "Desporto",
        sub_categories: [
            {
                title: "FIFA Futebol masculino",
                value: null,
                africa: 19,
                world: 89
            },
            {
                title: "FIBA Basquetebol masculino ",
                value: null,
                africa: 1,
                world: 25
            }
        ]
    }
]
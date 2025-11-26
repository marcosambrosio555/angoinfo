
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
            ,
            {
                title: "Human Development Index (HDI)",
                value: "0.616 (2023)",
                africa: 19,
                world: 149
            },
            {
                title: "Densidade populacional",
                value: " 32/km²",
                world: 195,
                africa: 43
            },
            {
                title: "Idade média",
                value: "15.9",
                world: "Sem dados",
                africa: 54
            },
            {
                title: "Ponto mais alto (Mount Moco)",
                value: "2.619m",
                world: 97,
                africa: 24
            },

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
            },
            {
                title: "Medalhas Olímpicas",
                value: "0 medalhas",
                world: "196",
                africa: "54"
            },
            {
                title: "Ouro Olímpico",
                value: "0 medalhas",
                world: "196",
                africa: "54"
            },
        ]
    },
    {
        category: "Produção",
        sub_categories: [
            {
                title: "Produção de petróleo",
                value: "~1.1 milhões bbl/d",
                world: 15,
                africa: 3
            },
            {
                title: "Produção de Banana",
                value: "4.9 milhões de tonelada",
                world: 8,
                africa: 2
            },
        ]
    }
]







// 6. Classificação FIFA (futebol, seleção masculina) — posição mundial

// Valor: (varia mês a mês) — estimativas recentes/2025 mostram Angola entre ~80.º–100.º no ranking mundial (ex.: SofaScore/FIFA snapshots citam por volta de ~89.º em 2025; fontes oficiais FIFA/Inside FIFA também listam posição histórica e atual).

// Posição na África: entre ~10.º–15.º (novamente variável por mês — Angola tipicamente aparece entre as seleções medianas do continente).

// Fonte: FIFA / rankings consolidados (SofaScore snapshot de rankings também usado para data rápida). 

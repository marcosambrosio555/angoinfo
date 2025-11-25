import {
    Globe,
    Gamepad,
    Book,
    Newspaper,
    Brain,
    Map,
    IdCard,
    SunMedium,
    BarChart2,
    BookOpen,
    AlertTriangle,
    CircleDollarSign,
    UsersIcon,
} from 'lucide-react'


export interface CategoriesProps {
    id: string
    title: string
    icon: any
    url: string
    description: string
}

export const categories: CategoriesProps[] = [
    {
        id: "history",
        title: "História",
        icon: <BookOpen />,
        url: "/history",
        description: "Descubra os principais eventos que marcaram a formação e evolução de Angola."
    },
    {
        id: "data",
        title: "Dados de Angola",
        icon: <Globe />,
        url: "/data",
        description: "Informações essenciais sobre população, território, economia e indicadores gerais de Angola."
    },
    {
        id: "persons",
        title: "Pessoas",
        icon: <UsersIcon />,
        url: "/persons",
        description: "Lista de pessoas angolanas famosas, de diferentes áreas (política, arte, música, literária, etc)"
    },
    {
        id: "weather",
        title: "Clima e Horários",
        icon: <SunMedium width={50} />,
        url: "/weather",
        description: "Informações rápidas sobre condições climáticas , horário e previsão do tempo das províncias."
    },
    {
        id: "provinces",
        title: "Provincías",
        icon: <Map />,
        url: "/provinces",
        description: "Explore detalhes sobre cada província angolana, incluindo cultura, dados e geografia."
    },
    {
        id: "identity-card",
        title: "Validador de BI",
        icon: <IdCard />,
        url: "/identity-card",
        description: "Confirme se um bilhete é legítimo usando verificação automática e segura."
    },
    {
        id: "rankings",
        title: "Classificações",
        icon: <BarChart2 />,
        url: "/rankings",
        description: "Veja a posição de Angola em rankings económicos e sociais"
    },
    {
        id: "curiosities",
        title: "Curiosidades",
        icon: <Brain />,
        url: "/curiosities",
        description: "Fatos interessantes e curiosos sobre cultura, história e vida cotidiana"
    },
    {
        id: "news",
        title: "Noticías",
        icon: <Newspaper />,
        url: "/news",
        description: "Acompanhe as principais notícias e atualizações relevantes sobre Angola"
    },
    {
        id: "converter",
        title: "Conversor",
        icon: <CircleDollarSign />,
        url: "/converter",
        description: "Converta valores entre Kz e outras moedas internacionais"
    },
    {
        id: "quiz",
        title: "Questionário",
        icon: <Gamepad />,
        url: "/quiz",
        description: "Quiz interativo para aprender e avaliar conhecimentos sobre Angola"
    },
    {
        id: "about",
        title: "Sobre",
        icon: <AlertTriangle />,
        url: "/about",
        description: "Informações sobre objetivo e referencias bibliográficas da aplicação"
    },
]
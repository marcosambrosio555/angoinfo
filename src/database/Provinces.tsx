
export interface ProvinceProps {
    slug: string
    name: "Cabinda" | "Zaire" | "Uíge" | "Bengo" | "Cuando" |
    "Luanda" | "Icolo e Bengo" | "Cuanza Norte" | "Cuanza Sul" | "Malanje" |
    "Lunda Norte" | "Lunda Sul" | "Moxico" | "Moxico Leste" | "Bié" |
    "Huambo" | "Benguela" | "Namibe" | "Huíla" | "Cunene" | "Cubango"
    capital: string
    extension: number
    population: number
    detach?: string
    body: JSX.Element
}

export const provinces: ProvinceProps[] = [
    {
        slug: "lunda-norte",
        name: "Lunda Norte",
        capital: "Dundo",
        extension: 103760,
        population: 862566,
        detach: "Uma das principais províncias produtoras de diamantes do mundo.",
        body: (
            <p>
                A Lunda Norte, localizada no nordeste de Angola, é sinónimo de diamantes. A sua economia e história recente estão intrinsecamente ligadas à extração desta pedra preciosa, que é a sua principal riqueza. A empresa estatal Endiama e outras concessionárias operam na região, tornando-a um pilar da economia nacional. A província é caracterizada por uma floresta densa e por uma cultura rica do povo Lunda-Chócue. A capital, o Dundo, cresceu em torno da indústria diamantífera e possui um museu famoso dedicado à cultura local. Para além dos diamantes, a província tem potencial agrícola e florestal. A sua importância para Angola é crítica, pois a exportação de diamantes é uma das principais fontes de divisas estrangeiras para o país, a seguir ao petróleo. O que a província tem de melhor são as suas vastas jazidas diamantíferas. A sua maior fonte de renda é, de longe, a mineração de diamantes.
            </p>
        )
    },
    {
        slug: "lunda-sul",
        name: "Lunda Sul",
        capital: "Saurimo",
        extension: 77636,
        population: 537587,
        detach: "Partilha com a Lunda Norte a liderança na produção nacional de diamantes.",
        body: (
            <p>
                A Lunda Sul é a irmã gémea da Lunda Norte no que diz respeito à economia diamantífera. Localizada a sul desta, partilha a mesma base geológica rica em kimberlitos, os tubos vulcânicos que contêm diamantes. A extração de diamantes é, portanto, a atividade económica dominante e que molda o desenvolvimento da província. A capital, Saurimo, é uma cidade em crescimento, que tem beneficiado dos investimentos ligados à mineração. A província possui também uma riqueza natural considerável, com florestas e rios, e um potencial para o turismo de negócios e natureza. A sua importância para Angola é idêntica à da Lunda Norte: ser uma das alavancas da economia mineira e uma fonte vital de receitas de exportação. O que a província tem de melhor é a sua riqueza mineral em diamantes. A sua maior fonte de renda é a mineração de diamantes.
            </p>
        )
    },
    {
        slug: "cabinda",
        name: "Cabinda",
        capital: "Cabinda (cidade)",
        extension: 7283,
        population: 716076,
        detach: "Maior província produtora de petróleo de Angola.",
        body: (
            <p>
                Cabinda é um território especial, sendo um enclave separado do resto de Angola pela República Democrática do Congo. Esta localização geográfica única confere-lhe uma identidade distinta. A sua importância económica é desproporcionalmente grande em relação ao seu tamanho, pois é a região onde se concentram as principais jazidas de petróleo de Angola. A extração de petróleo em alto mar é a atividade que domina completamente a economia da província, gerando a grande maioria das receitas fiscais do país. Para além do petróleo, Cabinda tem uma riqueza florestal notável, com vastas extensões de floresta tropical que sustentam uma indústria madeireira. A província também possui praias belíssimas e uma cultura rica, com tradições específicas do grupo étnico Cabinda. A sua importância para Angola é fundamental a nível económico, sendo o pilar da indústria petrolífera nacional. O que tem de melhor, do ponto de vista económico, são as suas vastas reservas de hidrocarbonetos. A maior fonte de renda é, de longe, a exploração de petróleo.
            </p>
        )
    },
    {
        slug: "bengo",
        name: "Bengo",
        capital: "Caxito",
        extension: 31371,
        population: 356641,
        detach: "Principal celeiro agrícola na periferia de Luanda.",
        body: (
            <p>
                A província do Bengo é uma das mais importantes do ponto de vista estratégico para a capital do país. Localizada a norte e envolvendo parcialmente a província de Luanda, ela funciona como uma zona de expansão e abastecimento. A sua proximidade com a grande metrópole angolana a tornou vital para o fornecimento de produtos hortícolas, frutas e outros géneros alimentícios para o mercado de Luanda. A província possui uma costa atlântica com praias notáveis, como a de Pambala, e é banhada pelo rio Bengo, que dá nome à região. A sua paisagem é uma mistura de planícies litorais, mangais e savanas. Para além da agricultura, a pesca artesanal e o potencial para o turismo de proximidade são outras atividades económicas relevantes. A sua importância nacional reside precisamente nesta relação simbiótica com Luanda, aliviando a pressão demográfica e fornecendo alimentos. A sua maior fonte de renda é, sem dúvida, a agricultura e a pecuária, direcionadas para o consumo da capital.
            </p>
        )
    },
    {
        slug: "benguela",
        name: "Benguela",
        capital: "Benguela (cidade)",
        extension: 39827,
        population: 2231385,
        detach: "Porto do Lobito e o Corredor do Lobito, ligando o Atlântico ao interior da África.",
        body: (
            <p>
                Benguela é uma província costeira de profundo significado histórico e económico. A sua capital, a cidade de Benguela, é uma das mais antigas e possui um centro histórico relevante. No entanto, o grande destaque económico é a cidade do Lobito, que abriga um dos portos mais importantes de Angola e de toda a costa ocidental africana. O Porto do Lobito é a ponta inicial do Corredor do Lobito, uma infraestrutura logística vital que inclui o Caminho-de-Ferro de Benguela, ligando o oceano Atlântico ao interior da África Central, através da Zâmbia e da República Democrática do Congo. Esta posição faz de Benguela um hub de comércio internacional. A província tem uma economia diversificada, que inclui comércio, logística, indústria, pesca e agricultura. As suas praias, como a Morena e a Baía Azul, são também pontos de atração turística. A importância de Benguela para Angola é colossal, funcionando como uma das principais portas de entrada e saída de produtos e um motor de integração regional. A sua maior fonte de renda está associada às atividades portuárias, logística e comércio exterior.
            </p>
        )
    },
    {
        slug: "bie",
        name: "Bié",
        capital: "Cuíto",
        extension: 70314,
        population: 1455255,
        detach: "O 'celeiro' do planalto central de Angola.",
        body: (
            <p>
                Localizada no coração do planalto central angolano, o Bié é uma província de grande importância agrícola. A sua paisagem é dominada por planaltos e savanas, com um clima que favorece a agricultura. A província é um dos principais produtores de cereais do país, como o milho, o feijão e o trigo, além de outros produtos como a mandioca e a batata. A cidade do Cuíto, a capital, é um centro urbano histórico e um nó de comunicações rodoviárias que ligam o litoral ao interior. O Bié é banhado por importantes rios, como o Cuíto e o Cunene, que nascem na região, tornando-a crucial para os recursos hídricos nacionais. Para além da agricultura, a pecuária é também uma atividade tradicional e económica significativa. A sua importância para Angola reside na sua capacidade de produção de alimentos, contribuindo para a segurança alimentar do país. O que a província tem de melhor é o seu potencial agrícola ainda a ser totalmente explorado e a sua posição estratégica no centro da nação. A sua maior fonte de renda é, indiscutivelmente, a agricultura.
            </p>
        )
    },
    {
        slug: "cuanza-norte",
        name: "Cuanza Norte",
        capital: "N'dalatando",
        extension: 24110,
        population: 443386,
        detach: "Potencial hidroelétrico e agrícola, com fortes laços históricos.",
        body: (
            <p>
                A província do Cuanza Norte está localizada no noroeste de Angola, sendo atravessada pelo poderoso rio Cuanza. A sua história é marcante, pois foi uma das primeiras regiões a ser colonizada pelos portugueses, e ali se encontra a famosa Fortaleza de Massangano. A província tem um relevo acidentado e um clima favorável, que suporta uma agricultura diversificada. Produtos como o café, o algodão, a mandioca, a palma e frutas diversas são cultivados na região. Um dos seus maiores ativos é o potencial para a geração de energia hidroelétrica, com a Barragem de Kapanda a ser um empreendimento de grande importância nacional. A província é também rica em minerais como o ouro e os fosfatos. A sua importância nacional está ligada à sua produção de energia e ao seu potencial agrícola e mineral, que está ainda em fase de desenvolvimento. O que a província tem de melhor é a combinação de recursos hídricos, solos férteis e riquezas minerais. A sua maior fonte de renda atualmente provém da agricultura e da produção de energia.
            </p>
        )
    },
    {
        slug: "cuanza-sul",
        name: "Cuanza Sul",
        capital: "Sumbe",
        extension: 55660,
        population: 1881873,
        detach: "Costa marítima, agricultura de cana-de-açúcar e o Porto do Sumbe.",
        body: (
            <p>
                O Cuanza Sul é uma província costeira localizada a sul do rio Cuanza, que marca a sua fronteira norte. A sua geografia combina uma faixa litoral com um interior de planaltos, o que proporciona uma variedade de actividades económicas. A sua costa é banhada por águas quentes do Atlântico, com praias como a da Kissanga e da Cabo Ledo, estas últimas muito procuradas para a prática de surf. No interior, os solos férteis do vale do Cuanza sustentam uma agricultura próspera, com destaque para o cultivo da cana-de-açúcar, que alimenta a produção de açúcar e etanol. A capital, Sumbe, possui um porto que facilita o escoamento de produtos. A província tem também uma riqueza cultural significativa, com tradições musicais fortes. A sua importância para o país reside na sua produção agroindustrial, particularmente de açúcar, e no seu potencial turístico costeiro. O que a província tem de melhor é a sua diversidade, que vai das praias às planícies agrícolas férteis. A sua maior fonte de renda é a agricultura, com ênfase na cana-de-açúcar e seus derivados.
            </p>
        )
    },
    {
        slug: "cunene",
        name: "Cunene",
        capital: "Ondijiva",
        extension: 78342,
        population: 990087,
        detach: "Pecuária tradicional e o rio Cunene, vital para o sul do país.",
        body: (
            <p>
                O Cunene é a província emblemática do sul de Angola, fazendo fronteira com a Namíbia. A sua paisagem é dominada por um ambiente semiárido, de savana seca, onde a pecuária bovina e caprina é a atividade económica e cultural central para muitos dos seus habitantes, sobretudo do grupo étnico Ovambo. O rio Cunene é a espinha dorsal da província e de toda a região sul, sendo uma fonte de água vital para consumo humano, animal e para a agricultura de regadio. Projectos de irrigação, como o do Curoca, são essenciais para o desenvolvimento local. A província é também conhecida pelas suas quedas de água, como as do Ruacana, partilhadas com a Namíbia. A sua importância nacional está na sua produção pecuária e no fornecimento de água, sendo crucial para qualquer estratégia de desenvolvimento do sul angolano. O que a província tem de melhor é a sua cultura pastoril resiliente e o potencial do rio Cunene. A sua maior fonte de renda é a pecuária.
            </p>
        )
    },
    {
        slug: "huambo",
        name: "Huambo",
        capital: "Huambo (cidade)",
        extension: 34274,
        population: 2019555,
        detach: "O 'centro' de Angola, com uma forte produção agrícola e universidade de renome.",
        body: (
            <p>
                O Huambo é uma província do planalto central, muitas vezes considerada o coração agrícola e intelectual de Angola. A sua capital, a cidade do Huambo, já foi conhecida como "Nova Lisboa" durante a época colonial, reflectindo a sua importância e planeamento. A província possui alguns dos solos mais férteis do país e um clima ameno, que favorecem uma agricultura diversificada e produtiva, sendo um grande produtor de milho, feijão, batata, trigo e hortícolas. A cidade do Huambo é um pólo educativo e de saúde de referência para toda a região central, albergando a Universidade José Eduardo dos Santos. A sua localização estratégica, como nó de ligação rodoviária e ferroviária entre o litoral e o interior, aumenta a sua relevância. A sua importância para Angola é multidimensional: é um celeiro agrícola, um centro de conhecimento e uma plataforma logística. O que a província tem de melhor é a combinação de uma base agrícola sólida com uma infraestrutura urbana e educacional desenvolvida. A sua maior fonte de renda é a agricultura.
            </p>
        )
    },
    {
        slug: "huila",
        name: "Huíla",
        capital: "Lubango",
        extension: 79022,
        population: 2497422,
        detach: "Clima temperado, grande produção agrícola e belezas naturais únicas.",
        body: (
            <p>
                A Huíla é uma das províncias mais desenvolvidas e populosas do sul de Angola. A sua capital, Lubango, é uma cidade grande e dinâmica, situada num planalto de clima excecionalmente ameno para os trópicos, o que a torna muito atrativa. A paisagem da Huíla é deslumbrante, dominada pela Serra da Leba, cuja estrada serpenteante é um ícone nacional, e pela Fenda da Tundavala, um abismo impressionante que oferece vistas panorâmicas. Esta beleza natural confere-lhe um enorme potencial turístico. Economicamente, a Huíla é um dos principais celeiros de Angola, produzindo uma grande variedade de cereais, hortícolas e frutas de clima temperado. Também se destaca na pecuária e na produção de leite. A sua importância para o país é enorme, contribuindo significativamente para a produção de alimentos e sendo um pólo de desenvolvimento regional. O que a província tem de melhor é a combinação única de um clima agradável, uma paisagem estonteante e uma economia agrícola pujante. A sua maior fonte de renda é a agricultura e a pecuária.
            </p>
        )
    },
    {
        slug: "luanda",
        name: "Luanda",
        capital: "Luanda (cidade)",
        extension: 18826,
        population: 6945386,
        detach: "O coração político, económico e financeiro de Angola.",
        body: (
            <p>
                Luanda é muito mais do que uma província; é o centro nevrálgico de Angola. A sua capital, a cidade de Luanda, é a maior metrópole do país e uma das mais populosas de África. É nela que se concentram os órgãos de soberania, como o Palácio Presidencial e a Assembleia Nacional, as sedes de todas as grandes empresas nacionais e multinacionais, e o principal porto marítimo e aeroporto internacional. A província é uma aglomeração urbana massiva, com uma energia e um ritmo de vida intensos. A sua marginal é um cartão-postal, mas a cidade também lida com desafios de urbanização acelerada, como o trânsito caótico e a expansão de bairros periféricos. A sua importância para Angola é absoluta: é o motor económico incontestável, gerando a maior parte do PIB nacional, e o centro de todas as decisões políticas. O que tem de melhor são as oportunidades, os serviços, a vida cultural e a concentração de investimento. A sua maior fonte de renda é a administração pública, o comércio, os serviços financeiros e as atividades portuárias.
            </p>
        )
    },
    {
        slug: "malanje",
        name: "Malanje",
        capital: "Malanje (cidade)",
        extension: 97602,
        population: 986363,
        detach: "As majestosas Quedas de Kalandula e os Penedos de Pungo Andongo.",
        body: (
            <p>
                Malanje é uma província do norte de Angola famosa pelas suas paisagens espetaculares e monumentos naturais. As Quedas de Kalandula, no rio Lucala, são uma das maiores e mais belas quedas de água de África, com cerca de 105 metros de altura, constituindo um espetáculo imperdível. Os Penedos de Pungo Andongo são formações rochosas misteriosas e imponentes, cheias de lendas históricas. Para além do enorme potencial turístico, Malanje é também uma província agrícola, sendo a maior produtora nacional de algodão e tendo uma produção significativa de café e frutas. A sua localização a leste de Luanda faz dela um corredor natural para o interior. A sua importância para Angola reside no seu património natural único, que é um dos principais cartões-postais do país para o turismo internacional. O que a província tem de melhor são as suas atrações naturais de classe mundial. A sua maior fonte de renda é o turismo, seguido da agricultura.
            </p>
        )
    },
    {
        slug: "moxico",
        name: "Moxico",
        capital: "Luena",
        extension: 223023,
        population: 758568,
        detach: "A maior província em área, com vastas planícies e riqueza hídrica.",
        body: (
            <p>
                O Moxico é a província gigante de Angola, localizada no leste do país, fazendo fronteira com a Zâmbia. É uma terra de vastidões, com paisagens dominadas por planícies aluviais, savanas arbustivas e uma densa rede hidrográfica, incluindo o rio Cuango. A sua baixa densidade populacional confere-lhe uma aura de fronteira e wilderness. A província tem um potencial enorme para a pecuária extensiva e para a agricultura, aproveitando os seus solos férteis e recursos hídricos. A capital, Luena, é um centro administrativo e logístico numa região remota. Durante a guerra civil, o Moxico foi palco de combates intensos, mas hoje busca o desenvolvimento através da exploração dos seus recursos naturais, que incluem madeira e minerais. A sua importância para Angola está na sua dimensão territorial, na sua riqueza hídrica e no seu potencial ainda virgem para a agropecuária em larga escala. O que a província tem de melhor é a sua imensidão e o seu carácter de "última fronteira". A sua maior fonte de renda é a pecuária e a exploração florestal.
            </p>
        )
    },

    {
        slug: "namibe",
        name: "Namibe",
        capital: "Moçâmedes",
        extension: 58137,
        population: 495326,
        detach: "O deserto do Namibe, o mais antigo do mundo, e a sua costa rica em peixe.",
        body: (
            <p>
                O Namibe é uma província única, definida pelo seu ambiente desértico. O deserto do Namibe, que lhe dá o nome, estende-se ao longo do seu litoral e é considerado o deserto mais antigo do planeta. Esta paisagem árida é o habitat de plantas endémicas famosas, como a Welwitschia mirabilis, e do emblemático elefante do deserto adaptado. A costa do Namibe, banhada pelas frias correntes de Benguela, é excecionalmente rica em peixe, sustentando uma indústria pesqueira vital para a economia local e nacional. A capital, Moçâmedes, possui um porto pesqueiro importante e é um centro industrial em crescimento, com destaque para a indústria de conservas de peixe. O turismo de deserto, com atracões como a Serra da Leba (partilhada com a Huíla) e o Parque Nacional do Iona, é um sector com grande potencial. A sua importância nacional está na sua produção pesqueira e na sua singularidade ecológica. O que a província tem de melhor é a sua paisagem desértica dramática e os recursos marinhos. A sua maior fonte de renda é a pesca e a indústria de processamento de pescado.
            </p>
        )
    },
    {
        slug: "uige",
        name: "Uíge",
        capital: "Uíge (cidade)",
        extension: 58698,
        population: 1483118,
        detach: "A histórica terra do café e uma região de florestas densas no norte.",
        body: (
            <p>
                O Uíge é uma província do norte de Angola, conhecida como o berço da cultura do café no país. Durante a época colonial, foi a principal região produtora de café de Angola, que era um dos principais...
            </p>
        )
    },
]

// "Bengo" : "Dande"
// "Benguela" : "Benguela"
// "Bié" : "Cuito"
// "Cabinda" : "Cabinda"
// "Cuanza-Norte" : "Cazengo"
// "Cuanza-Sul" : "Sumbe"
// "Cunene" : "Cuanhama"
// "Huambo" : "Huambo"
// "Huíla" : "Lubango"
// "Luanda" : "Ingombota"
// "Lunda-Norte" : "Dundo"
// "Lunda-Sul" : "Saurimo"
// "Malanje" : "Malanje"
// "Moxico" : "Luena"
// "Namibe" : "Moçâmedes"
// "Uíge" : "Uíge"

// "Icolo e Bengo" : "Catete"
// "Moxico Leste" : "Cazombo"
// "Cubango" : "Menongue"
// "Cuando" : "Mavinga"
// "Zaire" : "Mbanza Kongo"
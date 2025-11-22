import { ReactElement } from "react"

export interface ProvinceProps {
    name: "Luanda" | "Malanje" | "Cabinda" | "Benguela"
    body: JSX.Element
}

export const provinces: ProvinceProps[] = [
    {
        name: "Luanda",
        body: (
            <div>
                <p>
                    Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Ipsam voluptas fugit
                    natus doloribus, aperiam accusantium.
                    Praesentium recusandae iusto sit. Aspernatur
                    quam eos incidunt veritatis assumenda
                    excepturi quo iste sed nulla.
                </p>
                <img src={"/provinces/luanda_1.jpg"} width={100} alt="Luanda" />
                <p>
                    Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Ipsam voluptas fugit
                    natus doloribus, aperiam accusantium.
                    Praesentium recusandae iusto sit. Aspernatur
                    quam eos incidunt veritatis assumenda
                    excepturi quo iste sed nulla.
                </p>
            </div>
        )
    },
    {
        name: "Malanje",
        body: (
            <div>
                <p>
                    Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Ipsam voluptas fugit
                    natus doloribus, aperiam accusantium.
                    Praesentium recusandae iusto sit. Aspernatur
                    quam eos incidunt veritatis assumenda
                    excepturi quo iste sed nulla.
                </p>
                <img src={"/provinces/malanje_1.jpg"} alt="Luanda" />
                <p>
                    Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Ipsam voluptas fugit
                    natus doloribus, aperiam accusantium.
                    Praesentium recusandae iusto sit. Aspernatur
                    quam eos incidunt veritatis assumenda
                    excepturi quo iste sed nulla.
                </p>
            </div>
        )
    },
    {
        name: "Cabinda",
        body: (
            <div>
                <p>
                    Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Ipsam voluptas fugit
                    natus doloribus, aperiam accusantium.
                    Praesentium recusandae iusto sit. Aspernatur
                    quam eos incidunt veritatis assumenda
                    excepturi quo iste sed nulla.
                </p>
                <img src={"/provinces/cabinda_1.jpg"} alt="Luanda" />
                <p>
                    Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Ipsam voluptas fugit
                    natus doloribus, aperiam accusantium.
                    Praesentium recusandae iusto sit. Aspernatur
                    quam eos incidunt veritatis assumenda
                    excepturi quo iste sed nulla.
                </p>
            </div>
        )
    },
    {
        name: "Benguela",
        body: (
            <div>
                <p>
                    Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Ipsam voluptas fugit
                    natus doloribus, aperiam accusantium.
                    Praesentium recusandae iusto sit. Aspernatur
                    quam eos incidunt veritatis assumenda
                    excepturi quo iste sed nulla.
                </p>
                <img src={"/provinces/benguela_1.jpg"} alt="Luanda" />
                <p>
                    Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Ipsam voluptas fugit
                    natus doloribus, aperiam accusantium.
                    Praesentium recusandae iusto sit. Aspernatur
                    quam eos incidunt veritatis assumenda
                    excepturi quo iste sed nulla.
                </p>
            </div>
        )
    }
]

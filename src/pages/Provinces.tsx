import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";

const provincias = [
    "luanda", "bié", "malanje", "benguela",
    "cabinda", "kwanza norte", "kwanza sul"
]

export function Provinces() {
    return (
        <div className='min-h-screen flex flex-col'>

            <Header />

            <Navbar text="Províncias" />

            <div className="flex-grow">
                <div className='max-w-3xl px-2 m-auto '>
                    <div className='w-full mt-5'>

                        <h2 className="font-semibold text-lx">Províncias </h2>

                        <div>
                            {
                                provincias.map((item) => (
                                    <a href={`#${item}`} className="capitalize">{item}</a>
                                ))
                            }
                        </div>

                        <div>
                            <h2 id="luanda">Luanda</h2>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Accusamus repellat beatae rerum consectetur vero ducimus
                            numquam adipisci reprehenderit hic inventore ratione,
                            incidunt odio, iure possimus qui quisquam nihil pariatur rem!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Accusamus repellat beatae rerum consectetur vero ducimus
                            numquam adipisci reprehenderit hic inventore ratione,
                            incidunt odio, iure possimus qui quisquam nihil pariatur rem!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Accusamus repellat beatae rerum consectetur vero ducimus
                            numquam adipisci reprehenderit hic inventore ratione,
                            incidunt odio, iure possimus qui quisquam nihil pariatur rem!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Accusamus repellat beatae rerum consectetur vero ducimus
                            numquam adipisci reprehenderit hic inventore ratione,
                            incidunt odio, iure possimus qui quisquam nihil pariatur rem!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Accusamus repellat beatae rerum consectetur vero ducimus
                            numquam adipisci reprehenderit hic inventore ratione,
                            incidunt odio, iure possimus qui quisquam nihil pariatur rem!
                        </div>

                        <div>
                            <h2 id="cabinda">cabinda</h2>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Accusamus repellat beatae rerum consectetur vero ducimus
                            numquam adipisci reprehenderit hic inventore ratione,
                            incidunt odio, iure possimus qui quisquam nihil pariatur rem!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Accusamus repellat beatae rerum consectetur vero ducimus
                            numquam adipisci reprehenderit hic inventore ratione,
                            incidunt odio, iure possimus qui quisquam nihil pariatur rem!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Accusamus repellat beatae rerum consectetur vero ducimus
                            numquam adipisci reprehenderit hic inventore ratione,
                            incidunt odio, iure possimus qui quisquam nihil pariatur rem!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Accusamus repellat beatae rerum consectetur vero ducimus
                            numquam adipisci reprehenderit hic inventore ratione,
                            incidunt odio, iure possimus qui quisquam nihil pariatur rem!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Accusamus repellat beatae rerum consectetur vero ducimus
                            numquam adipisci reprehenderit hic inventore ratione,
                            incidunt odio, iure possimus qui quisquam nihil pariatur rem!
                        </div>

                        <div>
                            <h2 id="malanje">malanje</h2>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Accusamus repellat beatae rerum consectetur vero ducimus
                            numquam adipisci reprehenderit hic inventore ratione,
                            incidunt odio, iure possimus qui quisquam nihil pariatur rem!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Accusamus repellat beatae rerum consectetur vero ducimus
                            numquam adipisci reprehenderit hic inventore ratione,
                            incidunt odio, iure possimus qui quisquam nihil pariatur rem!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Accusamus repellat beatae rerum consectetur vero ducimus
                            numquam adipisci reprehenderit hic inventore ratione,
                            incidunt odio, iure possimus qui quisquam nihil pariatur rem!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Accusamus repellat beatae rerum consectetur vero ducimus
                            numquam adipisci reprehenderit hic inventore ratione,
                            incidunt odio, iure possimus qui quisquam nihil pariatur rem!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Accusamus repellat beatae rerum consectetur vero ducimus
                            numquam adipisci reprehenderit hic inventore ratione,
                            incidunt odio, iure possimus qui quisquam nihil pariatur rem!
                        </div>

                        <div>
                            <h2 id="benguela">benguela</h2>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Accusamus repellat beatae rerum consectetur vero ducimus
                            numquam adipisci reprehenderit hic inventore ratione,
                            incidunt odio, iure possimus qui quisquam nihil pariatur rem!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Accusamus repellat beatae rerum consectetur vero ducimus
                            numquam adipisci reprehenderit hic inventore ratione,
                            incidunt odio, iure possimus qui quisquam nihil pariatur rem!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Accusamus repellat beatae rerum consectetur vero ducimus
                            numquam adipisci reprehenderit hic inventore ratione,
                            incidunt odio, iure possimus qui quisquam nihil pariatur rem!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Accusamus repellat beatae rerum consectetur vero ducimus
                            numquam adipisci reprehenderit hic inventore ratione,
                            incidunt odio, iure possimus qui quisquam nihil pariatur rem!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Accusamus repellat beatae rerum consectetur vero ducimus
                            numquam adipisci reprehenderit hic inventore ratione,
                            incidunt odio, iure possimus qui quisquam nihil pariatur rem!
                        </div>

                        <div>
                            <h2 id="kwanza sul">kwanza sul</h2>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Accusamus repellat beatae rerum consectetur vero ducimus
                            numquam adipisci reprehenderit hic inventore ratione,
                            incidunt odio, iure possimus qui quisquam nihil pariatur rem!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Accusamus repellat beatae rerum consectetur vero ducimus
                            numquam adipisci reprehenderit hic inventore ratione,
                            incidunt odio, iure possimus qui quisquam nihil pariatur rem!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Accusamus repellat beatae rerum consectetur vero ducimus
                            numquam adipisci reprehenderit hic inventore ratione,
                            incidunt odio, iure possimus qui quisquam nihil pariatur rem!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Accusamus repellat beatae rerum consectetur vero ducimus
                            numquam adipisci reprehenderit hic inventore ratione,
                            incidunt odio, iure possimus qui quisquam nihil pariatur rem!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Accusamus repellat beatae rerum consectetur vero ducimus
                            numquam adipisci reprehenderit hic inventore ratione,
                            incidunt odio, iure possimus qui quisquam nihil pariatur rem!
                        </div>

                        <div>
                            <h2 id="kwanza norte">kwanza norte</h2>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Accusamus repellat beatae rerum consectetur vero ducimus
                            numquam adipisci reprehenderit hic inventore ratione,
                            incidunt odio, iure possimus qui quisquam nihil pariatur rem!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Accusamus repellat beatae rerum consectetur vero ducimus
                            numquam adipisci reprehenderit hic inventore ratione,
                            incidunt odio, iure possimus qui quisquam nihil pariatur rem!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Accusamus repellat beatae rerum consectetur vero ducimus
                            numquam adipisci reprehenderit hic inventore ratione,
                            incidunt odio, iure possimus qui quisquam nihil pariatur rem!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Accusamus repellat beatae rerum consectetur vero ducimus
                            numquam adipisci reprehenderit hic inventore ratione,
                            incidunt odio, iure possimus qui quisquam nihil pariatur rem!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Accusamus repellat beatae rerum consectetur vero ducimus
                            numquam adipisci reprehenderit hic inventore ratione,
                            incidunt odio, iure possimus qui quisquam nihil pariatur rem!
                        </div>

                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )
}
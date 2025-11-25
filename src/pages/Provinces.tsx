import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { ProvinceProps, provinces } from "../database/Provinces";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowUp, Map, MapPin, Square, Users2 } from "lucide-react";


export function Provinces() {

    const [data, setData] = useState<ProvinceProps[]>([])
    const [sort, setSort] = useState<"ASC" | "DESC">("ASC")
    const [metric, setMetric] = useState<"population" | "extension" | "name">("name")

    useEffect(() => {
        handleOrder(metric)
    }, [sort, metric])

    // type: "population" | "extension" | "name"

    function handleOrder(type: "population" | "extension" | "name") {

        const order = provinces.sort((a, b) => {

            if (type === "extension") {
                return sort === "ASC" ?
                    a.extension - b.extension :
                    b.extension - a.extension
            }

            if (type === "population") {
                return sort === "ASC" ?
                    a.population - b.population :
                    b.population - a.population
            }

            if (sort === "ASC") {
                return a.name > b.name ? 1 : -1
            } else {
                return b.name > a.name ? 1 : -1
            }

        })

        setData(() => {
            return [...order]
        })

    }

    function format(value: number) {
        return value.toLocaleString("pt-AO", {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        })
    }

    return (
        <div className='min-h-screen flex flex-col'>

            <Header />

            <Navbar text="províncias" />

            <div className="flex-grow">
                <div className='max-w-3xl px-2 m-auto '>
                    <div className=''>

                        <h2 className="font-semibold text-lx">Lista de todas Províncias de Angola </h2>

                        <div className="flex justify-between mt-2">
                            <div className="flex gap-2">
                                <button className="rounded bg-zinc-200 px-1" onClick={() => { setMetric("name") }}>
                                    Nome
                                </button>
                                <button className="rounded bg-zinc-200 px-1" onClick={() => { setMetric("population") }}>
                                    População
                                </button>
                                <button className="rounded bg-zinc-200 px-1" onClick={() => { setMetric("extension") }}>
                                    Extensão
                                </button>
                            </div>
                            <button className="flex rounded-full bg-zinc-200 px-1" onClick={() => {
                                sort === "ASC" ? setSort("DESC") : setSort("ASC")
                            }}>
                                <ArrowDown width={16} /> / <ArrowUp width={16} />
                            </button>
                        </div>

                        <div className="flex flex-wrap gap-1 mt-4">
                            <div className="w-full">
                                {
                                    data.map((item, index) => (
                                        <div key={item.name} className={`${index % 2 === 0 && "bg-zinc-200"} px-2`}>
                                            <Link
                                                to={`/province/${item.slug}`}
                                                key={item.slug}
                                                className="text-lg font-semibold text-blue-500"
                                            >
                                                {item.name}
                                            </Link>
                                            <div className="flex gap-1 text-xs w-full">
                                                <span className="flex items-center gap-1 min-w-36 rounded"><MapPin width={12} /> {item.capital}</span>
                                                <span className="flex items-center gap-1 min-w-36 rounded"><Users2 width={12} /> {format(item.population)} habitantes</span>
                                                <span className="flex items-center gap-1 min-w-20 rounded"><Map width={12} /> {format(item.extension)} km²</span>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )
}
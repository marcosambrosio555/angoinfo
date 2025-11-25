import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { ProvinceProps, provinces } from "../database/Provinces";
import { useParams, useSearchParams } from "react-router-dom";


export function Province() {

    const params = useParams()

    const [data, setData] = useState<ProvinceProps | null>(null)

    useEffect(() => {

        const slug = params.name

        const selected = provinces.find(item => {
            return item.slug === slug
        })

        if (selected) {
            setData(selected)
        }

    }, [])

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

                        <div className="flex justify-between mt-2">
                            {
                                data ? (
                                    <div>
                                        <h2 className="text-xl font-semibold">{data.name}</h2>
                                        <div className="flex flex-col">
                                            <span>Capital : {data.capital}</span>
                                            <span>Extensão : {format(data.extension)} km²</span>
                                            <span>População : {format(data.population)} habitantes</span>
                                            <span>Destaque : {data.detach}</span>
                                        </div>
                                        <div className="border-t border-sky-900/30 pt-2">
                                            {data.body}
                                        </div>
                                    </div>
                                ) : (
                                    <h2>Província não encontrada!</h2>
                                )
                            }
                        </div>

                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )
}
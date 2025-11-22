import { useState } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { ProvinceProps, provinces } from "../database/Provinces";



export function Provinces() {


    const [selected, setSelected] = useState<ProvinceProps>(provinces[0])

    function changeProvince(index: number) {
        setSelected(provinces[index])
    }

    return (
        <div className='min-h-screen flex flex-col'>

            <Header />

            <Navbar text="Províncias" />

            <div className="flex-grow">
                <div className='max-w-3xl px-2 m-auto '>
                    <div className='w-full mt-5'>

                        <h2 className="font-semibold text-lx">Lista de todas Províncias de Angola </h2>

                        <div className="flex flex-wrap gap-1">
                            {
                                provinces.map((item, index) => (
                                    <button
                                        key={item.name}
                                        className="rounded-full text-white bg-sky-900 py-1 text-sm px-2"
                                        onClick={() => {
                                            changeProvince(index)
                                        }}>{item.name}
                                    </button>
                                ))
                            }
                        </div>

                        <div>
                            <h2>{selected.name}</h2>

                            <div>
                                {selected.body}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )
}
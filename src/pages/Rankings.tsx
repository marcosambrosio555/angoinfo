import { Award, Medal } from "lucide-react"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Navbar } from "../components/Navbar"
import { rankings } from "../database/rankings"

export function Rankings() {
    return (
        <div className='min-h-screen flex flex-col'>

            <Header />

            <Navbar text="Classificações" />

            <div className="flex-grow">
                <div className='max-w-3xl px-2 m-auto '>
                    <div className='w-full mt-4'>

                        <h2 className="font-semibold text-2xl">Classificações de Angola  em diversas areas</h2>

                        <div className="space-y-4 mt-4 mb-10">

                            {
                                rankings.map(item => (
                                    <div>
                                        <h3 className="font-bold text-lg bg-sky-900 text-white pl-1 mb-2">{item.category}</h3>
                                        {
                                            item.sub_categories.map((subCategory) => (
                                                <div >
                                                    <div className="flex flex-col gap-1">
                                                        <span className="font-semibold">{subCategory.title}  <span className="font-bold text-xs">{subCategory.value}</span></span>
                                                        <div className="text-sm pl-2 flex flex-col">
                                                            <span className="flex items-center">
                                                                <span className="w-4 mr-2">🌍</span>
                                                                África : {subCategory.africa}º
                                                            </span>
                                                            <span className="flex items-center">
                                                                <span className="w-4 mr-2">🗺️</span>
                                                                Mundo : {subCategory.world}º
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }

                                    </div>
                                ))
                            }


                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
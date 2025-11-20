import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Navbar } from "../components/Navbar"

export function Rankings() {
    return (
        <div className='min-h-screen flex flex-col'>

            <Header />

            <Navbar text="Classificações" />

            <div className="flex-grow">
                <div className='max-w-3xl px-2 m-auto '>
                    <div className='w-full mt-5'>

                        <h2 className="font-semibold text-lx">Classificações de Angola  em diversas areas</h2>

                        <div className="bg-white border border-zinc-300 rounded p-2">
                            <h3 className="font-bold text-lg">Gerais</h3>
                            <div>
                                <div className="flex flex-col">
                                    <span className="font-semibold">População (36.58M)</span>
                                    <span> Mundo : 23ª</span>
                                    <span>África : 7º</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
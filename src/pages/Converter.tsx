import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Navbar } from "../components/Navbar"

export function Conveter() {
    return (
        <div className='min-h-screen flex flex-col'>

            <Header />

            <Navbar text="Bilhete de identidade" />

            <div className="flex-grow">
                <div className='max-w-3xl px-2 m-auto '>
                    <div className='w-full mt-5'>

                        <h2 className="font-semibold text-lg">Pesquise aqui o seu bilhete de identidade</h2>

                        <form
                            className="mt-2"
                        >
                            <div className="bg-zinc-100 flex items-center rounded p-2 border">
                                <label htmlFor="bi">

                                </label>
                                <input
                                    className="w-full bg-transparent pl-2 outline-none"
                                    type="text"
                                    placeholder="Digite aqui seu número do bilhete"
                                    id="bi"
                                    name="bi"
                                />
                            </div>
                        </form>



                        <div className="w-full  min-h-20 mt-5 rounded relative">




                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
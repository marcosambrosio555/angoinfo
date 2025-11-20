import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { curiosities } from "../database/curiosities";

export function Curiosities() {
    return (
        <div className='min-h-screen flex flex-col'>

            <Header />

            <Navbar text="Classificações" />

            <div className="flex-grow">
                <div className='max-w-3xl px-2 m-auto '>
                    <div className='w-full mt-5'>

                        <h2 className="font-semibold text-xl">Curiosidades sobre Angola</h2>

                        <div className="space-y-2 mt-4">
                            {
                                curiosities.map((item => (
                                    <div className="bg-white border border-zinc-300 rounded p-2">
                                        <h3 className="font-semibold text-md">{item.title}</h3>
                                        <p className="mt-1 text-sm">{item.body}</p>
                                    </div>
                                )))
                            }
                        </div>


                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
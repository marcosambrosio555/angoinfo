import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { historyData } from "../database/History";

export function History() {

    return (
        <div className='min-h-screen flex flex-col'>

            <Header />

            <Navbar text="História" />

            <div className="flex-grow">
                <div className='max-w-xl px-2 m-auto '>

                    <h2 className="font-semibold text-xl mt-4">
                        História
                    </h2>

                    <figure className="px-4 bg-stone-200">
                        <img className="max-w-sm block m-auto" src={`/images/history-1.jpg`} alt="João Lourenço com Lionel Messi" />
                    </figure>

                    <div className="mt-4">
                        <h2 className="font-semibold">{historyData.name}</h2>
                        <div className="mt-2">
                            {
                                historyData.body
                            }
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    )
}
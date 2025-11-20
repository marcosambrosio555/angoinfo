import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";

export function Data() {
    return (
        <div className='min-h-screen flex flex-col'>

            <Header />

            <Navbar text="Províncias" />

            <div className="flex-grow">
                <div className='max-w-3xl px-2 m-auto '>
                    <div className='w-full mt-5'>

                        <h2 className="font-semibold text-lx">Províncias </h2>



                        <div>

                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
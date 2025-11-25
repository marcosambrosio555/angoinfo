import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { dataInfo } from "../database/data";

export function Data() {


    return (
        <div className='min-h-screen flex flex-col'>

            <Header />

            <Navbar text="Bilhete de identidade" />

            <div className="flex-grow">
                <div className='max-w-3xl px-2 m-auto '>
                    <div className='w-full mt-5'>

                        <h2 className="font-semibold text-lg text-center">Dados gerais de Angola</h2>

                        <div className="max-w-2xl m-auto mt-4">
                            <table className=" border-l-zinc-500 text-xs">
                                {
                                    dataInfo.map((item, index) => (
                                        <tr className={`${index % 2 === 0 && "bg-zinc-200"}`}>
                                            <td className="font-semibold text-right pr-2 border-zinc-400 border">{item.key}</td>
                                            <td className="text-left w-1/2 pl-2 border-zinc-400 border">{item.value}</td>
                                        </tr>
                                    ))
                                }
                            </table>
                        </div>



                        <div className="w-full  min-h-20 mt-5 rounded relative">

                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
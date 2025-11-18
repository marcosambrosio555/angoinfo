import { Link } from "react-router-dom";
import { categories, CategoriesProps } from "../database/Categories";
import { Footer } from "../components/Footer";


export function Home() {

    return (
        <main className='min-h-screen flex flex-col justify-between'>

            <div className='max-w-3xl px-2 m-auto'>
                <div className='pt-10 pb-10'>

                    <div className="flex flex-col justify-center items-center text-center">
                        {/* <div className="rounded-lg h-20 w-20 block text-white bg-zinc-500">
                                Imagem
                            </div> */}
                        <h2 className='text-2xl font-semibold'>AngoInfo</h2>
                        <p className="mt-4">
                            Plataforma completa dedicada a fornecer informações como história , classificações e dados gerais sobre Angola em um único lugar.
                        </p>
                    </div>

                    <div className='grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 justify-center items-center mt-8'>
                        {
                            categories.map((item: CategoriesProps) => (
                                <Link
                                    to={item.url}
                                    key={item.id}
                                    className='
                                    border border-zinc-200 rounded flex
                                    flex-col justify-center items-center gap-1
                                    px-3 py-5 hover:scale-105 transition-all
                                    hover:border-blue-500 group flex-grow
                                    '>
                                    <span className="group-hover:text-red-500">
                                        {item.icon}
                                    </span>
                                    <span className='font-semibold group-hover:text-blue-500'>
                                        {item.title}
                                    </span>
                                    <span className='text-xs text-center  min-h-12'>
                                        {item.description}
                                    </span>
                                </Link>
                            ))
                        }
                    </div>

                </div>
            </div>

            <Footer />
        </main>
    )

}
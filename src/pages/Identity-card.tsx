import { ArrowBigRight, ChevronRight, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { useState } from "react";
import { api } from "../api";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Loading } from "../components/Loading";

interface UserProps {
    error: boolean
    name: string
    data_de_nascimento: string
    pai: string
    mae: string
    morada: string
    emitido_em: string
    type: string
    message: string
}

export function IdentityCard() {

    const [input, setInput] = useState("")
    const [data, setData] = useState<UserProps | null>(null)
    const [loading, setLoading] = useState(false)


    async function findBI() {

        setLoading(true)

        const url = `https://consulta.edgarsingui.ao/consultar`
        const { data } = await api.get(`${url}/${input}`).finally(()=> {
            setLoading(false)
        })

        // const info = await getData()
        // setLoading(false)
        
        setData(data)

    }

    function getData(): Promise<UserProps> {

        const data: UserProps = {
            error: true,
            name: "Marcos Pereira",
            data_de_nascimento: "04-12-2000",
            emitido_em: "12-04-2023",
            mae: "Manuela Quiata Pereira",
            pai: "Costa Ambrósio",
            morada: "Mabor",
            type: "BI",
            message: "Dados inválidos"
        }

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data)
            }, 3000)
        })
    }

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
                            onSubmit={(e) => {
                                e.preventDefault()
                                findBI()
                            }}>
                            <div className="bg-zinc-100 flex items-center rounded p-2 border">
                                <label htmlFor="bi">
                                    <Search />
                                </label>
                                <input
                                    className="w-full bg-transparent pl-2 outline-none"
                                    type="text"
                                    placeholder="Digite aqui seu número do bilhete"
                                    id="bi"
                                    name="bi"
                                    onChange={(e) => setInput(e.target.value)}
                                />
                            </div>
                        </form>



                        <div className="w-full  min-h-20 mt-5 rounded relative">

                            {loading && <Loading />}

                            {
                                data && (
                                    data.error ? (
                                        <h2>{data.message}</h2>
                                    ) : (
                                        <div>
                                            <div className="flex flex-col">
                                                <span className="font-semibold">Nome</span>
                                                <span>{data.name}</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="font-semibold">Data de nascimento</span>
                                                <span>{data.data_de_nascimento}</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="font-semibold">Nome do pai</span>
                                                <span>{data.pai}</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="font-semibold">Nome da mãe</span>
                                                <span>{data.mae}</span>
                                            </div>
                                        </div>
                                    )
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
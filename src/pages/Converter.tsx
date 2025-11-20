import { RefreshCcw, Repeat } from "lucide-react"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Navbar } from "../components/Navbar"
import { countries } from "../database/converter"
import { useEffect, useState } from "react"
import { api } from "../api"

export function Conveter() {

    const [amountFrom, setAmountFrom] = useState(100)
    const [amountTo, setAmountTo] = useState(0)

    const [currencyFrom, setCurrencyFrom] = useState("AOA")
    const [currencyTo, setCurrencyTo] = useState("USD")


    // async function convert() {

    //     const url = "https://api.exchangerate.host/"
    //     const { data } = await api.get(`${url}convert?from=${currencyFrom}&to=${currencyTo}&amount=${amountFrom}`)

    //     console.log(data)

    //     setAmountTo(data.result)
    // }

    async function convert() {

        const url = "https://open.er-api.com/v6/latest"
        const { data } = await api.get(`${url}/${currencyFrom}`)

        console.log(data)
        const count = data.rates[currencyTo]

        console.log(count)

        console.log(typeof count)

        console.log(count * amountFrom)

        setAmountTo(count * amountFrom)

    }

    function format(value: number) {
        console.log(value)
        // return value.toLocaleString("ed-ED", {
        //     minimumFractionDigits: 2
        // })
        return new Intl.NumberFormat("pt-AO").format(value)
    }

    useEffect(() => {
        convert()
    }, [])


    return (
        <div className='min-h-screen flex flex-col'>

            <Header />

            <Navbar text="Conversor" />

            <div className="flex-grow">
                <div className='max-w-xl px-2 m-auto '>

                    <h2 className="font-semibold text-xl text-center mt-4">
                        Taxa de câmbio comercial
                    </h2>

                    <div className="mt-4">
                        <div className="flex items-center rounded p-2 flex-col gap-4">

                            <div className="w-full space-y-2 ">
                                <label htmlFor="from" className="font-semibold text-lg">Converter de : </label>
                                <div className="py-2 px-2 rounded-md border border-zinc-200  flex items-center gap-1 ">
                                    <input
                                        type="text"
                                        className="w-full outline-none bg-transparent pl-2 py-2 text-lg"
                                        placeholder="0.00"
                                        value={amountFrom}
                                        onInput={(e) => {
                                            setAmountFrom(e.target.value)
                                            format(amountFrom)
                                            console.log(amountFrom)
                                            // convert()
                                        }}
                                    />
                                    <select
                                        name="from"
                                        id="from"
                                        className="p-1 min-w-24 outline-none bg-transparent font-semibold"
                                        onInput={() => {
                                            // convert()
                                        }}
                                    >
                                        {
                                            countries.map((item => (
                                                <option
                                                    value={item.currency}
                                                    key={item.currency}
                                                    className="font-semibold"
                                                >
                                                    {item.icon}
                                                    {item.currency}
                                                </option>
                                            )))
                                        }
                                    </select>
                                </div>
                            </div>

                            <div className="">
                                <Repeat width={40} height={40} />
                            </div>

                            <div className="w-full space-y-2 ">
                                <label htmlFor="to" className="font-semibold text-lg">Para : </label>
                                <div className="py-2 px-2 rounded-md flex items-center gap-1 ">
                                    <input
                                        type="text"
                                        readOnly={true}
                                        value={amountTo}
                                        className="w-full outline-none bg-transparent pl-2 py-2 text-xl font-semibold" placeholder="0.00" />
                                    <select name="to" id="to" className="p-1 min-w-24 outline-none bg-transparent font-semibold">
                                        {
                                            countries.map((item => (
                                                <option
                                                    value={item.currency}
                                                    key={item.currency}
                                                    className="font-semibold"
                                                    defaultValue={"USD"}
                                                >
                                                    {item.icon}
                                                    {item.currency}
                                                </option>
                                            )))
                                        }
                                    </select>
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
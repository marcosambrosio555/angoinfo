import { ArrowBigRight } from "lucide-react";
import { ReactElement, ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
    title: string
}

interface Props {
    props: Props
    children: ReactElement | ReactNode | ReactNode[]
}

export const Section: React.FC<Props> = ({ props, children }) => {

    console.log(props)

    return (
        <section className='min-h-screen flex flex-col justify-between'>

            <header className="border-t border-zinc-200 py-4">
                <div className='max-w-3xl px-2 m-auto'>
                </div>
            </header>

            <nav>
                <div className='max-w-3xl px-2 m-auto'>

                    <Link to={"/"}>inicio</Link>
                    <span> <ArrowBigRight /> </span>
                    <span>dk</span>

                </div>
            </nav>

            <div className='max-w-3xl px-2 m-auto bg-red-500'>
                <div className='pt-20 pb-10 bg-green-500'>

                    {children}


                </div>
            </div>

            <footer className='border-t border-zinc-200 py-4'>
                <div className='max-w-3xl px-2 m-auto text-center'>
                    <span>Copyright &copy; 2025 | Marcos Ambrósio</span>
                </div>
            </footer>
        </section>
    )
}
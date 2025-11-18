import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
    text: string
}

export function Navbar({ text }: Props) {
    return (
        <nav className="mt-4">
            <div className='max-w-3xl px-2 m-auto'>
                <div className="flex gap-2">
                    <Link to={"/"}>inicio</Link>
                    <span> <ChevronRight width={16} /> </span>
                    <span>{text}</span>
                </div>
            </div>
        </nav>
    )
}
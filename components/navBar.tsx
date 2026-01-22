import Link from "next/link";

export default function NavBar() {
    return (
        <div className="w-full flex gap-3 items-center relative h-14 sticky top-0 z-50 bg-[#1b1c1c] text-white">
            <Link href="#home" className="">
                <button className="pl-5 cursor-pointer">Carlos Basaez</button>
            </Link>
            <Link href="#About" className="ml-auto scroll-smooth">
                <button className="cursor-pointer">Sobre mí</button>
            </Link>
            <Link href="#Proyects">
                <button className="cursor-pointer">Proyectos</button>
            </Link>
            <Link href="#Skills">
                <button className="cursor-pointer">Habilidades</button>
            </Link>
            <Link href="#Experience">
                <button className="cursor-pointer">Experiencia</button>
            </Link>
            <Link href="#Contact">
                <button className="pr-5 cursor-pointer">Contacto</button>
            </Link>
        </div>
    )
}
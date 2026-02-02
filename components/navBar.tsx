import Link from "next/link";

export default function NavBar() {
    return (
        <div className="w-full sticky top-0 z-50 bg-[#1b1c1c] text-white">
            <div className="max-w-6xl mx-auto px-4 md:px-8 py-3 flex flex-col md:flex-row items-center justify-center md:justify-between gap-2">

                {/* Logo / Nombre */}
                <Link href="#home">
                    <button className="text-lg font-bold cursor-pointer">Carlos Basaez</button>
                </Link>

                {/* Botones de navegación */}
                <div className="flex flex-wrap justify-center md:justify-end gap-2 mt-2 md:mt-0 w-full md:w-auto">
                    <Link href="#About"><button className="cursor-pointer hover:text-gray-300 transition px-2">Sobre mí</button></Link>
                    <Link href="#Proyects"><button className="cursor-pointer hover:text-gray-300 transition px-2">Proyectos</button></Link>
                    <Link href="#Skills"><button className="cursor-pointer hover:text-gray-300 transition px-2">Habilidades</button></Link>
                    <Link href="#Experience"><button className="cursor-pointer hover:text-gray-300 transition px-2">Experiencia</button></Link>
                    <Link href="#Contact"><button className="cursor-pointer hover:text-gray-300 transition px-2">Contacto</button></Link>
                </div>

            </div>
        </div>

    )
}
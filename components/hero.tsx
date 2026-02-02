export default function Hero() {
    return (
        <div className="relative h-[400px] w-full flex items-center justify-start px-4 md:pl-20">
            <img
                src="/img/background_banner.jpg"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="relative z-10 text-center">
                <h1 className="text-white text-4xl font-bold">
                    ¡Hola!, soy Carlos Basaez
                </h1>
                <h2 className="text-white text-2xl mt-2">
                    Analista QA / Desarrollador Fullstack
                </h2>

            </div>
        </div>
    );
}
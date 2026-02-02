import { Linkedin, Mail, Github } from "lucide-react"

export default function Contact() {
    return (
        <section id="Contact" className="pt-12">
            <div className="px-4 md:px-8 max-w-6xl mx-auto">
                <h1 className="text-white text-4xl pt-2 pb-2 text-center pb-4">Contacto</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center max-w-md mx-auto pb-6">

                    <a href="https://www.linkedin.com/in/carlos-basaez/" target="_blank" rel="noopener noreferrer">
                        <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0A66C2] text-white hover:scale-105 transition">
                            <Linkedin size={30} />
                            Linkedin
                        </button>
                    </a>
                    <a href="https://github.com/carlosBasaez" target="_blank" rel="noopener noreferrer">
                        <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-black text-white hover:scale-105 transition">
                            <Github size={30} />
                            Github
                        </button>
                    </a>
                </div>
                <div className="bg-[#313232] w-full h-0.5"></div>
            </div>

        </section>
    )
}
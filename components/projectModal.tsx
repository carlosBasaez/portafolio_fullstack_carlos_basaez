import { Project } from "./projectCard";

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    return (
        <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] p-4 md:p-10"
            onClick={onClose}
        >
            <div
                className="bg-[#1a1a1a] rounded-3xl w-full max-w-5xl max-h-[85vh] relative text-white shadow-2xl overflow-hidden flex flex-col border border-white/10"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Botón Cerrar */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-50 bg-[#2a2a2a] hover:bg-white hover:text-black transition-all rounded-full w-10 h-10 flex items-center justify-center text-sm"
                >
                    ✕
                </button>

                <div className="flex flex-col lg:flex-row h-full overflow-hidden">

                    {/* COLUMNA IZQUIERDA: Galería con Scroll propio */}
                    <div className="lg:w-3/5 w-full bg-black/20 p-6 overflow-y-auto custom-scrollbar">
                        <div className="grid grid-cols-1 gap-4">
                            {project.images.map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    alt={project.title}
                                    className="w-full h-auto rounded-xl border border-white/5 object-cover"
                                />
                            ))}
                        </div>
                    </div>

                    {/* COLUMNA DERECHA: Información fija (o con poco scroll) */}
                    <div className="lg:w-2/5 w-full p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10 bg-[#1a1a1a]">
                        <div>
                            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                                {project.title}
                            </h2>
                            <div className="h-1 w-12 bg-blue-500 mb-6 rounded-full"></div>
                            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                                {project.description}
                            </p>
                        </div>

                        {/* Botones al fondo de la info */}
                        <div className="flex flex-col gap-3">
                            <a
                                className="w-full py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all text-center flex items-center justify-center gap-2"
                                href={project.linkGit}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Repositorio
                            </a>
                            <a
                                className="w-full py-3 bg-[#313232] text-white font-bold rounded-xl hover:bg-[#404141] transition-all text-center border border-white/5"
                                href={project.linkDemo}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {project.linkDemo ? "Demo en vivo" : "Sin demo"}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
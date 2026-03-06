import Image from "next/image"

export interface Project {
    id: number;
    title: string;
    description: string;
    images: string[];
    linkGit: string;
    linkDemo: string;
}

interface ProjectCardProps {
    project: Project;
    onOpen: () => void;
}

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
    return (
        <div className="flex flex-col h-full bg-[#1c1c1c] border border-white/5 rounded-[2rem] overflow-hidden hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] transition-all duration-500 group">
            {/* Imagen mucho más alta */}
            {/* Imagen mucho más alta */}
            <div className="relative h-80 w-full overflow-hidden">
                <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1c] via-transparent to-transparent opacity-60"></div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
                    {project.title}
                </h3>

                <p className="text-gray-400 text-lg leading-relaxed mb-8 flex-grow">
                    {project.description}
                </p>

                <button
                    onClick={onOpen}
                    className="mt-auto w-full py-4 px-6 bg-gradient-to-r from-white to-gray-300 text-black font-bold rounded-2xl hover:scale-[1.02] active:scale-95 transition-all duration-200"
                >
                    Ver Proyecto Completo
                </button>
            </div>
        </div>
    )
}
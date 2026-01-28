import { Project } from "./projectCard";

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 ">
            <div className="bg-[#1f1f1f] p-6 rounded-xl w-[1800px] relative text-white">

                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-400 hover:text-white"
                >
                    ✕
                </button>

                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="grid grid-cols-2 gap-2">
                    {project.images.map((img, i) => (
                        <img key={i} src={img} className="rounded" />
                    ))}
                </div>
                <div className="flex items-center justify-center gap-4">
                    <a
                        className="mt-2 h-8 bg-[#313232] rounded w-50 text-white hover:bg-[#3d3e3e] flex items-center justify-center"
                        href={project.linkGit}
                        target="_blank"
                    >
                        Repositorio Github
                    </a>
                    <a
                        className="mt-2 h-8 bg-[#313232] rounded w-50 text-white hover:bg-[#3d3e3e] flex items-center justify-center"
                        href={project.linkDemo}
                        target="_blank"
                    >
                        Demo Web
                    </a>
                </div>
            </div>
        </div>
    );
}

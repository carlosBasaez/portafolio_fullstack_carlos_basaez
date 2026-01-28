"use client"
import { useState } from "react";

export interface Project {
    id: number;
    title: string;
    description: string;
    images: string[];
    linkGit: string;
    linkDemo: string
}

interface ProjectCardProps {
    project: Project;
    onOpen: () => void;
}

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
    const [index, setIndex] = useState(0);

    const next = () =>
        setIndex((prev) => (prev + 1) % project.images.length);

    const prev = () =>
        setIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    return (
        <div className="bg-[#1f1f1f] p-4 rounded-xl w-140 h-140">
            <div className="relative h-80 bg-[#313232] rounded-lg mb-4 flex items-center justify-center">
                <img
                    src={project.images[index]}
                    alt="project"
                    className="h-full object-contain"
                />

                <button
                    onClick={prev}
                    className="absolute left-2 bg-black/50 text-white px-2 py-1 rounded"
                >
                    ◀
                </button>

                <button
                    onClick={next}
                    className="absolute right-2 bg-black/50 text-white px-2 py-1 rounded"
                >
                    ▶
                </button>
            </div>

            <h2 className="text-white font-bold pt-4 pb-2">{project.title}</h2>
            <p className="text-gray-400 pb-4">{project.description}</p>
            <button
                onClick={onOpen}
                className="mt-2 h-8 bg-[#313232] rounded w-full text-white hover:bg-[#3d3e3e]"
            >
                Ver más
            </button>
        </div>
    );

}
"use client"

import ProjectCard, { Project } from "./projectCard"
import ProjectModal from "./projectModal"
import { useState } from "react";

const projects = [
    {
        id: 1,
        title: "QA Dashboard",
        description: "Sistema para visualizar métricas de testing, se utilizo Next, Javascript, Tailwind y la data se encuentra guardada en una base de datos PostgreSQL alojada en Neon",
        images: ["/img/p1-1.png", "/img/p1-2.png"],
        linkGit: "https://github.com/carlosBasaez/dashboard-QA",
        linkDemo: "https://dashboardqa-nextjs.netlify.app/"
    }
]

interface ProjectCardProps {
    project: Project;
    onOpen: () => void;
}

export default function Proyects({ project, onOpen }: ProjectCardProps) {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section id="Proyects" className="pt-12">
            <div>
                <h1 className="text-white text-4xl text-center pb-4">Proyectos</h1>

                <div className="flex gap-3 items-center justify-center pb-6">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onOpen={() => setSelectedProject(project)}
                        />
                    ))}
                </div>

                <div className="bg-[#313232] w-full h-0.5"></div>
            </div>

            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>

    )
}
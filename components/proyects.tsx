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
        linkGit: "https://github.com/carlosBasaez/dashboard-QA-nextjs",
        linkDemo: "https://dashboardqa-nextjs.netlify.app/"
    }
]

interface ProjectCardProps {
    project: Project;
    onOpen: () => void;
}

export default function Proyects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section id="Proyects" className="pt-12">
            <div className="px-4 md:px-8 max-w-6xl mx-auto">
                <h1 className="text-white text-4xl text-center pb-4">Proyectos</h1>
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-6">

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
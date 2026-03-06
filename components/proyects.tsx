"use client"

import ProjectCard, { Project } from "./projectCard"
import ProjectModal from "./projectModal"
import { useState } from "react";

const projects: Project[] = [
    {
        id: 1,
        title: "WOW Tracker",
        description: "Aplicación diseñada para gestionar farmeos de forma eficiente, organizada por personajes mediante tarjetas interactivas. Se desarrolló utilizando Next.js, JavaScript, Tailwind CSS y Java Spring Boot, con persistencia de datos en PostgreSQL.",
        images: ["/img/p1-1.png", "/img/p1-2.png", "/img/p1-3.png", "/img/p1-4.png", "/img/p1-5.png", "/img/p1-6.png", "/img/p1-7.png", "/img/p1-8.png"],
        linkGit: "https://github.com/carlosBasaez/wow-task",
        linkDemo: ""
    },
    {
        id: 2,
        title: "QA Dashboard",
        description: "Sistema integral para la visualización de métricas de testing. Utiliza Next.js y Tailwind CSS para una interfaz fluida, con una base de datos PostgreSQL alojada en Neon para un manejo de datos robusto y escalable.",
        images: ["/img/p2-1.png", "/img/p2-2.png"],
        linkGit: "https://github.com/carlosBasaez/dashboard-QA-nextjs",
        linkDemo: "https://dashboardqa-nextjs.netlify.app/"
    }
]

export default function Proyects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section id="Proyects" className="pt-12 ">
            {/* max-w-7xl permite que las 3 columnas sean más anchas */}
            <div className="px-6 md:px-12 max-w-[1450px] mx-auto">
                <h1 className="text-white text-4xl font-bold text-center pb-10">Proyectos</h1>

                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-12">
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
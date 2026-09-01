"use client"

import ProjectCard, { Project } from "./projectCard"
import ProjectModal from "./projectModal"
import { useState } from "react";

const projects: Project[] = [
    {
        id: 1,
        title: "Gifs App Lite",
        description: "Aplicación creada a través de un curso de Udemy de React, que permite demostrar habilidades en la creación de sitios web mediante el uso de Axios y la API de Giphy. La aplicación cuenta con búsqueda de GIFs, guardado de términos previamente escritos y almacenamiento en caché.",
        images: ["/img/cp1-1.png", "/img/cp1-2.png", "/img/cp1-3.png", "/img/cp1-4.png"],
        linkGit: "https://github.com/carlosBasaez/Gifs-App-Lite",
        linkDemo: "https://gifs-app-lite.netlify.app/"
    }
]

export default function CourseProyects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section id="Proyects" className="pt-12 ">
            {/* max-w-7xl permite que las 3 columnas sean más anchas */}
            <div className="px-6 md:px-12 max-w-[1450px] mx-auto">
                <h1 className="text-white text-4xl font-bold text-center pb-10">Proyectos creados en Cursos</h1>

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
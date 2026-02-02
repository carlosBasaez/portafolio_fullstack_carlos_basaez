"use client"

import ExperienceCard from "./experienceCard"
import type { Experience } from "./experienceCard"

const experiences = [
    {
        id: 1,
        title: "Cencosud Scotiabank",
        description: "QA Analyst con 3+ años asegurando la calidad de software mediante pruebas manuales, diseño de casos de prueba y validación de datos en PostgreSQL y MongoDB. Trabajo con Jira y metodologías ágiles, enfocado en detectar fallos antes de que lleguen a producción ",
        images: "/img/exp-1.jpg",
    }
]

interface ExperienceCardProps {
    experience: Experience;
    onOpen: () => void;
}

export default function Experience() {
    return (
        <section id="Experience" className="pt-12">
            <div className="px-4 md:px-8 max-w-6xl mx-auto">
                <h1 className="text-white text-4xl pt-2 pb-2 text-center pb-4">Experiencia</h1>
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-6">

                    {experiences.map((experience) => (
                        <ExperienceCard
                            key={experience.id}
                            experience={experience}
                        />
                    ))}
                </div>
                <div className="bg-[#313232] w-full h-0.5"></div>
            </div>
        </section>
    )
}
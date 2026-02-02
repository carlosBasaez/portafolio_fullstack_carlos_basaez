import SkeletonSkills from "./skeletonSkills"



export default function Skills() {
    return (
        <section id="Skills" className="pt-12 ">
            <h1 className="text-white text-4xl pt-2 pb-2 text-center pb-4">Habilidades</h1>
            <div className="flex flex-col lg:flex-row gap-10 items-start justify-center px-6 py-10 max-w-6xl mx-auto">

                <div className="w-full lg:w-1/2">
                    <h1 className="text-white text-4xl text-center mb-6">
                        Programación
                    </h1>

                    <div className="grid grid-cols-2 gap-8 place-items-center">
                        <SkeletonSkills nombre="HTML" habilidad={3} />
                        <SkeletonSkills nombre="Next JS / React" habilidad={2} />
                        <SkeletonSkills nombre="Javascript" habilidad={3} />
                        <SkeletonSkills nombre="Tailwind CSS" habilidad={2} />
                        <SkeletonSkills nombre="API REST" habilidad={2} />
                        <SkeletonSkills nombre="PostgreSQL" habilidad={4} />
                        <SkeletonSkills nombre="MongoDB" habilidad={3} />
                        <SkeletonSkills nombre="Git / GitHub" habilidad={3} />
                    </div>
                </div>

                <div className="w-full lg:w-1/2">
                    <h1 className="text-white text-4xl text-center mb-6">
                        QA
                    </h1>

                    <div className="grid grid-cols-2 gap-8 place-items-center">
                        <SkeletonSkills nombre="Casos de Prueba" habilidad={5} />
                        <SkeletonSkills nombre="Pruebas Manuales" habilidad={5} />
                        <SkeletonSkills nombre="Pruebas de Humo" habilidad={5} />
                        <SkeletonSkills nombre="Automatización" habilidad={3} />
                        <SkeletonSkills nombre="Postman" habilidad={5} />
                        <SkeletonSkills nombre="Jira" habilidad={5} />
                        <SkeletonSkills nombre="API Testing" habilidad={5} />
                        <SkeletonSkills nombre="Regresión" habilidad={5} />
                    </div>
                </div>

            </div>

            <div className="bg-[#313232] w-full h-0.5"></div>
        </section >

    )
}
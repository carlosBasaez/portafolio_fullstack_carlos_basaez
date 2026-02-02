type skills = {
    nombre: string,
    habilidad: number
}

export default function SkeletonSkills(Skills: skills) {
    return (
        <div>
            <div className="text-white text-lg leading-relaxed max-w-7xl text-justify mx-auto pb-4">
                <h1>{Skills.nombre}</h1>
            </div>
            <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((nivel) => (
                    <svg key={nivel} width="16" height="16">
                        <circle
                            cx="8"
                            cy="8"
                            r="6"
                            className={
                                nivel <= Skills.habilidad
                                    ? "fill-white"
                                    : "fill-none stroke-white stroke-2"
                            }
                        />
                    </svg>
                ))}
            </div>
        </div>
    )
}
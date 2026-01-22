import SkeletonCards from "./skeletonCard";


export default function Experience() {
    return (
        <section id="Experience" className="pt-12">
            <div>
                <h1 className="text-white text-4xl pt-2 pb-2 text-center pb-4">Experiencia</h1>
                <div className="flex gap-3 items-center justify-center pb-6">
                    {[1, 2, 3].map((_, i) =>
                        <SkeletonCards key={i} />)}
                </div>
                <div className="bg-[#313232] w-full h-0.5"></div>
            </div>
        </section>
    )
}
"use client"
import { useState } from "react";

export interface Experience {
    id: number;
    title: string;
    description: string;
    images: string;
}

interface ExperienceCardProps {
    experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {

    return (
        <div className="w-full max-w-sm mx-auto p-4 bg-[#313232] rounded-lg">
            <div className="relative h-[200px] bg-[#313232] rounded-lg mb-2 flex items-center justify-center">
                <img
                    src={experience.images}
                    alt="project"
                    className="h-full object-contain"
                />
            </div>
            <h2 className="text-white font-bold pt-4 pb-2">{experience.title}</h2>
            <p className="text-gray-400 pb-4 text-justify">{experience.description}</p>
        </div>
    );

}
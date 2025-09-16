import React from "react";

type BadgeProps = {
    tech: "Angular" | "React" | "Next.js" | "TypeScript" | "JavaScript (ES6+)" | "Git" | "NPM";
};

const badgeStyles: Record<BadgeProps["tech"], string> = {
    Angular: "bg-red-500/20 text-red-400 hover:bg-red-500/30 hover:text-red-300",
    React: "bg-sky-500/20 text-sky-400 hover:bg-sky-500/30 hover:text-sky-300",
    "Next.js": "bg-gray-700/40 text-gray-300 hover:bg-gray-600/60 hover:text-white",
    TypeScript: "bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 hover:text-blue-300",
    "JavaScript (ES6+)": "bg-yellow-500/20 text-yellow-300 hover:bg-yellow-500/30 hover:text-yellow-200",
    Git: "bg-orange-500/20 text-orange-400 hover:bg-orange-500/30 hover:text-orange-300",
    NPM: "bg-red-600/20 text-red-400 hover:bg-red-600/30 hover:text-red-300",
};

export default function Badge({ tech }: BadgeProps) {
    return (
        <span
            className={`px-3 py-1 rounded-lg text-sm font-medium text-white transition 
        hover:shadow-lg ${badgeStyles[tech]}`}
        >
            {tech}
        </span>
    );
}

interface esdeveniment{
    id: boolean,
    nom: string,
    data: string,
    ciutat: string
}

export const esdeveniment = [
    { id: "ev1", nom: "Hackathon Fullstack", data: "2026-06-20", ciutat: "Barcelona" },
    { id: "ev2", nom: "Hackathon Fullstack", data: "2026-06-20", ciutat: "Barcelona" }
    { id: "ev3", nom: "Hackathon Fullstack", data: "2026-06-20", ciutat: "Barcelona" }
    { id: "ev4", nom: "Hackathon Fullstack", data: "2026-06-20", ciutat: "Barcelona" }
]

export default function EventCard({esd}){
    return(
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-xs font-semibold uppercase tracking-wide text-blue-500 border-t-blue-500 px-2 py-1 rounded-full">
                {esd.ciutat}
            </span>
            <h2 className="text-lg font-bold text-gray-800 mt-3 mb-2">
                {esd.nom}
            </h2>
            <a href={esd.id} target="_blank" className="text-sm text-blue-600 hover:underline">
                veure esdeveniment
            </a>
        </div>
    )
}
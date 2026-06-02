export interface Esdeveniment {
    id: string
    nom: string
    data: string
    ciutat: string
}

export const esdeveniments: Esdeveniment[] = [
    { id: "ev1", nom: "Hackathon Fullstack", data: "2026-06-20", ciutat: "Barcelona" },
    { id: "ev2", nom: "Hackathon Frontend", data: "2026-06-21", ciutat: "Madrid" },
    { id: "ev3", nom: "Hackathon Backend", data: "2026-06-22", ciutat: "Albacete" },
]

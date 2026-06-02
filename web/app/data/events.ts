export interface Esdeveniment {
    id: string
    nom: string
    data: string
    ciutat: string
}

export const esdeveniments: Esdeveniment[] = [
    { id: "ev1", nom: "Hackathon Fullstack", data: "2026-06-20", ciutat: "Barcelona" },
    { id: "ev2", nom: "Frontend Conference", data: "2026-07-10", ciutat: "Madrid" },
    { id: "ev3", nom: "AI Summit", data: "2026-08-05", ciutat: "València" },
    { id: "ev4", nom: "Tech Expo", data: "2026-09-12", ciutat: "Sevilla" }
]

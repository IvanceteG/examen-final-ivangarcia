import EventCard from "../components/EventCard"
import { esdeveniments } from "../data/events"

export default function EventsPage() {
    return (
        <main className="p-10">
            <h1 className="text-2xl font-bold mb-6">Llista d’Esdeveniments</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {esdeveniments.map(ev => (
                    <EventCard key={ev.id} esd={ev} />
                ))}
            </div>
        </main>
    )
}

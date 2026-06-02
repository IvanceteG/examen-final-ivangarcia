import { Esdeveniment } from "../data/events"

export default function EventCard({ esd }: { esd: Esdeveniment }) {
    return (
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-wide text-blue-500 px-2 py-1 rounded-full">
                {esd.ciutat}
            </span>
            <h2 className="text-lg font-bold text-gray-800 mt-3">
                {esd.nom}
            </h2>
            <p className="text-sm text-gray-600 mb-3">
                {esd.data}
            </p>
        </div>
    )
}

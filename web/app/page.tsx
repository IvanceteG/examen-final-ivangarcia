import Link from "next/link";

export default function HomePage() {
    return (
        <main className="p-10">
            <h1 className="text-3xl font-bold">Gestor d’Esdeveniments</h1>
            <p className="text-gray-600 mt-2">Benvingut al projecte del mòdul.</p>
            <Link href="/events" className="inline-block mt-4 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-800">
                Veure esdeveniments
            </Link>
        </main>
    );
}
import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 sm:items-start">
                <nav>
                    <ul>
                        <li>
                            <Link href="/heroes">Heroes</Link>
                        </li>
                        <li>
                            <Link href="/troops">Troops</Link>
                        </li>
                    </ul>
                </nav>

                <h1 className="text-4xl font-bold">Warhammer 40,000</h1>
                <img
                    src="/path/to/warhammer-image.jpg"
                    alt="Warhammer 40,000"
                    className="w-full h-auto mt-4"
                />
                <p className="text-lg">
                    Warhammer 40,000 est un jeu de guerre miniature produit par
                    Games Workshop. Il se déroule dans un univers de
                    science-fiction dystopique, où les joueurs mènent des
                    batailles en utilisant des modèles miniatures de guerriers
                    et de véhicules.
                </p>
                <section className="mt-8">
                    <h2 className="text-2xl font-semibold">Caractéristiques</h2>
                    <ul className="list-disc list-inside">
                        <li>Riche histoire et arrière-plan</li>
                        <li>Large gamme de factions et d&apos;armées</li>
                        <li>Miniatures très détaillées</li>
                        <li>Gameplay stratégique</li>
                    </ul>
                </section>
                <section className="mt-8">
                    <h2 className="text-2xl font-semibold">Commencer</h2>
                    <p>
                        Pour commencer à jouer à Warhammer 40,000, vous aurez
                        besoin d&apos;un livre de règles, de quelques miniatures
                        et d&apos;un endroit pour jouer. Vous pouvez trouver des
                        ensembles de démarrage qui incluent tout ce dont vous
                        avez besoin pour commencer votre voyage dans le futur
                        sombre.
                    </p>
                </section>
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                <p>&copy; 2023 Warhammer 40,000. Tous droits réservés.</p>
            </footer>
        </div>
    );
}

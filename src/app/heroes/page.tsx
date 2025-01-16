"use client";
import { Card } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchHeroes, Hero } from "../utils/api";

export default function Heroes() {
    const [heroes, setHeroes] = useState<Hero[]>([]);

    useEffect(() => {
        const getHeroes = async () => {
            const data = await fetchHeroes();
            console.log("data", data);
            setHeroes(data);
        };

        getHeroes();
    }, []);

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Accueil</Link>
                    </li>
                </ul>
            </nav>
            <h1>Heroes</h1>
            {heroes?.map((hero: Hero) => (
                <Card
                    key={hero.slug}
                    hoverable
                    style={{ width: 240 }}
                    cover={
                        <Image
                            width={500}
                            height={500}
                            alt={hero.slug}
                            src={`http://localhost:1337${hero.image.url}`}
                        />
                    }
                >
                    <div>
                        {hero.name}
                        {hero.description[0].children[0].text}
                    </div>
                </Card>
            ))}
        </div>
    );
}

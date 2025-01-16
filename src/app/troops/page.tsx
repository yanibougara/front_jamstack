"use client";
import { Card } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchTroops, Troop } from "../utils/api";
import Link from "next/link";

export default function Troops() {
    const [troops, setTroops] = useState<Troop[]>([]);

    useEffect(() => {
        const getTroops = async () => {
            const data = await fetchTroops();
            setTroops(data);
        };

        getTroops();
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
            <h1>Troupes</h1>
            {troops?.map((troup: Troop) => (
                <Card
                    key={troup.slug}
                    hoverable
                    style={{ width: 240 }}
                    cover={
                        <Image
                            width={500}
                            height={500}
                            alt={troup.slug}
                            src={`http://localhost:1337${troup.image.url}`}
                        />
                    }
                >
                    <div>
                        {troup.name}
                        {troup.description[0].children[0].text}
                    </div>
                </Card>
            ))}
        </div>
    );
}

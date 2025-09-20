import { useState, useEffect } from "react";

type HomePageProps = {
    username: string;
};

export default function HomePage({ username }: HomePageProps) {
    const [instances, setInstances] = useState<string[]>([]);


    useEffect(() => {
        setInstances(["Vanilla 1.20", "Modded Fun"]);
    }, []);

    return (
        <div className="p-8 bg-gray-100 text-gray-800 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-primary">Bienvenue, {username}</h1>
        </div>
    );
}


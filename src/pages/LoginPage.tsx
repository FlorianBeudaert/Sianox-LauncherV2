import { useState } from "react";

type LoginProps = {
    onLogin: (username: string) => void;
};

export default function LoginPage({ onLogin }: LoginProps) {
    const [username, setUsername] = useState("");

    const handleLogin = () => {
        if (username.trim()) {
            onLogin(username.trim());
        } else {
            alert("Entrez un pseudo !");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
            <h1 className="text-4xl font-bold mb-8 text-primary">Sianox Launcher</h1>

            <input
                type="text"
                placeholder="Pseudo (offline)"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mb-4 p-3 border border-gray-300 rounded-md w-80 focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <button
                onClick={handleLogin}
                className="bg-primary hover:bg-primary-hover text-white font-bold py-3 px-6 rounded-md w-80 transition-colors cursor-pointer"
            >
                Connexion
            </button>

            <p className="mt-4 text-gray-500 text-sm text-center">
                Futur : possibilité de se connecter avec un compte Microsoft
            </p>
        </div>
    );
}

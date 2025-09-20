import './App.css';
import { useState, useEffect } from 'react';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

export default function App() {
  const [username, setUsername] = useState<string | null>(null);

  // Charger le pseudo sauvegardé au démarrage
  useEffect(() => {
    const saved = localStorage.getItem('username');
    if (saved) setUsername(saved);
  }, []);

  // Sauvegarder le pseudo lors du login
  const handleLogin = (name: string) => {
    localStorage.setItem('username', name);
    setUsername(name);
  };

  if (!username) return <LoginPage onLogin={handleLogin} />;
  return <HomePage username={username} />;
}
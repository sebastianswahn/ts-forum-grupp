// src/pages/Home.tsx
import React, { useEffect, useState } from 'react';
import ThreadList from '../components/ThreadList';
import { Thread } from '../components/models/Thread';

const Home: React.FC = () => {
  const [threads, setThreads] = useState<Thread[]>([]);

  useEffect(() => {
    const storedThreads = localStorage.getItem('threads');
    if (storedThreads) {
      setThreads(JSON.parse(storedThreads));
    }
  }, []);

  const handleDelete = (id: string) => {
    const updatedThreads = threads.filter(thread => thread.id !== id);
    setThreads(updatedThreads);
    localStorage.setItem('threads', JSON.stringify(updatedThreads));
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Home</h1>
      <ThreadList threads={threads} onDelete={handleDelete} />
    </div>
  );
};

export default Home;

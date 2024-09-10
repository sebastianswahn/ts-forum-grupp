// src/pages/Home.tsx
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ThreadList from "../components/ThreadList";
import { Thread } from "../components/models/types";
import { DataTable } from "../components/DataTable";
import { columns } from "../threads/columns";
import NavTrigger from "../components/NavTrigger";

const Home: React.FC = () => {
  const [threads, setThreads] = useState<Thread[]>([]);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const onColumnClick = () => {
    navigate(`/thread/${id}`);
  };

  useEffect(() => {
    const storedThreads = localStorage.getItem("threads");
    if (storedThreads) {
      setThreads(JSON.parse(storedThreads));
    }
  }, []);

  const handleDelete = (id: string) => {
    const updatedThreads = threads.filter((thread) => thread.id !== id);
    setThreads(updatedThreads);
    localStorage.setItem("threads", JSON.stringify(updatedThreads));
  };

  const handleItemClick = (id: string) => {
    navigate(`/thread/${id}`); // Use template literals to construct the path
  };

  console.log(threads);

  return (
    <div>
      <NavTrigger />
      <div className="max-w-3xl ml-12">
        <DataTable
          columns={columns}
          data={threads}
          onColumnClick={onColumnClick}
        />
      </div>
    </div>
  );
};

export default Home;

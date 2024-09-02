// src/pages/Home.tsx
import React, { useEffect, useState } from "react";
import ThreadList from "../components/ThreadList";
import { Thread } from "../components/models/Thread";
import { DataTable } from "@/components/DataTable";
import { columns } from "@/threads/columns";
import NavTrigger from "@/components/NavTrigger";

const Home: React.FC = () => {
  const [threads, setThreads] = useState<Thread[]>([]);

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
  console.log(threads);

  return (
    <div>
      <NavTrigger />{" "}
      {/*       <ThreadList threads={threads} onDelete={handleDelete} />
       */}{" "}
      <div className="max-w-3xl ml-12">
        <DataTable columns={columns} data={threads} />
      </div>
    </div>
  );
};

export default Home;

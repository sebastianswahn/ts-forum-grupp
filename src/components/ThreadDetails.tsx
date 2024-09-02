import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Thread } from "./models/Thread";

function ThreadDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [thread, setThread] = useState<Thread | null>(null);

  useEffect(() => {
    const storedThreads = localStorage.getItem("threads");
    if (storedThreads) {
      const threadsArray = JSON.parse(storedThreads);
      const foundThread = threadsArray.find(
        (thread: Thread) => thread.id === id
      );
      setThread(foundThread || null);
    }
  }, [id]);

  return <div>ThreadDetails</div>;
}

export default ThreadDetails;

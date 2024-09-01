import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Thread } from "../components/models/Thread";

function CreateThread() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [confirmationMessage, setConfirmationMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

   
    const newThread: Thread = {
      id: Date.now().toString(), 
      title,
      content,
      author: "Användare", 
      createdAt: new Date(),
    };

    
    const storedThreads = localStorage.getItem("threads");
    const threads = storedThreads ? JSON.parse(storedThreads) : [];

    
    const updatedThreads = [newThread, ...threads];

   
    localStorage.setItem("threads", JSON.stringify(updatedThreads));

    
    setConfirmationMessage("Your thread has been successfully created!");

   
    setTitle("");
    setContent("");

    
    setTimeout(() => {
      navigate("/");
    }, 2000); 
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">.</h2>
      {confirmationMessage && (
        <div className="bg-green-100 text-green-700 p-4 rounded-md mb-4">
          {confirmationMessage}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Create Thread
        </button>
      </form>
    </div>
  );
}

export default CreateThread;

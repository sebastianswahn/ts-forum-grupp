// src/components/ThreadList.tsx
import React from 'react';
import { Thread } from '../components/models/Thread';

interface ThreadListProps {
  threads: Thread[];
  onDelete: (id: string) => void;
}

const ThreadList: React.FC<ThreadListProps> = ({ threads, onDelete }) => {
  return (
    <div>
      <ul>
        {threads.map((thread) => (
          <li key={thread.id} className="border-b py-2 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold">{thread.title}</h3>
              <p>{thread.content}</p>
              <small className="text-gray-500">
                By {thread.author} on {new Date(thread.createdAt).toLocaleDateString()}
              </small>
            </div>
            <button
              onClick={() => onDelete(thread.id)}
              className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThreadList;

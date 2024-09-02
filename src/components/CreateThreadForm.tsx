import React, { useState } from "react";
import { Thread } from "./models/Thread";

interface CreateThreadFormProps {
  onCreate: (thread: Thread) => void;
}

const CreateThreadForm: React.FC<CreateThreadFormProps> = ({ onCreate }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("anonymous");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newThread: Thread = {
      id: Date.now().toString(),
      title,
      content,
      author:"",
      // Kan vi göra så att användaren kan skriva in sitt namn här?
      createdAt: new Date(),
    };
    onCreate(newThread);
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/*       <div>
        // Typ så här?
        <label>Author</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required></input>
      

          </div> */}
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      {/* User/ author name */}
      <div>
        <label>author</label>
        <textarea
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <button type="submit">Create Thread</button>
    </form>
  );
};

export default CreateThreadForm;

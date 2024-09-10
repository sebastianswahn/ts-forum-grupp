import React, { useState } from "react";
import { Thread, CreateThreadFormProps, ThreadCategory } from "./models/types";
import { Timestamp } from "mongodb";

const CreateThreadForm: React.FC<CreateThreadFormProps> = ({ onCreate }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newThread: Thread = {
      id: Math.random().toString(36),
      title,
      content,
      category: "Thread",
      author: "",
      createdAt: Timestamp,
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
      <div>
        <label>Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value as ThreadCategory)}
          required
        >
          <option value="Thread">Thread</option>
          <option value="QNA">QNA</option>
        </select>
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

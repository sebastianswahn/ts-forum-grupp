"use client";
import React, { useEffect, useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../components/ui/card";
import { useParams } from "react-router-dom";
import { Thread } from "@/components/models/Thread";

// Function to generate a random username
const generateRandomName = () => {
  const adjectives = [
    "Brave",
    "Clever",
    "Witty",
    "Fierce",
    "Calm",
    "Gentle",
    "Quick",
    "Quiet",
    "Bold",
    "Eager",
  ];
  const nouns = [
    "Lion",
    "Tiger",
    "Falcon",
    "Panther",
    "Wolf",
    "Eagle",
    "Hawk",
    "Bear",
    "Fox",
    "Owl",
  ];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return `${adjective}${noun}`;
};

// Function to generate a random avatar URL
const generateRandomAvatar = () => {
  const randomNumber = Math.floor(Math.random() * 1000); // Generates a number to create unique URLs
  return `https://api.dicebear.com/6.x/identicon/svg?seed=${randomNumber}`;
};

function ThreadInfo() {
  const { id } = useParams<{ id: string }>();
  const [thread, setThread] = useState<Thread | null>(null);
  const [comments, setComments] = useState<
    { text: string; user: { name: string; avatar: string } }[]
  >([]); // State to hold comments with user info
  const [newComment, setNewComment] = useState(""); // State for the new comment input

  // Load thread and comments from localStorage when the component mounts
  useEffect(() => {
    const storedThreads = localStorage.getItem("threads");
    if (storedThreads) {
      const threadsArray = JSON.parse(storedThreads);
      const foundThread = threadsArray.find(
        (thread: Thread) => thread.id === id
      );
      setThread(foundThread || null);
    }

    // Load comments for the specific thread from localStorage
    const storedComments = localStorage.getItem(`comments-${id}`);
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, [id]);

  // Function to save comments to localStorage
  const saveCommentsToLocalStorage = (
    comments: { text: string; user: { name: string; avatar: string } }[]
  ) => {
    localStorage.setItem(`comments-${id}`, JSON.stringify(comments));
    // here what wer ard doin g we  are geting all the threads from local storeage
    // then we are updating the thread with the id of the thread we are currently on
    // then we are setting the thread to the updated thread
    // then we are saving the updated thread to local storage
    
    let storedThreads=JSON.parse(localStorage.getItem("threads"))||[];
    

    let modifiedThreads=storedThreads.map((thread:Thread)=>{
      if(thread.id===id){
        thread.answered="YES";
      }
      return thread;
    })
    localStorage.setItem("threads",JSON.stringify(modifiedThreads));    
  };

  // Function to handle comment submission
  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      // Generate a random user with a random name and avatar
      const randomUser = {
        name: generateRandomName(),
        avatar: generateRandomAvatar(),
      };
      // Add the new comment with the random user to the comments state
      const updatedComments = [
        ...comments,
        { text: newComment, user: randomUser },
      ];
      setComments(updatedComments);
      saveCommentsToLocalStorage(updatedComments); // Save updated comments to localStorage
      setNewComment(""); // Clear the input field
    }
  };

  if (!thread) {
    return <div>Thread not found</div>;
  }
  console.log(thread,"my thread of current page")

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-full max-w-sm p-4"> {/* Adjusted size and added padding */}
        <CardHeader className="flex flex-row items-center gap-4">
          <Avatar>
            <AvatarImage
              src="/placeholder.svg?height=40&width=40"
              alt="@username"
            />
            <AvatarFallback>UN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="text-sm font-semibold">{thread.author}</p>
            <p className="text-xs text-muted-foreground">@{thread.id}</p>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            {thread.content}
          </p>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="border rounded p-2 flex-grow"
            />
            <button
              type="button"
              onClick={handleCommentSubmit}
              className="ml-2 bg-blue-500 text-white p-2 rounded"
            >
              Submit
            </button>
          </div>

          {/* Heading for comments section */}
          {comments.length > 0 && (
            <h2 className="text-lg font-semibold mt-4">Comments</h2>
          )}

          {/* Render the comments below the input */}
          {comments.length > 0 && (
            <div className="mt-2">
              {comments.map((comment, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-gray-100 p-2 rounded mt-2 text-sm"
                >
                  <Avatar>
                    <AvatarImage
                      src={comment.user.avatar}
                      alt={`@${comment.user.name}`}
                    />
                    <AvatarFallback>
                      {comment.user.name.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <p className="font-semibold">{comment.user.name}</p>
                    <p>{comment.text}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}

export default ThreadInfo;

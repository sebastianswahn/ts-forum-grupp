"use client";
import React from "react";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"

import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../components/ui/card";
import { HeartIcon, MessageCircleIcon, RepeatIcon } from "lucide-react";

function ThreadInfo() {
  function ThreadInfo() {
    return (
      <div>
        <Card className="w-full max-w-md">
          <CardHeader className="flex flex-row items-center gap-4">
            <Avatar>
              <AvatarImage
                src="/placeholder.svg?height=40&width=40"
                alt="@username"
              />
              <AvatarFallback>UN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <p className="text-sm font-semibold">John Doe</p>
              <p className="text-xs text-muted-foreground">@johndoe</p>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              This is the content of the thread. It can be a longer text,
              spanning multiple lines if needed. #ThreadContent #Example
            </p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              <HeartIcon className="mr-1 h-4 w-4" />
              <span className="text-xs">42</span>
              <span className="sr-only">Likes</span>
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              <MessageCircleIcon className="mr-1 h-4 w-4" />
              <span className="text-xs">24</span>
              <span className="sr-only">Comments</span>
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              <RepeatIcon className="mr-1 h-4 w-4" />
              <span className="text-xs">12</span>
              <span className="sr-only">Reposts</span>
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }
}
export default ThreadInfo;

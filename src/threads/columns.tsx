"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Thread } from "../components/models/types";

export const columns: ColumnDef<Thread>[] = [
  {
    accessorKey: "title",
    header: () => "Title",
    cell: ({ row }) => <div>{row.getValue("title")}</div>,
  },
  {
    accessorKey: "content",
    header: () => "Content",
    cell: ({ row }) => <div>{row.getValue("content")}</div>,
  },
  {
    accessorKey: "author",
    header: () => "Author",
    cell: ({ row }) => <div>{row.getValue("author")}</div>,
  },
  {
    accessorKey: "createdAt",
    header: () => "Created At",
    cell: ({ row }) => <div>{row.getValue("createdAt")}</div>,
  },
  {
    accessorKey: "answered",
    header: () => "Answered",
    cell: ({ row }) => <div>{row.getValue("answered")}</div>,
  },
];

"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import NoteList from "./NoteList";
import NoteForm from "./NoteForm";
import SearchForm from "./SearchForm";
import css from "./Notes.module.css";

const NotesClient = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { data: notes } = useQuery({
    queryKey: ["notes", searchQuery],
    queryFn: () => fetchNotes(searchQuery),
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>My Notes</h1>
      <SearchForm onSearch={handleSearch} />
      <NoteForm />
      {notes && notes.length > 0 ? (
        <NoteList notes={notes} />
      ) : (
        <p>No notes found.</p>
      )}
    </div>
  );
};

export default NotesClient;

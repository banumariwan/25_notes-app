import { useEffect, useState } from "react";
import api from "../api";
import NoteForm from "./NoteForm";
import NoteItem from "./NoteItem";

export default function NoteList() {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const res = await api.get("notes/");
    setNotes(res.data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div>
      <h1>📝 My Notes</h1>
      <NoteForm refreshNotes={fetchNotes} />
      {notes.map(note => (
        <NoteItem key={note.id} note={note} refreshNotes={fetchNotes} />
      ))}
    </div>
  );
}

import { useState } from "react";
import api from "../api";

export default function NoteForm({ refreshNotes }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const createNote = async (e) => {
    e.preventDefault();
    await api.post("notes/", { title, content });
    setTitle("");
    setContent("");
    refreshNotes();
  };

  return (
    <form onSubmit={createNote} className="note-form">
      <div className="note-form-grid">
        <input
          className="note-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <button type="submit" className="btn btn-primary">Add</button>
      </div>

      <textarea
        className="note-textarea"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your note..."
        rows={4}
      />
    </form>
  );
}

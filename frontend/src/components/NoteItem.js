import { useState } from "react";
import api from "../api";

export default function NoteItem({ note, refreshNotes }) {

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);


  const deleteNote = async () => {
    await api.delete(`notes/${note.id}/`);
    refreshNotes();
  };


  const saveEdit = async () => {
    await api.put(`notes/${note.id}/`, { title, content });
    setIsEditing(false);
    refreshNotes();
  };


  return (
    <div className="note-item">
      {isEditing ? (
        <>
          <input
            className="note-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="note-textarea"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="note-actions">
            <button onClick={saveEdit} className="btn btn-primary">Save</button>
            <button onClick={() => setIsEditing(false)} className="btn btn-ghost">Cancel</button>
          </div>
        </>
      ) : (
        <>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <small>{new Date(note.created_at).toLocaleString()}</small>
          <div className="note-actions">
            <button onClick={() => setIsEditing(true)} className="btn btn-ghost">Edit</button>
            <button onClick={deleteNote} className="btn btn-danger">Delete</button>
          </div>
        </>
      )}
    </div>
  );
}

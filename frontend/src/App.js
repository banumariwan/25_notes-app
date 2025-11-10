import React from "react";
import NoteList from "./components/NoteList";
import "./NoteStyles.css";

function App() {
  return (
    <div className="app-container">
      <div className="notes-wrapper">
        <NoteList />
      </div>
    </div>
  );
}

export default App;

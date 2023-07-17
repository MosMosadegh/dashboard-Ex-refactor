import React, { useState } from "react";
import FilteredNotes from "./FilteredNotes";
import "./TodoList.css";


export default function TodoList() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  const addNewNote = () => {
    let newNoteObj = {
      id: notes.length + 1,
      title: newNote,
    };
    setNotes((prevNotes) => [...prevNotes, newNoteObj]);
    setNewNote("");
  };

  return (
    <div className=" todo-container">
      <p className='text-warning text-center pt-4 fs-2'>I have used the useMemo hook to improve the performance of the project and it filters words that contain the word "js". </p>
      <div className="todoInput">
        <input
          type="text"
          value={newNote}
          onChange={(e) => {
            setNewNote(e.target.value);
          }}
        />
        <button onClick={addNewNote}>Add New Note</button>
      </div>
      <hr />
      <div className="todoShow">
        <h3>All Notes</h3>
        <ul>
          {notes.map((note) => (
            <li key={note.id}>
              {note.id} - {note.title}
            </li>
          ))}
        </ul>
        <br />
        <hr />
        <br />
        <h3>Note Includes Js</h3>
        <FilteredNotes notesArray={notes} />
      </div>
    </div>
  );
}

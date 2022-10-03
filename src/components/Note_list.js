import Note from "./Note";
import AddNote from "./AddNote";
import React from "react";
import { setState } from "react";

const Note_list = ({ note, handleAddNote, handleDeleteNote }) => {
	console.log(note);
  return (
    <div className="notes-list">
      {note.map((note) => (
        <Note
          id={note.id}
          title={note.title}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}

      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default Note_list;

import Note_list from "./components/Note_list";

import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (text,title) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      title:title,
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    if(newNotes.length<=6){
      setNotes(newNotes);
    }   
  };
  const deleteNote = (id) => {
    console.log(id);
    const newNotes = notes.filter((note) => note.id !== id);
    console.log(newNotes);
    setNotes(newNotes);
  };
  // const pinNote =(id,title,text,date) =>{
    
  //   const newNote = {
  //     id: nanoid(),
  //     title:title,
  //     text: text,
  //     date: date
  //   };
  //   console.log(newNote);
    
  //   notes[0]=newNote;
  //   console.log(notes);
    
  //   // notes = [newNote, ...notes];
    
  //   // setNotes(newNotes_1); 
  //   // deleteNote(id);
    


  // }
  

  return (
    <div className="container">
      <h1 style={{ color: "black",marginLeft:"20px" }}>Notes</h1>
      <Note_list
        note={notes}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
        
      />
    </div>
  );
};

export default App;

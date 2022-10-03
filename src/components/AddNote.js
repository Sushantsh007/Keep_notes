import { useState } from "react";
import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

// import { ToastContainer, toast } from "react-toastify";
import { Toaster, toast } from 'react-hot-toast';

import "react-toastify/dist/ReactToastify.css";
const AddNote = ({ handleAddNote }) => {
  // const [count ,setcount]=useState(0);
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

 

  const handleSaveClick = () => {
    if(noteText.trim().length > 0&&title.trim().length == 0){
      toast.error('You did not give any title');
      handleAddNote(noteText, title);
      // setcount(count+1);
      setTitle("");
      setNoteText("");

    }
    if (noteText.trim().length > 0) {
      handleAddNote(noteText, title);
      // setcount(count+1);
      setTitle("");
      setNoteText("");
    }
    if (noteText.trim().length == 0) {

      // console.log("ppp")
      toast.error('Please enter some text');

     
    }
   
  };
  const titleHandler = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div className="note new">
      <div className="header_note">
        <h5>Title</h5>
        <input
          type="text"
          placeholder="Enter the title of Note....."
          value={title}
          onChange={titleHandler}
        ></input>
      </div>
      <textarea
        className="smallNote"
        rows="8"
        cols="10"
        placeholder="Starts here for type to add a note..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length} Remaining</small>
        <button className="save" onClick={handleSaveClick}>
          Save
          <Toaster />
        </button>
      </div>
    </div>
  );
};

export default AddNote;

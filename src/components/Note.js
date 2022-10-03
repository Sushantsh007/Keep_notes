import UpdateNote from "./UpdateNote";
import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import AddNote from "./AddNote";
import NoteInfo from "./NoteInfo";
import "bootstrap-icons/font/bootstrap-icons.css";

const Note = ({ id, text, date, handleDeleteNote, title }) => {
  const [id_1, setId] = useState(id);
  const [text_1, setText] = useState(text);
  const [title_1, setTitle] = useState(title);

  const changeTitle = (event) => {
    setTitle(event.target.value);
  };

  const changeTextNew = (event) => {  
   
    setText(event.target.value);
  };
  // const pinNoteHandler=()=>{
  //   handlePinNotes(id,title_1,text_1,date);
  // }

  return (
    <div className="note">

      
      <h5>{title_1}</h5>
      <span>{text_1}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          onClick={() => handleDeleteNote(id)}
          className="delete-icon"
          size="1.3em"
        />
        <UpdateNote
        key={id_1}
          id={id_1}
          
          date={date}
          changeTitle={changeTitle}
          changeTextNew={changeTextNew}
          title={title_1}
          text={text_1}
        />
        <i className="bi bi-pin-angle-fill" style={{color:"#e7b13c"}} ></i>
      </div>
    </div>
  );
};

export default Note;

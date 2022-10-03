import { MdDeleteForever } from "react-icons/md";

const NoteInfo = ({ id, text, title, changeTextNew, changeTitle }) => {
  return (
    <div className="note">
      <div className="big-note-header">
        <h5>{title}</h5>
        <input type="text" value={title} onChange={changeTitle}></input>
      </div>
      <textarea
        rows="8"
        cols="10"
        placeholder="Starts here for type to add a note..."
        value={text}
        onChange={changeTextNew}
      ></textarea>
    </div>
  );
};

export default NoteInfo;

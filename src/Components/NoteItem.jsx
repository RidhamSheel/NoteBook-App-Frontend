import React, { useContext } from "react";
import NoteContext from "../context/notes/noteContext";

export default function NoteItem(props) {
  const context = useContext(NoteContext);
  const { deleteNote, onEdit } = context;

  const onDeleteClick = () => {
    deleteNote(props.note._id);
  };
  const onEditClick = () => {
    onEdit(props.note);
  };
  return (
    <div className="col-lg-3">
      <div className="card my-2">
        <div className="card-body">
          <h5 className="card-title">{props.note.title}</h5>
          <p className="card-text">{props.note.desc}</p>
        </div>
        <div className="card-footer">
          <button className="btn btn-danger mx-1 my-1" onClick={onDeleteClick}>
            Delete
          </button>
          <button className="btn btn-primary mx-1 my-1" onClick={onEditClick}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

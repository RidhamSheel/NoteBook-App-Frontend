import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/noteContext";

export default function AddNote() {
  const context = useContext(NoteContext);
  const { addNote } = context;
  const [note, setNote] = useState({ title: "", desc: "", tag: "" });

  const onFieldsChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  const handleAddNoteClick = (e) => {
    e.preventDefault();
    addNote(note);
    setNote({ title: "", desc: "", tag: "" });
  };

  return (
    <div style={{ width: "50%" }}>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            onChange={onFieldsChange}
            value={note.title}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            name="desc"
            onChange={onFieldsChange}
            value={note.desc}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            onChange={onFieldsChange}
            value={note.tag}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleAddNoteClick}
        >
          Add Note
        </button>
      </form>
    </div>
  );
}

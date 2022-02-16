import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NoteContext from "../context/notes/noteContext";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";
import EditNoteModal from "./EditNoteModal";

export default function Notes() {
  const navigate = useNavigate();
  const context = useContext(NoteContext);
  const { notes, getAllNotes, edit } = context;

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getAllNotes();
    } else {
      navigate("/login");
    }
  });

  return (
    <div className="mx-3">
      <h2 className="text-center mt-3">Add A Note</h2>
      <div
        className="d-flex justify-content-center"
        style={{ minWidth: "500px" }}
      >
        <AddNote />
      </div>
      {edit && <EditNoteModal />}
      <h2 className="mx-2 my-2">Your Notes</h2>
      {notes.length === 0 ? (
        <p>No Notes To Display</p>
      ) : (
        <div className="row mx-2">
          {notes.map((note) => {
            return <NoteItem key={note._id} note={note} />;
          })}
        </div>
      )}
    </div>
  );
}

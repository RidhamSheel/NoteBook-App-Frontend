import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);
  const [edit, setEdit] = useState(false);
  const [noteToBeEdited, setNoteToBeEdited] = useState({
    title: "",
    desc: "",
    tag: "",
  });
  const onEdit = (note) => {
    if (edit === false) {
      setEdit(true);
    }

    setNoteToBeEdited({
      ...note,
      title: note.title,
      desc: note.desc,
      tag: note.tag,
    });
  };

  const onCloseModalClick = () => {
    if (edit === true) {
      setEdit(false);
    }
  };

  const getAllNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchAllNotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFmOTAwNzJlN2UxMzhiZGU3ZDdmY2E2In0sImlhdCI6MTY0NDI0NTEyOX0.4NMEOOxgjXn0HJMa5DDVpqusyEgNvnf-iAMRP5F5Ccs",
      },
    });

    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  const addNote = async (note) => {
    const { title, desc, tag } = note;
    const response = await fetch(`${host}/api/notes/addNote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFmOTAwNzJlN2UxMzhiZGU3ZDdmY2E2In0sImlhdCI6MTY0NDI0NTEyOX0.4NMEOOxgjXn0HJMa5DDVpqusyEgNvnf-iAMRP5F5Ccs",
      },
      body: JSON.stringify({ title, desc, tag }),
    });
    getAllNotes();
  };

  const deleteNote = async (id) => {
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);

    const response = await fetch(`${host}/api/notes/deleteNote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFmOTAwNzJlN2UxMzhiZGU3ZDdmY2E2In0sImlhdCI6MTY0NDI0NTEyOX0.4NMEOOxgjXn0HJMa5DDVpqusyEgNvnf-iAMRP5F5Ccs",
      },
    });
  };

  const updateNote = async (note) => {
    const { _id, title, desc, tag } = note;
    const response = await fetch(`${host}/api/notes/updateNote/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFmOTAwNzJlN2UxMzhiZGU3ZDdmY2E2In0sImlhdCI6MTY0NDI0NTEyOX0.4NMEOOxgjXn0HJMa5DDVpqusyEgNvnf-iAMRP5F5Ccs",
      },
      body: JSON.stringify({ title, desc, tag }),
    });

    let allNotes = [...notes];
    for (let i = 0; i < allNotes.length; i++) {
      if (allNotes[i]._id === _id) {
        allNotes[i].title = title;
        allNotes[i].desc = desc;
        allNotes[i].tag = tag;
        break;
      }
    }
    setNotes(allNotes);
  };
  return (
    <NoteContext.Provider
      value={{
        notes,
        addNote,
        deleteNote,
        updateNote,
        getAllNotes,
        onEdit,
        edit,
        onCloseModalClick,
        noteToBeEdited,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;

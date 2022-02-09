import React, { useRef, useEffect, useContext, useState } from "react";
import NoteContext from "../context/notes/noteContext";

export default function EditNoteModal() {
  const context = useContext(NoteContext);
  const { edit, onCloseModalClick, noteToBeEdited, updateNote } = context;

  const [note, setNote] = useState(noteToBeEdited);

  const toggleModal = useRef();
  const updateAndCloseModal = useRef();

  useEffect(() => {
    if (edit) {
      toggleModal.current.click();
    }
  }, []);

  const onFieldsChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <button
        type="button"
        ref={toggleModal}
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Launch Modal
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Edit Note
              </h5>
            </div>
            <div className="modal-body">
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
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                ref={updateAndCloseModal}
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => {
                  onCloseModalClick();
                }}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  updateNote(note);
                  updateAndCloseModal.current.click();
                }}
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

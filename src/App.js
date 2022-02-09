import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import NoteState from "./context/notes/noteState";

function App() {
  return (
    <div>
      <NoteState>
        <Navbar />
        <Home />
      </NoteState>
    </div>
  );
}

export default App;

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import NoteState from "./context/notes/noteState";
import AuthState from "./context/auth/authState";
import SignUp from "./Components/SignUp";
import LogIn from "./Components/LogIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <AuthState>
          <NoteState>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/signup" element={<SignUp />} />
              <Route exact path="/login" element={<LogIn />} />
            </Routes>
          </NoteState>
        </AuthState>
      </Router>
    </div>
  );
}

export default App;

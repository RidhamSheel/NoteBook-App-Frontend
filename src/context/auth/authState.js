import AuthContext from "./authContext";
import { useNavigate } from "react-router-dom";

const AuthState = (props) => {
  const host = "http://localhost:5000";
  const navigate = useNavigate();

  const createUser = async (user) => {
    const response = await fetch(`${host}/api/auth/createUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        password: user.password,
        cpassword: user.cpassword,
      }),
    });

    const json = await response.json();
    console.log(json);
  };

  const loginUser = async (user) => {
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
    });

    const json = await response.json();
    console.log(json);

    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      navigate("/");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <AuthContext.Provider value={{ createUser, loginUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;

import React, { useState, useContext } from "react";
import AuthContext from "../context/auth/authContext";

export default function LogIn() {
  const context = useContext(AuthContext);
  const { loginUser } = context;

  const [user, setUser] = useState({ email: "", password: "" });

  const onFieldsChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(user);
  };

  return (
    <div>
      <h2 className="text-center my-3">Log In</h2>
      <div className="d-flex justify-content-center w-100">
        <form className="w-50" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              onChange={onFieldsChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              onChange={onFieldsChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const ForgetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { keyParam } = useParams();
  console.log("keyParam", keyParam);
  const handlePasswordChange = (ev) => {
    setPassword(ev.target.value);
  };
  const handleConfirmPasswordChange = (ev) => {
    setConfirmPassword(ev.target.value);
  };
  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    if (password === confirmPassword) {
      //! joi validation
      axios
        .post(`/auth/recoverpassword/${keyParam}`)
        .then((data) => {
          console.log("success", data);
          //* redirect to login page
        })
        .catch((err) => {
          console.log("error");
          //* display error msg
        });
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h1>Reset your password</h1>
      <div className="mb-3">
        <label htmlFor="passwordInput" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="passwordInput"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="confirmPasswordInput" className="form-label">
          Confirm Password
        </label>
        <input
          type="password"
          className="form-control"
          id="confirmPasswordInput"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ForgetPasswordPage;

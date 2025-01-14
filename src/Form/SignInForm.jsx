import { useState } from "react";
import "../Form/SignInForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');  

  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5098/user/sign", {
        username,
        email,
        password,
      });

      setSuccessMessage('Login successful!'); 
      console.log(response.data);
    } catch (error) {
      console.log(`Error occurred at axios ${error.message}`);
      setError(error.message);
      setSuccessMessage('')
    } finally {
      setLoader(false);
    }
  };

  const handleNavigateToLogin = () => {
    navigate("/LogInForm");
  };

  return (
    <div>
      <div className="form-sign-in">
        <div className="main-form">
          <div className="heading">
            <h2>Sign In</h2>
          </div>
          <form action="" method="post" onSubmit={handleSubmit}>
            <div className="usename">
              <label htmlFor="">Username</label>
              <input
                type="text"
                placeholder="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="email">
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="password">
              <label htmlFor="">Password</label>
              <input
                type="password"
                placeholder="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && (
              <p style={{ color: "black", fontFamily: "arial" }}>{error}</p>
            )}
            {successMessage && <p className="success-message">{successMessage}</p>} 
            <div className="btn">
              <button className="btn-2" type="submit">
                {loader ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
          <p>
            If you have an account<button
onClick={handleNavigateToLogin}
              style={{
                background: "none",
                border: "none",
                color: "blue",
                textDecoration: "none",
              }}
            >
              login
            </button>
            here
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;

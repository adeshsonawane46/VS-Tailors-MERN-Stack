import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import { GoogleLogin } from "@react-oauth/google";

const API_BASE =
  window.location.hostname === "localhost"
    ? "http://localhost:5000"
    : "https://vs-tailors-backend.onrender.com";

function Login() {

  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("login");

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [msgType, setMsgType] = useState("");

  // ===== GOOGLE LOGIN =====
  const handleGoogleLogin = async (credentialResponse) => {
    try {

      const res = await fetch(`${API_BASE}/api/auth/google`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          token: credentialResponse.credential
        })
      });

      const data = await res.json();

      if (res.ok) {

        localStorage.setItem("token", data.token);
        localStorage.setItem("loggedIn", "true");

        setMsgType("success");
        setMessage("Google Login Successful!");

        setTimeout(() => navigate("/"), 1500);

      } else {
        setMsgType("error");
        setMessage("Google login failed");
      }

    } catch {
      setMsgType("error");
      setMessage("Server error during Google login");
    }
  };

  // ===== EMAIL LOGIN =====
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API_BASE}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const data = await res.json();

      if (res.ok) {

        localStorage.setItem("token", data.token);
        localStorage.setItem("loggedIn", "true");

        setMsgType("success");
        setMessage("Login Successful!");

        setTimeout(() => navigate("/"), 2000);

      } else {
        setMsgType("error");
        setMessage(data.message);
      }

    } catch {
      setMsgType("error");
      setMessage("Server error. Try again.");
    }
  };

  // ===== SIGNUP =====
  const handleSignup = async (e) => {
    e.preventDefault();

    try {

      const res = await fetch(`${API_BASE}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupData),
      });

      const data = await res.json();

      if (res.ok) {

        setMsgType("success");
        setMessage("Signup Successful!");

        setTimeout(() => {
          setActiveTab("login");
          setMessage("");
        }, 2000);

      } else {
        setMsgType("error");
        setMessage(data.message);
      }

    } catch {
      setMsgType("error");
      setMessage("Server error.");
    }
  };

  return (
    <div className="login-container">

      {/* Back Button */}
      <div className="back-btn" onClick={() => navigate("/")}>
        ←
      </div>

      {/* Tabs */}
      <div className="tabs">

        <div
          className={activeTab === "login" ? "active" : ""}
          onClick={() => setActiveTab("login")}
        >
          Login
        </div>

        <div
          className={activeTab === "signup" ? "active" : ""}
          onClick={() => setActiveTab("signup")}
        >
          Signup
        </div>

      </div>

      {/* LOGIN FORM */}
      <form
        onSubmit={handleLogin}
        className={activeTab === "login" ? "active" : ""}
      >

        <h2 className="heading">Welcome Back 👋</h2>

        <input
          type="email"
          placeholder="Email"
          required
          value={loginData.email}
          onChange={(e) =>
            setLoginData({ ...loginData, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          required
          value={loginData.password}
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
        />

        <button className="loginbtn" type="submit">
          Login
        </button>

        {/* Google Login Button */}
        <div className="divider">
          <span>OR</span>
        </div>

        <div className="google-login">
          <GoogleLogin
            onSuccess={handleGoogleLogin}
            onError={() => {
              setMsgType("error");
              setMessage("Google login failed");
            }}
          />
        </div>

      </form>

      {/* SIGNUP FORM */}
      <form
        onSubmit={handleSignup}
        className={activeTab === "signup" ? "active" : ""}
      >

        <h2 className="heading">Create Account ✨</h2>

        <input
          type="text"
          placeholder="Full Name"
          required
          value={signupData.name}
          onChange={(e) =>
            setSignupData({ ...signupData, name: e.target.value })
          }
        />

        <input
          type="email"
          placeholder="Email"
          required
          value={signupData.email}
          onChange={(e) =>
            setSignupData({ ...signupData, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password (min 6)"
          required
          minLength="6"
          value={signupData.password}
          onChange={(e) =>
            setSignupData({ ...signupData, password: e.target.value })
          }
        />

        <button className="loginbtn" type="submit">
          Signup
        </button>

        {/* Google Signup */}
        <div className="divider">
          <span>OR</span>
        </div>

        <div className="google-login">
          <GoogleLogin
            onSuccess={handleGoogleLogin}
            onError={() => {
              setMsgType("error");
              setMessage("Google signup failed");
            }}
          />
        </div>

      </form>

      {message && (
        <div className={`msg ${msgType}`}>
          {message}
        </div>
      )}
    </div>

    
  );
}

export default Login;
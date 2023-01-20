import { Routes, Route, Navigate } from "react-router-dom";

import { Container } from "react-bootstrap";
import Dashboard from "./Dashboard";
import Singup from "./Singup";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";

import { useAuth } from "../contexts/AuthContext";

const App = () => {
  const { currentUser } = useAuth();

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Routes>
          <Route
            path="/"
            element={currentUser ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/signup"
            element={!currentUser ? <Singup /> : <Navigate to="/" />}
          />
          <Route
            path="/login"
            element={!currentUser ? <Login /> : <Navigate to="/" />}
          />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/update-profile"
            element={currentUser ? <UpdateProfile /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </Container>
  );
};

export default App;

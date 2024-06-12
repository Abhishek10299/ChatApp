import "./App.css";
import { Routes, Route,Navigate } from "react-router-dom";
import {Toaster} from "react-hot-toast"

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { useAuthContext } from "./context/AuthContext";
function App() {
  const {authUser}= useAuthContext()
  return (
    <div className="p-4 h-screen flex item-center justify-center">
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to={"/Login"} />}
        />
        <Route
          path="/Login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/SignUp"
          element={authUser ? <Navigate to="/" /> : <SignUp />}
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;

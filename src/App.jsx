import { BrowserRouter, Routes, Route } from "react-router-dom";

import { UserStorage } from "./context/UserContext";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import User from "./components/User";
import Photo from "./components/Photo/Photo";
import UserProfile from "./components/User/UserProfile";
import NotFound from "./components/NotFound";

import ProtectedRoute from "./helpers/ProtectedRoute";

import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route
              path="account/*"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            />

            <Route path="photo/:id" element={<Photo />} />
            <Route path="profile/:user" element={<UserProfile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          {/* <Footer /> */}
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;

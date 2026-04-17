import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import FriendDetails from "./pages/FriendDetails";
import Timeline from "./pages/Timeline";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Stats from "./pages/Stats";


function App() {
  const [timeline, setTimeline] = useState([]);
  return (
    <BrowserRouter>
      <Navbar/>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/friend/:id" element={<FriendDetails  setTimeline={setTimeline} />} />
        <Route path="/timeline" element={<Timeline timeline={timeline} />} />
        <Route path="/stats" element={<Stats timeline={timeline} />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    

  );
}

export default App;
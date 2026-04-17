import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
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
        <Route
         path="*"
         element={
         <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">

         {/* 404 Number */}
         <h1 className="text-7xl md:text-8xl font-bold text-green-900 mb-4">
          404
         </h1>

         {/* Title */}
         <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
          Page Not Found
         </h2>

         {/* Description */}
         <p className="text-gray-500 max-w-md mb-6">
          Looks like this friendship link is broken. The page you're looking for
          doesn't exist or has been moved.
         </p>

         {/* Button */}
         <Link  to="/" className="bg-green-900 text-white px-6 py-3 rounded-md flex items-center gap-2 hover:bg-green-800 transition">
           Back to Home
         </Link>

         </div>
         }
         />
      </Routes>
      <Footer/>
    </BrowserRouter>
    

  );
}

export default App;
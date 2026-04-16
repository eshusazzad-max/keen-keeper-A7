import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import FriendDetails from "./pages/FriendDetails";


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/friend/:id" element={<FriendDetails/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    

  );
}

export default App;
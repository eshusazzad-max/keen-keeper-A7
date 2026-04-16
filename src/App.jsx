import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Navbar from "./components/navbar";


function App() {
  
  return(
    <>
    <BrowserRouter>
    <Navbar/>
    <h1>hello world</h1>
     <div className="bg-green-500 text-white p-10 text-3xl">
  Tailwind Test
</div>
    
    </BrowserRouter>

    
    </>
  );
}

export default App;
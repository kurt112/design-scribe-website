import {useState} from 'react'
import NavBar from "./navbar/index.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AboutUs from "./about-us/index.jsx";
import Members from "./members/index.jsx";
import Projects from "./project/index.jsx";
import Clients from "./clients/index.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="min-h-screen bg-gray-50">
            <NavBar/>
            <Routes>
                <Route path="/" element={<AboutUs/>}/>
                <Route path="/members" element={<Members/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/clients" element={<Clients/>}/>
            </Routes>

        </div>
    )
}

export default App

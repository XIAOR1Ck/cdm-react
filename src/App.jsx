import { Link, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";

function App() {
    return(
        <div>
    <nav className="bg-slate-900 text-white px-2 flex items-center justify-between h-15 lg:text-xl">
         <div className="flex gap-3">   
                <span><Link to="/" className="hover:text-yellow-500">Home</Link></span>
                <span><Link to="/schedule" className="hover:text-yellow-500">Schedule</Link></span>
                <span><Link to="" className="hover:text-yellow-500">PlayerRank</Link></span>
                <span><Link to="" className="hover:text-yellow-500">TeamRank</Link></span>
         </div>   
            <div>
                <span><a to="" className="hover:text-yellow-500">Search</a> </span>
             </div>
        </nav>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schedule" element={<Schedule />} />
        </Routes>
        </div>
        );
}

export default App

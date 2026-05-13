import { Link, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import Player from "./pages/Player";

function App() {
    return(
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
    <nav className="bg-zinc-700 text-white px-2 flex items-center justify-between h-15 lg:text-xl shrink-0">
         <div className="flex gap-3">   
                <span><Link to="/" className="hover:text-yellow-500">Home</Link></span>
                <span><Link to="/schedule" className="hover:text-yellow-500">Schedule</Link></span>
                <span><Link to="/player" className="hover:text-yellow-500">PlayerRank</Link></span>
         </div>   
                    </nav>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/player" element={<Player />} />
        </Routes>
        </div>
        );
}

export default App

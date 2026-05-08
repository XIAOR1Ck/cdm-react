import Nav from "./components/Nav";
import PlayerCard from "./components/PlayerCard";

function App() {
    return(
        <>
            <Nav />
            <div className="p-5 w-screen flex align-center rounded">
                <PlayerCard />
            </div>
        </>
    );
}

export default App

import Nav from "./components/Nav";
import PlayerCard from "./components/PlayerCard";

function App() {
    return(
        <>
            <Nav />
            <div className="p-5 w-screen flex justify-center rounded">
                <PlayerCard />
            </div>
        </>
    );
}

export default App

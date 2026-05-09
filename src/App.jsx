import Nav from "./components/Nav";
import PlayerCard from "./components/PlayerCard";
import ScheduleCard from "./components/ScheduleCard";

function App() {
    return(
        <>
            <Nav />
            <div className="p-5 w-screen flex flex-col justify-center rounded">
                <PlayerCard />
                <ScheduleCard />
            </div>
        </>
    );
}

export default App

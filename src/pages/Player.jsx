import { useState, useEffect } from "react";
async function getPlayerData(seasonId, gameMode){

    const url = "https://cdm-worker.sureshach-off.workers.dev/web/codm/getPlayerRanking";
    try {
       const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                seasonid: seasonId,
                game_mode: gameMode,
            })
        });
        if (!response.ok) throw new Error(response.statusText)
        const data = await response.json();
        return data.data.rank;
    } catch (err) {
       console.error(err.message); 
    }
}

function CreateTable({ data, gameMode }) {
    const toMinSec =(time) => {
        const mins = Math.floor(time /60);
        const secs = Math.floor(time % 60);
        return `${mins}'${secs}"`;
    }
    
    if (gameMode === "FULL") {
        return (
            <table className="table-auto w-full text-center text-2xl ">
                <thead className="bg-zinc-900  sticky top-0">
                    <tr>
                        <th className="p-2 border-3">Rank</th>
                        <th className="p-2 border-3">Player</th>
                        <th className="p-2 border-3">Rating</th>
                        <th className="p-2 border-3">MVP</th>
                        <th className="p-2 border-3">K/D</th>
                        <th className="p-2 border-3">Kills</th>
                        <th className="p-2 border-3">Deaths</th>
                        <th className="p-2 border-3">Max Kills</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((player, playerIndex) => {
                        console.log("Rendering player:", player); // Debug each player
                        return (
                            <tr key={playerIndex}>
                                <td className="p-2 border-2" >{playerIndex + 1}</td>
                                <td className="p-2 border flex justify-start items-center">
                                    {<img src={player.player_logo} alt={player.player_name || "player"} className="inline w-18 h-18 rounded-full" />}
                                    <span>{player.player_name || "Unknown"}</span>
                                </td>
                                <td className="border-2" >{player.rating || "N/A"}</td>
                                <td className="border-2" >{player.mvp || "N/A"}</td>
                                <td className="border-2" >{player.kd || "N/A"}</td>
                                <td className="border-2" >{player.k || "N/A"}</td>
                                <td className="border-2" >{player.d || "N/A"}</td>
                                <td className="border-2" >{player.max_k || "N/A"}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    } else if(gameMode == "Hotspot" || gameMode == "Control"){
        return (
            <table className="table-auto w-full text-center text-2xl">
                <thead className="bg-zinc-900  sticky top-0">
                    <tr>
                        <th className="p-2 border-3">Rank</th>
                        <th className="p-2 border-3">Player</th>
                        <th className="p-2 border-3">Rating</th>
                        <th className="p-2 border-3">MVP</th>
                        <th className="p-2 border-3">K/D</th>
                        <th className="p-2 border-3">Avg Operator Kills</th>
                        <th className="p-2 border-3">Avg Hill Time</th>
                        <th className="p-2 border-3">Max Kills</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((player, playerIndex) => {
                        console.log("Rendering player:", player); // Debug each player
                        return (
                            <tr key={playerIndex}>
                                <td className="p-2 border-2" >{playerIndex + 1}</td>
                                <td className="p-2 border flex justify-start items-center">
                                    {<img src={player.player_logo} alt={player.player_name || "player"} className="inline w-18 h-18 rounded-full" />}
                                    <span>{player.player_name || "Unknown"}</span>
                                </td>
                                <td className="border-2" >{player.rating || "N/A"}</td>
                                <td className="border-2" >{player.mvp || "N/A"}</td>
                                <td className="border-2" >{player.kd || "N/A"}</td>
                                <td className="border-2" >{player.times_ult_kill != null
    ? Number(player.times_ult_kill).toFixed(2)
    : "N/A"}</td>
                                <td className="border-2" >{player.hp_time != null
    ? toMinSec(player.hp_time)
    : "N/A"}</td>
                                <td className="border-2" >{player.max_k || "N/A"}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );

        } else if(gameMode == "Blast"){

        return (
            <table className="table-auto w-full text-center text-2xl">
                <thead className="bg-zinc-900  sticky top-0">
                    <tr>
                        <th className="p-2 border-3">Rank</th>
                        <th className="p-2 border-3">Player</th>
                        <th className="p-2 border-3">Rating</th>
                        <th className="p-2 border-3">MVP</th>
                        <th className="p-2 border-3">K/D</th>
                        <th className="p-2 border-3">First Blood</th>
                        <th className="p-2 border-3">First Blood Rate</th>
                        <th className="p-2 border-3">Max Kills</th>
                        <th className="p-2 border-3">Ace</th>

                    </tr>
                </thead>
                <tbody>
                    {data.map((player, playerIndex) => {
                        console.log("Rendering player:", player); // Debug each player
                        return (
                            <tr key={playerIndex}>
                                <td className="p-2 border-2" >{playerIndex + 1}</td>
                                <td className="p-2 border flex justify-start items-center">
                                    {<img src={player.player_logo} alt={player.player_name || "player"} className="inline w-18 h-18 rounded-full" />}
                                    <span>{player.player_name || "Unknown"}</span>
                                </td>
                                <td className="border-2" >{player.rating || "N/A"}</td>
                                <td className="border-2" >{player.mvp || "N/A"}</td>
                                <td className="border-2" >{player.kd || "N/A"}</td>
                                <td className="border-2" >{player.first_blood || "N/A"}</td>
                                <td className="border-2" >{player.first_blood_rate != null
    ? Number(player.first_blood_rate).toFixed(2)
    : "N/A"}</td>
                                <td className="border-2" >{player.max_k || "N/A"}</td>
                                <td className="border-2" >{player.times5accu_kill || "N/A"}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }


    }

function Player() {
    const [gameMode, setGameMode] = useState("FULL");
    const [seasonId,setSeason] = useState("CODML2026S1");
    const [playerData, setData] = useState([]);
    const [loading, setLoading] = useState(null); 



    useEffect(
        () => {
           async function fetchData() {
        setLoading(true);
        try {
            const data = await getPlayerData(seasonId, gameMode);
            setData(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    }
    
    fetchData();        },[gameMode, seasonId]
    );
    if(loading) {
        return (
            <div className="text-3xl flex flex-col text-center justify-center items-center h-dvh text-mauve-200">Loading...</div>
        );
    }
  return (
        <div className="w-full h-full flex-col overflow-hidden">
  <form className="max-w-full mx-auto p-4 flex items-center gap-4 bg-zinc-900/90 border border-zinc-700 shadow-xl backdrop-blur-sm shrink-0">
    
    {/* Season Select */}
    <select
      name="seasonId"
      id="seasonId"
      className="w-52 px-4 py-4 rounded-xl bg-zinc-800 text-white border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-200"
      onChange={e => setSeason(e.target.value)}
    >
      <option value="CODML2026S1">CDM S11</option>
      <option value="CODML2025S2">CDM S10</option>
      <option value="CODML2025S1">CDM S9</option>
      <option value="CODML2024S2">CDM S8</option>
    </select>

    {/* Radio Options */}
    <ul className="flex justify-between items-center w-full gap-3">
      
      {/* Full */}
      <li className="flex-1">
        <label
          htmlFor="game-mode-full"
          className="flex items-center justify-center gap-3 px-5 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-800 border border-zinc-600 text-zinc-200 font-semibold md:text-lg cursor-pointer transition-all duration-200 shadow-md"
        >
          <input
            type="radio"
            id="game-mode-full"
            name="game-mode-radio"
            className="accent-emerald-500 w-4 h-3"
            value="FULL"
            checked={gameMode === "FULL"}
            onChange={e => setGameMode(e.target.value)}
          />
          Full
        </label>
      </li>

      {/* Hardpoint */}
      <li className="flex-1">
        <label
          htmlFor="game-mode-hp"
          className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-600 text-zinc-200 font-semibold md:text-lg cursor-pointer transition-all duration-200"
        >
          <input
            type="radio"
            id="game-mode-hp"
            name="game-mode-radio"
            className="accent-emerald-500 w-4 h-3"
            value="Hotspot"
            onChange={e => setGameMode(e.target.value)}
            checked={gameMode === "Hotspot"}
          />
          Hardpoint
        </label>
      </li>

      {/* S&D */}
      <li className="flex-1">
        <label
          htmlFor="game-mode-snd"
          className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-600 text-zinc-200  font-semibold md:text-lg cursor-pointer transition-all duration-200"
        >
          <input
            type="radio"
            id="game-mode-snd"
            name="game-mode-radio"
            className="accent-emerald-500 w-4 h-3"
            value="Blast"
            checked={gameMode === "Blast"}
            onChange={e => setGameMode(e.target.value)}
          />
          Search &amp; Destroy
        </label>
      </li>

      {/* Control */}
      <li className="flex-1">
        <label
          htmlFor="game-mode-ctl"
          className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-600 text-zinc-200  font-semibold md:text-lg cursor-pointer transition-all duration-200"
        >
          <input
            type="radio"
            id="game-mode-ctl"
            name="game-mode-radio"
            className="accent-emerald-500 w-4 h-3"
            value="Control"
            checked={gameMode === "Control"}
            onChange={e => setGameMode(e.target.value)}
          />
          Control
        </label>
      </li>
    </ul>
  </form>
        <div className="bg-zinc-700 text-zinc-400 flex-1 overflow-auto min-h-0">
            <CreateTable data={playerData} gameMode={gameMode} />
        </div>
    </div>
  );
}

export default Player


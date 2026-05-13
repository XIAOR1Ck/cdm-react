import ScheduleCard from "../components/ScheduleCard";
import { useState } from "react";


function Schedule(){
    const [seasonId, updateSeason] = useState("CODML2026S1");
    const handleChange = event => {
        updateSeason(event.target.value);
    }
    return (
        <>
            <form className="max-w-sm mx-auto" onChange={handleChange}>
                <label htmlFor="season" className="block mb-2.5 text-2xl font-bold text-blue-400 text-heading">Choose the Season</label>
                <select name="season" id="season" className="block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-rose-300 border-md text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body bg-indigo-950 text-mauve-300">
                    <option value="CODML2026S1" selected> CDM S11</option>
                    <option value="CODML2025S2">CDM S10</option>
                    <option value="CODML2025S1">CDM S9</option>
                    <option value="CODML2024S2">CDM S8</option>
                </select>
            </form>
            <ScheduleCard seasonId={seasonId}/> </>
    );
}

export default Schedule

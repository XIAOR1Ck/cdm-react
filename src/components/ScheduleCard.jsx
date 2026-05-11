import { useEffect, useState } from "react";
import ScheduleHelper from "../ScheduleHelper";

function DailyCard({ data }) {
    if (!data) return null;
    
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-dvw font-sm">
            {data.map((day, dayIndex) => (
                <div key={dayIndex} className="flex flex-col bg-mauve-900 text-mauve-200 m-3 justify justify-center items-center text-center rounded-xl">
                    <div className="text-xl text-yellow-500 font-semibold" >Day {data.length - dayIndex}</div>
                    <div className="text-xl" >{day[0].match_date.split(' ')[0]}</div>
                    {day.map((match, matchIndex) => (
                        <div key={matchIndex} className="flex justify-center items-center text-center bg-indigo-300 m-2 w-[90%] rounded-full text-slate-950">
                            <div className="w-[25%]">{match.hname}</div>
                            <div className="w-[20%] flex justify-center"><img src={match.hlogo} alt="logo" className="h-[50px] rounded-full" /></div>
                            <div className="w-[5%]">{match.host_score}</div>
                            <div className="w-[5%]">{match.guest_score}</div>
                            <div className="w-[20%] flex justify-center"><img src={match.glogo} alt="logo" className="h-[50px] rounded-full" /></div>
                            <div className="w-[25%]">{match.gname}</div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

function ScheduleCard(props) {
    const [apiData, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    
    async function getData(seasonId) {
        setLoading(true);
        const data = await ScheduleHelper(seasonId);
        setData(data);
        console.log(data);
        setLoading(false);
    }

    useEffect(() => {
        getData(props.seasonId);
    }, [props.seasonId]);

    if(loading == true) return <div className="text-3xl flex flex-col text-center justify-center items-center h-dvh text-mauve-200">Loading...</div>
    return (
        <>
            <DailyCard data={apiData} />
        </>
    );
}
export default ScheduleCard


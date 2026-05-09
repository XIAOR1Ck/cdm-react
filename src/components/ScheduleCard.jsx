import { useEffect, useState } from "react";

import ScheduleHelper from "../ScheduleHelper";

function ScheduleCard(){
    const [apiData, setData] = useState(null);
    let seasonId = "CODML2026S1";
    async function getData() {
        const data = await ScheduleHelper(seasonId);
        setData(data);
        console.log(data);
    }

    useEffect(() => {
        getData();
    });

return <pre>HELLO!!</pre>
    }

export default ScheduleCard


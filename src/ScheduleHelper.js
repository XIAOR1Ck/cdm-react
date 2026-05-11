// Fetch Schedule Data from the API
async function fetchData(apiLink){
    try {
        const response = await fetch(apiLink);
        if(!response.ok) new Error(response.statusText);
        const json = await response.json();
        return json;
    } catch (err) {
       console.error(err.message); 
    }

}

//Main component to Export
async function ScheduleHelper(seasonId) {
    const apiLink = `https://cdm-worker.sureshach-off.workers.dev/web/codm/getCodmSSchedule?seasonid=${seasonId}`;
    const responseJson =  await fetchData(apiLink);

    const { schedule } = responseJson;
    // Convert the Schedule Data for better use
    const matches = schedule.map(match => {
      const regex = /(.*)M(\d+)W(\d+)D(\d+)/;
      const [, season, week, day, matchNo] =
        match.scheduleid.match(regex);

      return {
        ...match,
        season,
        week: Number(week),
        day: Number(day),
        matchNo: Number(matchNo),
      };
    });


    //Group matches by Day and Week
 /*  const groupedDays = Object.values(
  matches.reduce((acc, match) => {
    if (!acc[match.day]) {
      acc[match.day] = {
        day: match.day,
        matches: [],
      };
    }

    acc[match.day].matches.push(match);

    return acc;
  }, {})
);
    */
    
   const groupedDays = matches.reduce((acc, match) => {
    const lastGroup = acc[acc.length - 1];

    if (!lastGroup || lastGroup[0].day !== match.day) {
        acc.push([match]);
    } else {
        lastGroup.push(match);
    }

    return acc;
}, []);
return groupedDays;
}


export default ScheduleHelper

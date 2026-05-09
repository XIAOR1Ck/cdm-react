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
  const grouped = matches.reduce((acc, match) => {
  const weekKey = `Week ${match.week}`;
  const dayKey = `Day ${match.day}`;

  if (!acc[weekKey]) {
    acc[weekKey] = {};
  }

  if (!acc[weekKey][dayKey]) {
    acc[weekKey][dayKey] = [];
  }

  acc[weekKey][dayKey].push(match);

  return acc;
}, {});

return grouped;
}


export default ScheduleHelper

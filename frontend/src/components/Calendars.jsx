/* eslint-disable */
import AgendaCalender from "react-agenda-calendar";
import "react-agenda-calendar/dist/index.css";

function Calendars() {
  const agenda = [
    {
      title: "Eliminating the threats : 08h00 - 10h00",
      startDate: { day: 11, month: 8, year: 2023 },
    },
    {
      title: "Virology explained :10h00 - 12h00 ",
      startDate: { day: 11, month: 8, year: 2023 },
    },
    {
      title: "Eliminating the threats : 14h00 - 16h00 ",
      startDate: { day: 11, month: 8, year: 2023 },
    },
    {
      title: "Repairs & upgrades mastery : 16h00 - 18h00",
      startDate: { day: 11, month: 8, year: 2023 },
    },
  ];

  return (
    <div className="text-7xl">
      <AgendaCalender
        containerStyle={{
          height: "calc(100% - 51x)",
        }}
        agenda={agenda}
        currentDate={new Date(2023, 8, 11)}
      />
    </div>
  );
}

export default Calendars;

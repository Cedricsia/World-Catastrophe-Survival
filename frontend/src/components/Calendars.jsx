/* eslint-disable */
import { useEffect, useState } from "react";
import axios from "axios";
import AgendaCalender from "react-agenda-calendar";
import "react-agenda-calendar/dist/index.css";
import formatCalendarDate from "../services/formatCalendarDate";

function Calendars() {
  const [agenda, setAgenda] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/booked_trainings/user/1`)
      .then((res) =>
        setAgenda(res.data.map((date) => formatCalendarDate(date)))
      )
      .catch((err) => console.error(err));
  }, []);

  const schedule = [
    {
      title: "Eliminating the threats : 08h00 - 10h00",
      startDate: { day: 11, month: 8, year: 2023 },
      endDate: { day: 12, month: 8, year: 2023 },
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
    <div>
      {agenda && (
        <AgendaCalender
          containerStyle={{
            height: "calc(100% - 40px)",
          }}
          agenda={schedule}
          currentDate={new Date(2023, 8, 11)}
        />
      )}
    </div>
  );
}

export default Calendars;

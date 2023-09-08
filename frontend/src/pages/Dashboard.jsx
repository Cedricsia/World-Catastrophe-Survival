/* eslint-disable import/no-unresolved */
import { useEffect, useState } from "react";
import axios from "axios";
import formatTime from "../services/formatTime";
import Calendars from "../components/Calendars";

function Dashboard() {
  const [bookedTrainings, setBookedTrainings] = useState(null);
  const [events, setEvents] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/booked_trainings/user/1`)
      .then((res) => setBookedTrainings(res.data))
      .catch((err) => console.error(err));

    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/events`)
      .then((res) => setEvents(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex flex-col items-center mt-20 mb-5 lg:mt-0">
      <div className="hidden lg:block">
        <Calendars />
      </div>
      <div className="w-full h-14 bg-primary flex justify-center items-center lg:hidden">
        <h1 className="text-3xl font-bold text-secondary">Dashboard</h1>
      </div>
      <div className="mt-5 lg:mt-0 w-full flex flex-col gap-5 items-center lg:items-start lg:flex-row lg:justify-around">
        <div className="w-11/12 lg:w-2/4 flex flex-col items-center">
          <div className="w-full bg-secondary text-primary text-center lg:text-xl font-semibold py-2 px-4 rounded-t-lg">
            My Trainings
          </div>

          <div className="w-full flex flex-col gap-3 items-center pb-3 rounded-b-lg border-x-2 border-b-2 border-secondary pt-3">
            {bookedTrainings &&
              bookedTrainings.map((training) => (
                <div className="w-11/12">
                  <div className="bg-primary text-secondary text-center lg:text-xl font-semibold py-2 px-4 rounded-t-lg">
                    {training.title}
                  </div>
                  <div className="p-2 border-x-2 border-b-2 border-primary rounded-b-lg">
                    <p className="font-bold text-xl">
                      {`${formatTime(training.start_time).date} | ${
                        formatTime(training.start_time).time
                      } - ${formatTime(training.end_time).time} :`}
                    </p>
                    <div className="flex items-center my-1">
                      <img
                        src={`${
                          import.meta.env.VITE_BACKEND_URL
                        }/images/profiles/${training.profilepicture}`}
                        alt="teacher"
                        className="w-16 mr-3"
                      />
                      <p>{training.description}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="w-11/12 lg:w-1/3 flex flex-col items-center">
          <div className="w-full bg-secondary text-primary text-center lg:text-xl font-semibold py-2 px-4 rounded-t-lg">
            Incoming Events
          </div>

          <div className="w-full flex flex-col gap-3 items-center pb-3 rounded-b-lg border-x-2 border-b-2 border-secondary pt-3">
            {events &&
              events.map((event) => (
                <div className="w-11/12">
                  <div className="bg-primary text-secondary text-center lg:text-xl font-semibold py-2 px-4 rounded-lg">
                    {event.title}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

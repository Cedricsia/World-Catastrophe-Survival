import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [bookedTrainings, setBookedTrainings] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/booked_trainings/user/1`)
      .then((res) => setBookedTrainings(res.data));
  }, []);

  return (
    <div className="flex gap-3 flex-col items-center lg:items-start lg:flex-row mt-24 lg:ml-5 lg:justify-around">
      <div className="w-10/12 lg:w-1/3 flex flex-col items-center">
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
                <div className="pl-2 border-x-2 border-b-2 border-primary rounded-b-lg">
                  <p>{training.start_time}</p>
                  {training.description}
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="w-10/12 lg:w-1/3 flex flex-col items-center">
        <div className="w-full bg-secondary text-primary text-center lg:text-xl font-semibold py-2 px-4 rounded-t-lg">
          Incoming Events
        </div>

        <div className="w-full flex flex-col gap-2 items-center pb-3 rounded-b-lg border-x-2 border-b-2 border-secondary pt-3">
          Test
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

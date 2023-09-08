import { useEffect, useState } from "react";
import axios from "axios";
/* eslint-disable import/no-unresolved */
import TrainingCard from "../Components/TrainingCard";

function Trainings() {
  const [trainingList, setTrainingList] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/trainings/`)
      .then((res) => {
        setTrainingList(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="w-full">
      <div className="flex flex-col items-center">
        <div className="w-full mt-20 h-14 bg-primary flex justify-center items-center lg:hidden">
          <h1 className="text-3xl font-bold text-secondary">Trainings</h1>
        </div>
        <div className="w-full flex flex-col">
          <div className="flex flex-col gap-2 my-3">
            <h2 className="text-xl text-primary text-center">Categories:</h2>
            <div className="w-10/12 grid grid-cols-2 mx-auto gap-2 md:grid-cols-4">
              <button type="button" className="btn btn-primary text-secondary">
                Combat
              </button>
              <button type="button" className="btn btn-primary text-secondary">
                Engineering
              </button>
              <button type="button" className="btn btn-primary text-secondary">
                Exploration
              </button>
              <button type="button" className="btn btn-primary text-secondary">
                Medical
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-2">
        {trainingList.length &&
          trainingList.map((training) => (
            <div className="">
              <TrainingCard
                key={training.title}
                title={training.title}
                description={training.description}
                category={training.category}
                difficulty={training.difficulty}
                firstname={training.firstname}
                lastname={training.lastname}
                canVisual={training.can_visual}
                canAuditive={training.can_auditive}
                canMotor={training.can_motor}
                canCognitive={training.can_cognitive}
                profilepicture={training.profilepicture}
                teacherId={training.teacherId}
                trainingId={training.trainingId}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Trainings;

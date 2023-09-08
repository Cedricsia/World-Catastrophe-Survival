import { useEffect, useState } from "react";
import axios from "axios";
import TrainingCard from "../components/TrainingCard";

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
      <div className="flex  flex-col items-center gap-5">
        <div className="w-full h-14 bg-primary flex justify-center items-center lg:hidden">
          <h1 className="text-3xl font-bold text-secondary">Trainings</h1>
        </div>
        <div>
          <h2 className="text-xl text-primary text-center">Categories:</h2>
          <div className="flex gap-1">
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
        <div>
          <h2 className="text-xl text-primary text-center">
            Adapted to people with a disorder :
          </h2>
          <div className="flex gap-1">
            <button type="button" className="btn btn-primary text-secondary">
              Hearing
            </button>
            <button type="button" className="btn btn-primary text-secondary">
              Intellectual
            </button>
            <button type="button" className="btn btn-primary text-secondary">
              Physical
            </button>
            <button type="button" className="btn btn-primary text-secondary">
              Visual
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap  ">
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

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
    <>
      <div className="w-full h-14 bg-primary flex justify-center items-center lg:hidden">
        <h1 className="text-3xl font-bold text-secondary">Trainings</h1>
      </div>
      <div>
        <h2>Categories</h2>
        <button type="button">Combat</button>
        <button type="button">Engineering</button>
        <button type="button">Exploration</button>
        <button type="button">Medical</button>
      </div>
      <div>
        <h2>Adapted to people with a disorder</h2>
        <button type="button">Hearing</button>
        <button type="button">Intellectual</button>
        <button type="button">Physical</button>
        <button type="button">Visual</button>
      </div>
      {trainingList.length &&
        trainingList.map((training) => (
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
        ))}
    </>
  );
}

export default Trainings;

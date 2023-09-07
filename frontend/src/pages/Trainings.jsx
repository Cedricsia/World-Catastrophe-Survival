import { useEffect, useState } from "react";
import axios from "axios";

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
          <div>
            <p>{training.title}</p>
          </div>
        ))}
    </>
  );
}

export default Trainings;

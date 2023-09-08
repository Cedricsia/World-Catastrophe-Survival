import { useState } from "react";
import TrainingModal from "./TrainingModal";

function TrainingCard({
  title,
  description,
  category,
  difficulty,
  firstname,
  lastname,
  canVisual,
  canAuditive,
  canMotor,
  canCognitive,
  profilepicture,
  teacherId,
  trainingId,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div>
        <h3>{title}</h3>
        <div className="flex">
          <img
            src={`${
              import.meta.env.VITE_BACKEND_URL
            }/profiles/${profilepicture}`}
            alt={(firstname, lastname)}
          />
          <p>{description}</p>
        </div>
        <button type="button" onClick={openModal}>
          Book a lesson
        </button>
      </div>
      <TrainingModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={title}
        description={description}
        category={category}
        difficulty={difficulty}
        firstname={firstname}
        lastname={lastname}
        canVisual={canVisual}
        canAuditive={canAuditive}
        canMotor={canMotor}
        canCognitive={canCognitive}
        profilepicture={profilepicture}
        teacherId={teacherId}
        trainingId={trainingId}
      />
    </>
  );
}

export default TrainingCard;

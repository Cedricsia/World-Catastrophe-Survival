/* eslint-disable import/extensions */

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
    <div className=" md:w-[500px] md:h-52  md:flex md:justify-between">
      <div className="border-primary border m-2 rounded-xl ">
        <div className="bg-primary rounded-t-xl flex ">
          <h3 className="bg-primary rounded-t-xl text-xl h-10 text-secondary md:flex md:items-center md:pl-2 font bold">
            {title}
          </h3>
        </div>
        <div className="flex flex-row md:m-1 gap-4  items-center">
          <div className="md:flex ">
            <img
              src={`${
                import.meta.env.VITE_BACKEND_URL
              }/profiles/${profilepicture}`}
              alt={(firstname, lastname)}
              className="w-28 m-2 flex-grow"
            />
          </div>
          <div className="md:flex md:flex-col md:items-center md:gap-2 ">
            <p className="flex-grow">{description}</p>
            <div className="flex justify-center ">
              <button
                type="button"
                onClick={openModal}
                className="  btn btn-primary text-secondary mb-2 "
              >
                Book a lesson
              </button>
            </div>
          </div>
        </div>
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
    </div>
  );
}

export default TrainingCard;

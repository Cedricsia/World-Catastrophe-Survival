import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

export default function TrainingModal({
  isOpen,
  onClose,
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
  const [modalOpen, setModalOpen] = useState(isOpen);
  const monthArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [day, setDay] = useState(9);
  const [month, setMonth] = useState({ index: 8, mo: "September" });
  const [year, setYear] = useState(2023);
  const [availability, setAvailability] = useState(0);
  const [time, setTime] = useState(0);
  const [adaptation, setAdaptation] = useState(null);

  const modalRef = useRef(null);

  const changeAdaptation = (str) => {
    if (adaptation === str) {
      setAdaptation(null);
    } else {
      setAdaptation(str);
    }
  };

  const changeTime = (hour) => {
    setTime(hour);
  };

  const reset = () => {
    changeTime(0);
    setAvailability(0);
  };

  const nextYear = () => {
    setYear(year + 1);
    reset();
  };
  const prevYear = () => {
    setYear(year - 1);
    reset();
  };

  const nextMonth = () => {
    if (month.index === 11) {
      setMonth({ index: 0, mo: "January" });
      nextYear();
    } else {
      const ind = month.index + 1;
      setMonth({ index: ind, mo: monthArr[ind] });
    }
    reset();
  };
  const prevMonth = () => {
    if (month.index === 0) {
      setMonth({ index: 11, mo: "December" });
      prevYear();
    } else {
      const ind = month.index - 1;
      setMonth({ index: ind, mo: monthArr[ind] });
    }
    reset();
  };

  const nextDay = () => {
    let maxDay = 31;

    if (
      month.index === 3 ||
      month.index === 5 ||
      month.index === 8 ||
      month.index === 10
    ) {
      maxDay = 30;
    }
    if (month.index === 1) {
      maxDay = 28;
    }
    if (day === maxDay) {
      setDay(1);
      nextMonth();
    } else {
      setDay(day + 1);
    }
    reset();
  };

  const prevDay = () => {
    let maxDay = 31;

    if (
      month.index === 4 ||
      month.index === 6 ||
      month.index === 9 ||
      month.index === 11
    ) {
      maxDay = 30;
    }
    if (month.index === 2) {
      maxDay = 28;
    }
    if (day === 1) {
      setDay(maxDay);
      prevMonth();
    } else {
      setDay(day - 1);
    }
    reset();
  };

  const changeAvailability = () => {
    if (day % 3 === 0) {
      setAvailability(1);
    } else if (day % 2 === 0) {
      setAvailability(2);
    } else {
      setAvailability(3);
    }
  };

  /**
   * Function that sets to false the state which controls modal display.
   * If a function onClose has been passed in props, it will be expressed.
   */
  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
    setModalOpen(false);
  };

  /**
   * Allows the user to close modal by pressing escape key.
   */
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      handleCloseModal();
    }
  };

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const modalElement = modalRef.current;

    if (modalElement) {
      if (modalOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [modalOpen]);

  const postBooking = async (data) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/booked_trainings/new`,
        data
      );
    } catch (err) {
      console.error(err);
    }
  };

  const handleBooking = () => {
    let mon = (1 + month.index).toString();

    if (mon.length === 1) {
      mon = `0${1 + month.index}`;
    }
    let dae = day;
    if (day.toString().length === 1) {
      dae = `0${day}`;
    }
    let tim = time + 2;
    let timend = tim + 2;
    if (tim.toString().length === 1) {
      tim = `0${tim}`;
    }

    if (timend.toString().length === 1) {
      timend = `0${timend}`;
    }

    const start = `${year}-${mon}-${dae} ${tim}:00:00`;
    const end = `${year}-${mon}-${dae} ${timend}:00:00`;

    const bookingData = {
      startTime: start,
      endTime: end,
      subject: title,
      impairment: adaptation,
      trainingid: trainingId,
      teacherid: teacherId,
      userid: 1,
    };

    postBooking(bookingData);
  };

  return (
    <dialog
      className="h-full w-full border-4 border-primary rounded-lg subpixel-antialiased  "
      ref={modalRef}
      onKeyDown={handleKeyDown}
      role="presentation"
    >
      <div>
        <h3 className="bg-primary text-2xl text-secondary font-bold p-6 ">
          {title}
        </h3>
        <div className="flex max-w-">
          <div className="m-2 w-36  sm:w-48  md:w-56  lg:w-64 ">
            <img
              src={`${
                import.meta.env.VITE_BACKEND_URL
              }/profiles/${profilepicture}`}
              alt={(firstname, lastname)}
              className="max-w-none w-20 h-20 sm:w-28 sm:h-28 md:w-48 md:h-48 lg:w-56 lg:h-56"
            />
            <div className="ml-2 mt-1 font-semibold flex flex-wrap ">
              <span className="mr-1">Teacher: </span>
              <span className="">
                {firstname} {lastname}
              </span>
            </div>
          </div>
          <div>
            <p className=" p-4 md:p-8 text-center text-xl md:text-2xl font-semibold align-middle subpixel-antialiased">
              {description}
            </p>
            <div className="m-12 text-xl">
              <div>
                <span>Category: </span>
                <span> {category} </span>
              </div>
              <div>
                <span>Difficulty: </span>
                <span> {difficulty} </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <span>Category: </span>
            <span> {category} </span>
          </div>
          <div>
            <span>Difficulty: </span>
            <span> {difficulty} </span>
          </div>
        </div>
      </div>
      <h3>Choose a lesson adaptation: </h3>
      <div className="flex">
        {canVisual !== 0 && (
          <button
            type="button"
            onClick={() => changeAdaptation("Visual")}
            className={`m-5 p-2 bg-primary text-secondary text-lg font-bold rounded-md ${
              adaptation === "Visual"
                ? "border-secondary border-8 outline outline-2 outline-solid  outline-primary"
                : ""
            }`}
          >
            Visual disability
          </button>
        )}
        {canAuditive !== 0 && (
          <button
            type="button"
            onClick={() => changeAdaptation("Auditive")}
            className={`m-5 p-2 bg-primary text-secondary text-lg font-bold rounded-md ${
              adaptation === "Auditive"
                ? "border-secondary border-8 outline outline-2 outline-solid  outline-primary"
                : ""
            }`}
          >
            Auditive disability
          </button>
        )}
        {canMotor !== 0 && (
          <button
            type="button"
            onClick={() => changeAdaptation("Motor")}
            className={`m-5 p-2 bg-primary text-secondary text-lg font-bold rounded-md ${
              adaptation === "Motor"
                ? "border-secondary border-8 outline outline-2 outline-solid  outline-primary"
                : ""
            }`}
          >
            Motor disability
          </button>
        )}
        {canCognitive !== 0 && (
          <button
            type="button"
            onClick={() => changeAdaptation("Cognitive")}
            className={`m-5 p-2 bg-primary text-secondary text-lg font-bold rounded-md ${
              adaptation === "Cognitive"
                ? "border-secondary border-8 outline outline-2 outline-solid  outline-primary"
                : ""
            }`}
          >
            Cognitive disability
          </button>
        )}
      </div>
      <h3>Choose your lesson date</h3>
      <div className="flex">
        <div className="flex flex-col">
          <button type="button" onClick={nextMonth}>
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="25" cy="25" r="23.4375" fill="#2B529B" />
              <path
                d="M12.5 25H25M25 25H37.5M25 25V12.5M25 25V37.5"
                stroke="#E5B01E"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <p>{month.mo}</p>
          <button type="button" onClick={prevMonth}>
            {" "}
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="25" cy="25" r="23.4375" fill="#2B529B" />
              <path
                d="M12.5 25H37.5"
                stroke="#E5B01E"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col">
          <button type="button" onClick={nextDay}>
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="25" cy="25" r="23.4375" fill="#2B529B" />
              <path
                d="M12.5 25H25M25 25H37.5M25 25V12.5M25 25V37.5"
                stroke="#E5B01E"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <p>{day}</p>
          <button type="button" onClick={prevDay}>
            {" "}
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="25" cy="25" r="23.4375" fill="#2B529B" />
              <path
                d="M12.5 25H37.5"
                stroke="#E5B01E"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col">
          <button type="button" onClick={nextYear}>
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="25" cy="25" r="23.4375" fill="#2B529B" />
              <path
                d="M12.5 25H25M25 25H37.5M25 25V12.5M25 25V37.5"
                stroke="#E5B01E"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <p>{year}</p>
          <button type="button" onClick={prevYear}>
            {" "}
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="25" cy="25" r="23.4375" fill="#2B529B" />
              <path
                d="M12.5 25H37.5"
                stroke="#E5B01E"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <button type="button" onClick={changeAvailability}>
        {" "}
        Check availability that day
      </button>
      {availability !== 0 && <h3>Choose start time</h3>}
      <div>
        {availability > 0 && (
          <button
            type="button"
            className={`h-16 w-16 bg-primary text-secondary text-xl font-bold rounded-full ${
              time === 8
                ? "border-secondary border-8 outline outline-2 outline-solid  outline-primary"
                : ""
            }`}
            onClick={() => changeTime(8)}
          >
            8h
          </button>
        )}
        {availability > 0 && availability !== 3 && (
          <button
            type="button"
            className={`h-16 w-16 bg-primary text-secondary text-xl font-bold rounded-full ${
              time === 10
                ? "border-secondary border-8 outline outline-2 outline-solid  outline-primary"
                : ""
            }`}
            onClick={() => changeTime(10)}
          >
            10h
          </button>
        )}{" "}
        {availability > 0 && availability !== 2 && (
          <button
            type="button"
            className={`h-16 w-16 bg-primary text-secondary text-xl font-bold rounded-full ${
              time === 14
                ? "border-secondary border-8 outline outline-2 outline-solid  outline-primary"
                : ""
            }`}
            onClick={() => changeTime(14)}
          >
            14h
          </button>
        )}{" "}
        {availability > 0 && availability !== 1 && (
          <button
            type="button"
            className={`h-16 w-16 bg-primary text-secondary text-xl font-bold rounded-full ${
              time === 16
                ? "border-secondary border-8 outline outline-2 outline-solid  outline-primary"
                : ""
            }`}
            onClick={() => changeTime(16)}
          >
            16h
          </button>
        )}
      </div>
      <div className="flex ">
        <button type="button" onClick={handleBooking}>
          Book lesson
        </button>

        <button type="button" onClick={handleCloseModal} className="">
          Cancel
        </button>
      </div>
    </dialog>
  );
}

TrainingModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,

  onClose: PropTypes.func.isRequired,
};

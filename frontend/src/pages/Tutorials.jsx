/* eslint-disable import/no-unresolved */
import { useEffect, useState } from "react";
import axios from "axios";
import TutoCard from "../components/TutoCard";
import arrowUp from "../assets/arrow-up.svg";
import arrowDown from "../assets/arrow-down.svg";
import info from "../assets/info.svg";

function Tutorials() {
  const [visible, setVisible] = useState(true);
  const categorie = ["Combat", "Engineering", "Exploration", "Medical"];
  const difficulty = ["Easy", "Medium", "Hard"];
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [tutorials, setTutorial] = useState(null);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/tutorials`)
      .then((res) => setTutorial(res.data));
  }, []);

  const filterTutorials = () => {
    let filteredTutorials = [...tutorials];

    if (selectedCategory) {
      filteredTutorials = filteredTutorials.filter(
        (tuto) => tuto.category === selectedCategory
      );
    }

    if (selectedDifficulty) {
      filteredTutorials = filteredTutorials.filter(
        (tuto) => tuto.difficulty === selectedDifficulty
      );
    }

    return filteredTutorials;
  };

  return (
    <div className="flex flex-col w-full mt-20 md:mt-3 md:mb-5">
      <div className="bg-primary flex justify-between md:hidden">
        <h1 className="bg-primary text-secondary text-3xl p-2">Tutorials</h1>
        <button type="button" className="mr-2">
          <img src={info} alt="" className="h-10" />
        </button>
      </div>
      <div>
        <div className="flex gap-2 bg-accent p-2 md:hidden">
          <h1 className=" text-3xl text-neutral">Filters</h1>
          {visible ? (
            <button type="button" onClick={() => setVisible(false)}>
              <img src={arrowUp} alt="" className="h-8 " />
            </button>
          ) : (
            <button type="button" onClick={() => setVisible(true)}>
              <img src={arrowDown} alt="" className="h-8 " />
            </button>
          )}
        </div>
        {visible && (
          <div className="bg-accent md:bg-base-100">
            <h1 className="text-2xl font-semibold text-primary md:text-center border-t-2 border-neutral md:border-t-0 p-2 ">
              Categories:
            </h1>
            <div className="flex flex-col gap-1 md:flex-wrap md:flex-row md:gap-3 md:justify-center p-2">
              {categorie.map((cat) => (
                <div className="ml-3 md:ml-0" key={cat}>
                  <button
                    type="button"
                    className={`btn btn-primary w-36 h-10 md:flex text-secondary md:text-xl ${
                      selectedCategory === cat ? "btn-primary" : "btn-neutral"
                    }`}
                    onClick={() =>
                      setSelectedCategory(cat === selectedCategory ? null : cat)
                    }
                  >
                    {cat}
                  </button>
                </div>
              ))}
            </div>
            <h1 className="text-2xl font-semibold text-primary md:text-center border-t-2 border-neutral md:border-t-0 p-2">
              Difficulty:
            </h1>
            <div className="flex flex-col gap-1 md:flex-wrap md:flex-row md:gap-3 md:justify-center pl-5 pb-2 md:pb-5 border-b-2 border-neutral">
              {difficulty.map((elem) => (
                <div key={elem}>
                  <button
                    type="button"
                    className={`btn btn-primary w-36 h-10 md:flex text-secondary md:text-xl ${
                      selectedDifficulty === elem
                        ? "btn-primary"
                        : "btn-neutral"
                    }`}
                    onClick={() =>
                      setSelectedDifficulty(
                        elem === selectedDifficulty ? null : elem
                      )
                    }
                  >
                    {elem}
                    <img
                      // src={`../assets/${elem}.svg`}
                      alt="Difficulty icon"
                      className="text-sm"
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {tutorials && (
        <div className="flex flex-col mt-3 md:grid md:grid-cols-3 gap-1 mx-10">
          {filterTutorials().map((tuto) => (
            <div key={tuto.id}>
              <TutoCard tuto={tuto} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Tutorials;
// md:flex md:flex-wrap md:w-4/5 justify-center md:mx-auto md:mt-20

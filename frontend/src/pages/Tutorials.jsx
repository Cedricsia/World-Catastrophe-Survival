import { useState } from "react";
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
  const tutorials = [
    {
      title: "Build your own nuclear shelter",
      category: "Engineering",
      difficulty: "hard",
      content: "",
      image:
        "https://codersera.com/blog/wp-content/uploads/2021/11/Engineering-672x372.jpeg",
    },
    {
      title: "Build your own nuclear shelter",
      category: "Engineering",
      difficulty: "hard",
      content: "",
      image:
        "https://codersera.com/blog/wp-content/uploads/2021/11/Engineering-672x372.jpeg",
    },
    {
      title: "Build your own nuclear shelter",
      category: "Engineering",
      difficulty: "hard",
      content: "",
      image:
        "https://codersera.com/blog/wp-content/uploads/2021/11/Engineering-672x372.jpeg",
    },
    {
      title: "Build your own nuclear shelter",
      category: "Engineering",
      difficulty: "hard",
      content: "",
      image:
        "https://codersera.com/blog/wp-content/uploads/2021/11/Engineering-672x372.jpeg",
    },
    {
      title: "Build your own nuclear shelter",
      category: "Engineering",
      difficulty: "hard",
      content: "",
      image:
        "https://codersera.com/blog/wp-content/uploads/2021/11/Engineering-672x372.jpeg",
    },
    {
      title: "Build your own nuclear shelter",
      category: "Engineering",
      difficulty: "hard",
      content: "",
      image:
        "https://codersera.com/blog/wp-content/uploads/2021/11/Engineering-672x372.jpeg",
    },
    {
      title: "Build your own nuclear shelter",
      category: "Engineering",
      difficulty: "hard",
      content: "",
      image:
        "https://codersera.com/blog/wp-content/uploads/2021/11/Engineering-672x372.jpeg",
    },
    {
      title: "Build your own nuclear shelter",
      category: "Engineering",
      difficulty: "hard",
      content: "",
      image:
        "https://codersera.com/blog/wp-content/uploads/2021/11/Engineering-672x372.jpeg",
    },
    {
      title: "Build your own nuclear shelter",
      category: "Combat",
      difficulty: "Easy",
      content: "",
      image:
        "https://codersera.com/blog/wp-content/uploads/2021/11/Engineering-672x372.jpeg",
    },
    {
      title: "Build your own nuclear shelter",
      category: "Engineering",
      difficulty: "Medium",
      content: "",
      image:
        "https://codersera.com/blog/wp-content/uploads/2021/11/Engineering-672x372.jpeg",
    },
  ];
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
    <div className="flex flex-col w-full">
      <div className="bg-primary flex justify-between px-2 md:hidden">
        <h1 className="bg-primary text-secondary text-3xl p-2">Tutorials</h1>
        <button type="button">
          <img src={info} alt="" className="h-10" />
        </button>
      </div>
      <div className="md:mt-5  ">
        <div className="flex bg-accent p-2 md:hidden">
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
            <h1 className="text-2xl text-neutral md:text-center border-t-2 border-neutral md:border-t-0 p-2 ">
              Categories:
            </h1>
            <div className="flex flex-col  gap-1 md:flex-wrap md:flex-row md:gap-3 md:justify-center p-2">
              {categorie.map((cat) => (
                <div className="ml-3 md:ml-0">
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
            <h1 className="text-2xl text-neutral md:text-center border-t-2 border-neutral md:border-t-0 p-2">
              Difficulty:
            </h1>
            <div className="flex flex-col  gap-1 md:flex-wrap md:flex-row md:gap-3 md:justify-center ml-3 p-2">
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
                    <img src={`../assets/${elem}.svg`} alt="" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="md:flex md:flex-wrap md:justify-center">
        {filterTutorials().map((tuto) => (
          <div className="" key={tuto}>
            <TutoCard tuto={tuto} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tutorials;

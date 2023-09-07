function TutoCard({ tuto }) {
  return (
    <div className="border-black border rounded-md flex flex-col m-5">
      <div className="m-1">
        <h1 className="text-primary font-bold ml-4 mt-1 md:text-3xl">
          {tuto.title}
        </h1>
        <div className="flex flex-row ml-4 mt-1">
          <div>
            <img src={tuto.image} alt="" className=" h-16 md:h-32 m-1" />
          </div>
          <div className="flex flex-col md:text-xl justify-center md:justify-start">
            <p>Category: {tuto.category}</p>
            <p>Difficulty: {tuto.difficulty}</p>
          </div>
          <div className="flex-col flex justify-end ">
            <button
              type="button"
              className="btn btn-primary hidden md:flex text-secondary md:text-xl"
            >
              Read more
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-1">
        <button
          type="button"
          className="btn btn-primary text-secondary  md:hidden text-xs md:text-xl"
        >
          Read more
        </button>
      </div>
    </div>
  );
}

export default TutoCard;

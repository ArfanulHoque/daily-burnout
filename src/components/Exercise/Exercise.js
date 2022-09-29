import React, { useEffect, useState } from "react";
import Activities from "../Activities/Activities";
import Count from "../Count/Count";
import "./Exercise.css";

const Exercise = () => {
  const [exercises, setExercises] = useState([]);
  const [count, setCount] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setExercises(data));
  }, []);

  const handleAddToCount = (exercise) => {
    console.log(exercise);
    const newCount = [...count, exercise];
    setCount(newCount);
  };

  return (
    <div>
      <div className="exercise-container">
        <div className="exercise-formations">
          {exercises.map((exercise) => (
            <Activities
              key={exercise.id}
              exercise={exercise}
              handleAddToCount={handleAddToCount}
            ></Activities>
          ))}
        </div>
        <div className="count-container">
          <Count count={count}></Count>
        </div>
      </div>
    </div>
  );
};

export default Exercise;

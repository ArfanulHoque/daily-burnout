import React from "react";
import "./Activities.css";

const Activities = (props) => {
  const { exercise, handleAddToCount } = props;
  const { img, name, description, age, time } = exercise;

  return (
    <div className="activity-cart">
      <img src={img} alt="" />
      <div className="activity-info">
        <h3 className="activity-name">{name}</h3>
        <p>
          <small>{description}</small>
        </p>
        <p>
          <small>For Age: {age}</small>
        </p>
        <p>
          <strong>Time required: {time}s</strong>
        </p>
      </div>
      <button
        onClick={() => handleAddToCount(exercise)}
        className="btn-add-list"
      >
        <p>Add to list</p>
      </button>
    </div>
  );
};

export default Activities;

import React from "react";
import "./Count.css";
import profile from "../../images/20211007_075745.jpg";

const Count = (props) => {
  const { count } = props;

  let total = 0;
  for (const exercise of count) {
    total = total + exercise.time;
  }

  return (
    <div className="dashboard-content">
      <div className="dashboard">
        <div className="user-info">
          <div className="user">
            <img src={profile} alt="" />
            <div>
              <h4>Md. Erfan</h4>
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>
          <div className="user-details">
            <div>
              <h4>
                <b>75</b>kg
              </h4>
              <p>Weight</p>
            </div>
            <div>
              <h4>
                <b>5.7</b>
              </h4>
              <p>Height</p>
            </div>
            <div>
              <h4>
                <b>21</b>
              </h4>
              <p>Years</p>
            </div>
          </div>
        </div>
        <div className="break-div">
          <h5>Add A Break</h5>
          <div className="break">
            <p>
              <span>10</span>s
            </p>
            <p>
              <span>20</span>s
            </p>
            <p>
              <span>30</span>s
            </p>
            <p>
              <span>40</span>s
            </p>
            <p>
              <span>50</span>s
            </p>
          </div>
        </div>
        <div className="exercise-details">
          <h5>Exercise Details</h5>
          <div className="excercise-box">
            <div className="exercise-time">
              <p>Exercise time</p>
              <p>
                <span>{total}</span> seconds
              </p>
            </div>
            <div className="break-time">
              <p>Break time</p>
              <p>
                <span>0</span> seconds
              </p>
            </div>
          </div>
          <button>Activity Completed</button>
        </div>
      </div>
    </div>
  );
};

export default Count;

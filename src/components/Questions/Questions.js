import React from "react";
import "./Questions.css";

const Questions = () => {
  return (
    <div className="question-container">
      <h1>Questions and Answers</h1>
      <hr />
      <h3>1. How dose React work?</h3>
      <p>
        At its very core, React basically maintains a tree for you. This tree is
        able to do efficient diff computations on the nodes. Think of your HTML
        code as a tree. In fact, that is exactly how the browser treats your DOM
        (your rendered HTML on the browser). React allows you to effectively
        re-construct your DOM in JavaScript and push only those changes to the
        DOM which have actually occurred.
      </p>
      <h3>2. What is the difference between props and state?</h3>
      <p>
        Props are used to pass data from one component to another. The state is
        a local data storage that is local to the component only and cannot be
        passed to other components. The this. setState property is used to
        update the state values in the component.
      </p>
      <h3>3. Why we use useEffect?</h3>
      <p>
        The useEffect Hook allows you to perform side effects in your
        components. Some examples of side effects are: fetching data, directly
        updating the DOM, and timers. useEffect accepts two arguments. The
        second argument is optional.
      </p>
    </div>
  );
};

export default Questions;

import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import Count from '../Count/Count';
import './Exercise.css'

const Exercise = () => {

     const [exercises, setExercises] = useState([]);

    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setExercises(data))
    }, [])


    return (
        <div>
            <h3>Select Today's Exercise</h3>
            <div className='exercise-container'>
            <div className="exercise-formations">
             {
                 exercises.map(exercise=> <Activities
                 key={exercise.id}
                 exercise={exercise}
                 ></Activities>)
             }
            </div>
            <div className="count-container">
              <Count></Count>
            </div>
            </div>
        </div>
    );
};

export default Exercise;
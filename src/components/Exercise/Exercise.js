import React, { useEffect, useState } from 'react';
import './Exercise.css'

const Exercise = () => {

     const [exercise, setExercise] = useState([]);

    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])


    return (
        <div>
            <h3>Select Today's Exercise</h3>
            <div className='exercise-container'>
            <div className="exercise-formations">
             {
                
             }
            </div>
            <div className="count-container">
<h4>Count Area</h4>
            </div>
            </div>
        </div>
    );
};

export default Exercise;
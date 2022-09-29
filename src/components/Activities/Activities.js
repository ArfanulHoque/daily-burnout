import React from 'react';
import './Activities.css'

const Activities = (props) => {
    const {img, name,description, age, time,} = props.exercise
    return (
    <div className='activity-cart'>
            <div className='activity-info'>
           <img src={img} alt="" />
           <h3>{name}</h3>
           <p>{description}</p>
           <p><small>For Age: {age}</small></p>
           <h5>Time required: {time}</h5>
        </div>
        <button className='btn-add-list'>
            <p>Add to list</p>
        </button>
    </div>
       

    );
};

export default Activities;
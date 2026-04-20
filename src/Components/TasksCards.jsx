import React from 'react';
import './TasksCards.css';
const TasksCards = (props) => {
    return ( <> 
    <div className="task-card">
      <img className="task-card-image" src={props.img} alt={props.name} />
      <div className="task-card-content">
        <h3 className="task-card-title">{props.name}</h3>
        <p className="task-card-description">{props.description}</p>
      </div>
    </div>
    </> );
}

export default TasksCards;
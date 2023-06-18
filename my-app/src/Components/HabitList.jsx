import React, { useContext, useState } from 'react';
import Modal from 'react-modal';

const HabitList = ({ habits, onViewHabit, onEditHabit, onDeleteHabit, onArchiveHabit }) => {
  const [options, setOptions] = useState(false);

  const handleOptions = () => {
    setOptions(!options);
  }
  return (
    <div>
      {habits.length > 0 ? (
        <ul style={{border:"1px solid gray", backgroundColor:"#1d4ed8", color:"white",  borderRadius:"4px",listStyle:"none"}}>
          {habits.map((habit, index) => (
            <li key={index}>
              <b style={{fontSize:"large"}}> {habit.name} </b>
              <button onClick={handleOptions}>Options</button>
              {options && <div><button onClick={() => onViewHabit(habit)}>View</button>
              <button onClick={() => onEditHabit(habit)}>Edit</button>
              <button onClick={() => onDeleteHabit(habit)}>Delete</button>
              <button onClick={() => onArchiveHabit(habit)}>Archive</button></div>}
            </li>
          ))}
        </ul>
      ) : (
        <p>No habits found.</p>
      )}
    </div>
  );
};

export default HabitList;

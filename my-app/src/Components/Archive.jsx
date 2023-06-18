import React, { useContext } from 'react'
import { HabitContext } from '../Contexts/HabitContext';

export const Archive = () => {
    const {archivedHabits, archiveHabit} = useContext(HabitContext);
  return (
    <>
     <div>Archived habits</div>
     {archivedHabits.length > 0 ? (
        <ul style={{border:"1px solid gray", backgroundColor:"#fff", borderRadius:"4px",listStyle:"none"}}>
          {archivedHabits.map((habit, index) => (
            <li key={index}>
              <b> {habit.name} </b>,{' '}
              {/* <button onClick={() => onViewHabit(habit)}>View</button>
              <button onClick={() => onEditHabit(habit)}>Edit</button>
              <button onClick={() => onDeleteHabit(habit)}>Delete</button>
              <button onClick={() => onArchiveHabit(habit)}>Archive</button> */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No habits found.</p>
      )}
    </>
   
  )
}

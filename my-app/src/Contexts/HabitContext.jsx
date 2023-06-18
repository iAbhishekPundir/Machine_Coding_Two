import { createContext, useEffect, useState } from "react";

export const HabitContext = createContext();

export const HabitProvider = ({children}) => {
    const [archivedHabits, setArchivedHabits] = useState([]);

    const archiveHabit = (habitData) => {
        const updatedHabits = habits.filter((habit) => habit.id !== habitData.id);
        setHabits(updatedHabits);
        setArchivedHabits((prevHabits) => [...prevHabits, habitData]);
      };



  return (<>
    {
        <div>
            <HabitContext.Provider value={{archivedHabits, setArchivedHabits, archiveHabit}}>
                {children}
            </HabitContext.Provider>
        </div>
    }
 
  </>);
};

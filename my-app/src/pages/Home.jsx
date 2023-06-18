import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import HabitFormModal from '../Components/HabitFormModal';
import HabitList from '../Components/HabitList';
import { HabitContext } from '../Contexts/HabitContext';

export const Home = () => {
  const [habits, setHabits] = useState([]);
  const {archivedHabits, archiveHabit} = useContext(HabitContext);
  const [isFormModalOpen, setFormModalOpen] = useState(false);
  const [selectedHabit, setSelectedHabit] = useState(null);

  const openFormModal = () => {
    setFormModalOpen(true);
  };

  const closeFormModal = () => {
    setFormModalOpen(false);
  };

  const addHabit = (habitData) => {
    const newHabit = { ...habitData, id: uuidv4() }; 
    setHabits((prevHabits) => [...prevHabits, newHabit]);
  };

  const editHabit = (habitData) => {
    const updatedHabits = habits.map((habit) => {
      if (habit.id === habitData.id) {
        return habitData;
      }
      return habit;
    });
    setHabits(updatedHabits);
  };

  const deleteHabit = (habitData) => {
    const updatedHabits = habits.filter((habit) => habit.id !== habitData.id);
    setHabits(updatedHabits);
  };

  return (
    <div>
      <button onClick={openFormModal}>Add a new habit</button>
      <HabitFormModal
        isOpen={isFormModalOpen}
        onClose={closeFormModal}
        onAddHabit={addHabit}
        onEditHabit={editHabit}
        selectedHabit={selectedHabit}
      />
      {/* <Habit  habits={habits} /> */}
      <HabitList
        habits={habits}
        archivedHabits={archivedHabits}
        onViewHabit={setSelectedHabit}
        onEditHabit={setSelectedHabit}
        onDeleteHabit={deleteHabit}
        onArchiveHabit={archiveHabit}
      />
      {selectedHabit && (
        <div>
          <h2>Selected Habit Details</h2>
          <p>
            <strong>Name:</strong> {selectedHabit.name}
          </p>
          <p>
            <strong>Repeat:</strong> {selectedHabit.repeat}
          </p>
          <p>
            <strong>Goal:</strong> {selectedHabit.goal}
          </p>
          <p>
            <strong>Time:</strong> {selectedHabit.time}
          </p>
          <p>
            <strong>Start Date:</strong> {selectedHabit.startDate}
          </p>
        </div>
      )}
    </div>
  )
}

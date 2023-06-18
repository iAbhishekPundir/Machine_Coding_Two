import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

const HabitFormModal = ({ isOpen, onClose, onAddHabit, onEditHabit, selectedHabit }) => {
  const [habitData, setHabitData] = useState({
    name: '',
    repeat: '',
    goal: '',
    time: '',
    startDate: '',
  });

  useEffect(() => {
    if (selectedHabit) {
      setHabitData(selectedHabit);
    } else {
      setHabitData({
        name: '',
        repeat: '',
        goal: '',
        time: '',
        startDate: '',
      });
    }
  }, [selectedHabit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHabitData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedHabit) {
      onEditHabit(habitData);
    } else {
      onAddHabit({ ...habitData, id: Date.now() });
    }
    setHabitData({
      name: '',
      repeat: '',
      goal: '',
      time: '',
      startDate: '',
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <h2>{selectedHabit ? 'Edit Habit' : 'Add a New Habit'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={habitData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Repeat:
          <input
            type="text"
            name="repeat"
            value={habitData.repeat}
            onChange={handleChange}
          />
        </label>
        <label>
          Goal:
          <input
            type="text"
            name="goal"
            value={habitData.goal}
            onChange={handleChange}
          />
        </label>
        <label>
          Time:
          <input
            type="text"
            name="time"
            value={habitData.time}
            onChange={handleChange}
          />
        </label>
        <label>
          Start Date:
          <input
            type="date"
            name="startDate"
            value={habitData.startDate}
            onChange={handleChange}
          />
        </label>
        <button type="submit">{selectedHabit ? 'Save Changes' : 'Add Habit'}</button>
        <button onClick={onClose}>Cancel</button>
      </form>
    </Modal>
  );
};

export default HabitFormModal;

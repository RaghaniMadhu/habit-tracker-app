import React, { useContext, useState } from "react";
import Modal from "react-modal";
import dayjs from "dayjs";
import { HabitContext } from "../contexts/HabitContext";
import "../components/components.css";

function NewHabitCard() {
  const [isOpen, setIsOpen] = useState(false);

  const [newHabit, setNewHabit] = useState({
    name: "",
    repeat: "Daily",
    goal: "",
    time: "",
    start_date: dayjs().format("YYYY-MM-DD"),
  });

  const { addAHabit } = useContext(HabitContext);

  const saveHandler = () => {
    addAHabit(newHabit);
    setIsOpen(false);
    setNewHabit({
      name: "",
      repeat: "Daily",
      goal: "",
      time: "",
      start_date: dayjs().format("YYYY-MM-DD"),
    });
  };

  const cancelHandler = () => {
    setNewHabit({
      name: "",
      repeat: "Daily",
      goal: "",
      time: "",
      start_date: dayjs().format("YYYY-MM-DD"),
    });
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  Modal.setAppElement("body");

  return (
    <div>
      <button onClick={openModal}>+ Add A New Habit</button>
      <Modal isOpen={isOpen} style={customStyles}>
        <div className="habit-component">
          <input
            type="text"
            placeholder="Enter Habit Name"
            onChange={(event) => {
              setNewHabit({ ...newHabit, name: event.target.value });
            }}
            style={{ paddingTop: "0.1rem" }}
          />
          <div className="dropdown-main-div dropdown-main-div-1">
            <div className="dropdown-div">
              <label htmlFor="repeat">REPEAT</label>
              <select
                id="repeat"
                defaultValue={newHabit.repeat}
                onChange={(event) => {
                  setNewHabit({
                    ...newHabit,
                    repeat: event.target.value,
                  });
                }}
              >
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
              </select>
            </div>
            <div className="dropdown-div" defaultValue={newHabit.goal}>
              <label htmlFor="goal">GOAL</label>
              <select
                id="goal"
                onChange={(event) => {
                  setNewHabit({
                    ...newHabit,
                    goal: event.target.value,
                  });
                }}
              >
                <option value="1 time">1 time {newHabit.repeat}</option>
                <option value="2 times">2 times {newHabit.repeat}</option>
                <option value="3 times">3 times {newHabit.repeat}</option>
              </select>
            </div>
          </div>
          <div className="dropdown-main-div dropdown-main-div-2">
            <div className="dropdown-div" defaultValue={newHabit.time}>
              <label htmlFor="time_of_day">TIME OF DAY</label>
              <select
                id="time_of_day"
                onChange={(event) => {
                  setNewHabit({
                    ...newHabit,
                    time: event.target.value,
                  });
                }}
              >
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Evening">Evening</option>
                <option value="Night">Night</option>
              </select>
            </div>
            <div className="dropdown-div">
              <label htmlFor="start-date">START DATE</label>
              <input
                type="date"
                id="start-date"
                value={newHabit.start_date}
                onChange={(event) => {
                  setNewHabit({
                    ...newHabit,
                    start_date: event.target.value,
                  });
                }}
              ></input>
            </div>
          </div>
          <div className="save-cancel-div">
            <button
              onClick={() => {
                saveHandler();
              }}
            >
              Save
            </button>
            <button
              onClick={() => {
                cancelHandler();
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default NewHabitCard;

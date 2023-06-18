import React, { useContext, useState } from "react";
import Modal from "react-modal";
import { HabitContext } from "../contexts/HabitContext";

function HabitCard({
  habitData: { id, name, repeat, goal, time, start_date },
}) {
  const [isOpen, setIsOpen] = useState(false);

  const [modifiedHabit, setModifiedHabit] = useState({
    id,
    name,
    repeat,
    goal,
    time,
    start_date,
  });

  const { editAHabit } = useContext(HabitContext);

  const saveHandler = () => {
    editAHabit({ ...modifiedHabit });
    setIsOpen(false);
  };

  const cancelHandler = () => {
    setModifiedHabit({ id, name, repeat, goal, time, start_date });
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
      <h3 onClick={openModal}>{name}</h3>
      <Modal isOpen={isOpen} style={customStyles} contentLabel="Example Modal">
        <div>
          <h2>{modifiedHabit.name}</h2>
          <div>
            <div className="dropdown-div">
              <label htmlFor="repeat">REPEAT</label>
              <select
                id="repeat"
                defaultValue={modifiedHabit.repeat}
                onChange={(event) => {
                  setModifiedHabit({
                    ...modifiedHabit,
                    repeat: event.target.value,
                  });
                }}
              >
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
              </select>
            </div>
            <div className="dropdown-div" defaultValue={modifiedHabit.goal}>
              <label htmlFor="goal">GOAL</label>
              <select
                id="goal"
                onChange={(event) => {
                  setModifiedHabit({
                    ...modifiedHabit,
                    goal: event.target.value,
                  });
                }}
              >
                <option value="1 time">1 time {modifiedHabit.repeat}</option>
                <option value="2 times">2 times {modifiedHabit.repeat}</option>
                <option value="3 times">3 times {modifiedHabit.repeat}</option>
              </select>
            </div>
          </div>
          <div>
            <div className="dropdown-div" defaultValue={modifiedHabit.time}>
              <label htmlFor="time_of_day">TIME OF DAY</label>
              <select
                id="time_of_day"
                onChange={(event) => {
                  setModifiedHabit({
                    ...modifiedHabit,
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
                value={modifiedHabit.start_date}
                onChange={(event) => {
                  setModifiedHabit({
                    ...modifiedHabit,
                    start_date: event.target.value,
                  });
                }}
              ></input>
            </div>
          </div>

          <div>
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

export default HabitCard;

import React, { useContext } from "react";
import HabitCard from "../components/HabitCard";
import { HabitContext } from "../contexts/HabitContext";

function DeletedHabits() {
  const { habits, setDefaultStateOfHabit } = useContext(HabitContext);

  const defaultHabits = habits.filter(({ state }) => state === "deleted");

  return (
    <div>
      <div>
        {defaultHabits.map((eachHabit) => (
          <div className="home-page-div" key={eachHabit.id}>
            <HabitCard key={eachHabit.id} habitData={eachHabit} />
            <button
              onClick={() => {
                setDefaultStateOfHabit(eachHabit.id);
              }}
            >
              Restore
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DeletedHabits;

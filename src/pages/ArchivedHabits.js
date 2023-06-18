import React, { useContext } from "react";
import HabitCard from "../components/HabitCard";
import { HabitContext } from "../contexts/HabitContext";

function ArchivedHabits() {
  const { habits, setDefaultStateOfHabit } = useContext(HabitContext);

  const defaultHabits = habits.filter(({ state }) => state === "archived");

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
              Unarchive
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArchivedHabits;

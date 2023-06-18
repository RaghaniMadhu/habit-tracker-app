import React, { useContext } from "react";
import HabitCard from "../components/HabitCard";
import { HabitContext } from "../contexts/HabitContext";

function ArchivedHabits() {
  const { habits } = useContext(HabitContext);

  const defaultHabits = habits.filter(({ state }) => state === "archived");

  return (
    <div>
      <div>
        {defaultHabits.map((eachHabit) => (
          <HabitCard key={eachHabit.id} habitData={eachHabit} />
        ))}
      </div>
    </div>
  );
}

export default ArchivedHabits;

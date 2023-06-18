import { createContext, useState } from "react";
import { habits_data } from "../db/habitsDb";

export const HabitContext = createContext();

function HabitContextProvider({ children }) {
  const [habits, setHabits] = useState(habits_data);

  const editAHabit = (modifiedHabit) => {
    setHabits(
      habits.map((eachHabit) =>
        eachHabit.id === modifiedHabit.id
          ? { ...modifiedHabit, state: eachHabit.state }
          : eachHabit
      )
    );
  };

  const deleteAHabit = (id) => {
    setHabits(
      habits.map((eachHabit) =>
        eachHabit.id === id ? { ...eachHabit, state: "deleted" } : eachHabit
      )
    );
  };

  const archiveAHabit = (id) => {
    setHabits(
      habits.map((eachHabit) =>
        eachHabit.id === id ? { ...eachHabit, state: "archived" } : eachHabit
      )
    );
  };

  return (
    <HabitContext.Provider
      value={{ habits, editAHabit, deleteAHabit, archiveAHabit }}
    >
      {children}
    </HabitContext.Provider>
  );
}

export default HabitContextProvider;

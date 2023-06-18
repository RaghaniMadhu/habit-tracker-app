import React, { useContext } from "react";
import HabitCard from "../components/HabitCard";
import { HabitContext } from "../contexts/HabitContext";

function Home() {
  const { habits, deleteAHabit, archiveAHabit } = useContext(HabitContext);

  const defaultHabits = habits.filter(({ state }) => state === "default");

  return (
    <div>
      <div>
        {defaultHabits.map((eachHabit) => (
          <div className="home-page-div" key={eachHabit.id}>
            <HabitCard key={eachHabit.id} habitData={eachHabit} />
            <button
              onClick={() => {
                archiveAHabit(eachHabit.id);
              }}
            >
              Archive
            </button>
            <button
              onClick={() => {
                deleteAHabit(eachHabit.id);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

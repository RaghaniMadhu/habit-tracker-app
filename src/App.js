import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import ArchivedHabits from "./pages/ArchivedHabits";
import DeletedHabits from "./pages/DeletedHabits";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<ArchivedHabits />} />
        <Route path="/deleted" element={<DeletedHabits />} />
      </Routes>
    </div>
  );
}

export default App;

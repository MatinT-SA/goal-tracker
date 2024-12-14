import { useState } from "react";
import { Header } from "../components/Header/Header";
import { GoalList } from "./Goal/GoalList";
import { GoalForm } from "./Goal/GoalForm";

export const initialGoals = [
  {
    id: 1,
    goalName: "Complete React project",
    checked: false,
    priority: "high",
    dueDate: "2024-12-31T22:00",
    notes: "Focus on state management",
    addedDate: "2024-12-04T14:00",
  },
  {
    id: 2,
    goalName: "Go for a walk",
    checked: true,
    priority: "medium",
    dueDate: null,
    notes: null,
    addedDate: "2024-12-04T08:00",
  },
  {
    id: 3,
    goalName: "Music",
    checked: false,
    priority: "low",
    dueDate: null,
    notes: "Listening to Eminem",
    addedDate: "2024-12-06T10:00",
  },
];

export default function App() {
  const [goals, setGoals] = useState(initialGoals);
  const [filteredGoals, setFilteredGoals] = useState([]);

  function handleAddGoal(goal) {
    setGoals((goals) => [...goals, goal]);
  }

  function handleCheck(id) {
    setGoals((prevGoals) =>
      prevGoals.map((goal) =>
        goal.id === id ? { ...goal, checked: !goal.checked } : goal
      )
    );
  }

  function handleSearch(query) {
    const filtered = goals.filter((goal) =>
      goal.goalName.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredGoals(filtered);
  }

  return (
    <>
      <Header goals={goals} onSearch={handleSearch} />
      <div className="app">
        <GoalForm onAddGoal={handleAddGoal} />
        <GoalList
          goals={filteredGoals.length > 0 ? filteredGoals : goals}
          onCheck={handleCheck}
        />
      </div>
    </>
  );
}

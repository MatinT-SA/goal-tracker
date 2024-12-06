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

  function handleAddGoal(goal) {
    setGoals((goals) => [...goals, goal]);
  }

  return (
    <>
      <Header />
      <div className="app">
        <GoalForm onAddGoal={handleAddGoal} />
        <GoalList goals={goals} />
      </div>
    </>
  );
}

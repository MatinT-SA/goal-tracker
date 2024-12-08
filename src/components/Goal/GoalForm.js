import { useState } from "react";
import { Button } from "../UI/Button";

export function GoalForm({ onAddGoal }) {
  const [goalName, setGoalName] = useState("");
  const [priority, setPriority] = useState("medium");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const id = crypto.randomUUID();

    const newGoal = {
      id,
      goalName,
      priority,
      checked: false,
      dueDate: dueDate || null,
      notes: notes || null,
      addedDate: new Date().toLocaleString(),
    };

    onAddGoal(newGoal);

    setGoalName("");
    setPriority("medium");
    setDueDate("");
    setNotes("");
  }

  return (
    <form className="form-add-goal" onSubmit={handleSubmit}>
      <label htmlFor="goal-name">Goal Name:</label>
      <input
        type="text"
        value={goalName}
        onChange={(e) => setGoalName(e.target.value)}
        required
      />

      <label htmlFor="priority">Priority:</label>
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>

      <label htmlFor="due-date">Due Date:</label>
      <input
        type="text"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <label htmlFor="notes">Notes:</label>
      <input
        type="text"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      <Button className="form-add-goal__btn">Submit</Button>
    </form>
  );
}

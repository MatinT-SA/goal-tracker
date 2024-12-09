import { useState, forwardRef } from "react";
import { Button } from "../UI/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function GoalForm({ onAddGoal }) {
  const [goalName, setGoalName] = useState("");
  const [priority, setPriority] = useState("medium");
  const [dueDate, setDueDate] = useState(null);
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
    setDueDate(null);
    setNotes("");
  }

  const CustomDateInput = forwardRef(({ onClick }, ref) => (
    <button
      type="button"
      onClick={onClick}
      ref={ref}
      className="custom-date-picker-button"
      aria-label="Open calendar"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="calendar-icon"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    </button>
  ));

  return (
    <form className="form-add-goal" onSubmit={handleSubmit}>
      {/* Goal Name */}
      <label htmlFor="goal-name" className="goal-name-label">
        Goal Name:
      </label>
      <input
        type="text"
        value={goalName}
        onChange={(e) => setGoalName(e.target.value)}
        id="goal-name"
        required
        className="goal-name-input"
      />

      {/* Form Row for Priority and Due Date */}
      <div className="form-row">
        <div className="form-column">
          <label htmlFor="priority">Priority:</label>
          <select
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="priority-select"
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>

        <div className="form-column">
          <label htmlFor="due-date">Due Date:</label>
          <DatePicker
            id="due-date"
            selected={dueDate}
            onChange={setDueDate}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={5}
            dateFormat="MMMM d, yyyy h:mm aa"
            minDate={new Date()}
            customInput={<CustomDateInput />}
            className="date-picker"
          />
        </div>
      </div>

      {/* Notes */}
      <label htmlFor="notes" className="notes-label">
        Notes:
      </label>
      <input
        type="text"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        id="notes"
        className="notes-input"
      />

      {/* Submit Button */}
      <Button className="form-add-goal__btn">Submit</Button>
    </form>
  );
}

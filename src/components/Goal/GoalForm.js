import { useState, forwardRef } from "react";
import { Button } from "../UI/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { roundToNearest5Minutes, getMaxTime } from "../../utils/timeUtils";
import { toast } from "sonner";

export function GoalForm({ onAddGoal }) {
  const [goalName, setGoalName] = useState("");
  const [priority, setPriority] = useState("medium");
  const [dueDate, setDueDate] = useState(null);
  const [notes, setNotes] = useState("");

  const NOTES_CHAR_LIMIT = 80;

  function handleNotesChange(e) {
    const noteInput = e.target.value;
    if (noteInput.length <= NOTES_CHAR_LIMIT) {
      setNotes(noteInput);
    } else {
      toast.error(`Notes must be ${NOTES_CHAR_LIMIT} characters or fewer.`);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (notes.length > NOTES_CHAR_LIMIT) {
      toast.error(`Notes must be ${NOTES_CHAR_LIMIT} characters or fewer.`);
      return;
    }

    if (!goalName.trim()) {
      toast.error("Goal name is required");
      return;
    }

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

    toast.success("Goal added successfully!");

    setGoalName("");
    setPriority("medium");
    setDueDate(null);
    setNotes("");
  }

  const currentTimeRound = roundToNearest5Minutes(new Date());

  const maxTime = getMaxTime();

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
        className="goal-name-input"
        placeholder="E.g: Reading Book"
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
            minTime={currentTimeRound}
            maxTime={maxTime}
            customInput={<CustomDateInput />}
            className="date-picker"
          />
        </div>
      </div>

      {/* Notes */}
      <label htmlFor="notes" className="notes-label">
        Notes:{" "}
        <small>
          ({notes.length}/{NOTES_CHAR_LIMIT})
        </small>
      </label>
      <input
        type="text"
        value={notes}
        onChange={handleNotesChange}
        id="notes"
        className="notes-input"
        placeholder="The Selfish Gene"
      />

      {/* Submit Button */}
      <Button className="form-add-goal__btn" type="submit">
        Submit
      </Button>
    </form>
  );
}

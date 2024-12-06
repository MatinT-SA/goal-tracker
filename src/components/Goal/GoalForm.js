import { Button } from "../UI/Button";

export function GoalForm() {
  return (
    <form className="form-add-goal">
      <label htmlFor="goal-name">Goal Name:</label>
      <input type="text" id="goal-name" />

      <label htmlFor="priority">Priority:</label>
      <select id="priority">
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>

      <label htmlFor="due-date">Due Date:</label>
      <input type="text" id="due-date" />

      <label htmlFor="notes">Notes:</label>
      <input type="text" id="notes" />

      <Button className="form-add-goal__btn">Submit</Button>
    </form>
  );
}

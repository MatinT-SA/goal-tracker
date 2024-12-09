import { IoMdRocket } from "react-icons/io";
import { formatDate } from "../../utils/dateUtils.js";

export function Goal({ goal }) {
  const { goalName, priority, dueDate, notes, checked, addedDate } = goal;

  const priorityClass = `priority-${priority}`;

  const formattedAddedDate = formatDate(addedDate);
  const formattedDueDate = dueDate ? formatDate(dueDate) : "No due date";

  return (
    <li className="goal">
      <div className={`goal-container ${priorityClass}`}>
        <IoMdRocket className="icon-goal" />
        <div className="priority-ribbon"></div>
        <h3 className={`goal-name ${checked ? "checked" : ""}`}>{goalName}</h3>
        <span className="added-date">
          <b>Added:</b> {formattedAddedDate}
        </span>
        {notes && <p className="notes">{notes}</p>}
        <span className="due-date">
          <b>Due:</b> {formattedDueDate}
        </span>
      </div>
    </li>
  );
}

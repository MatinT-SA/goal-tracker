import { IoMdRocket } from "react-icons/io";

export function Goal({ goal }) {
  const { goalName, priority, dueDate, notes, checked, addedDate } = goal;

  const priorityClass = `priority-${priority}`;

  return (
    <li className="goal">
      <div className={`goal-container ${priorityClass}`}>
        <IoMdRocket className="icon-goal" />
        <div className="priority-ribbon"></div>
        <h3 className={`goal-name ${checked ? "checked" : ""}`}>{goalName}</h3>
        <span className="added-date">
          Added: {new Date(addedDate).toLocaleDateString()}
        </span>
        {notes && <p className="notes">{notes}</p>}
        <span className="due-date">
          Due: {new Date(dueDate).toLocaleDateString()}
        </span>
      </div>
    </li>
  );
}

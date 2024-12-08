import { IoMdRocket } from "react-icons/io";

export function Goal({ goal }) {
  const { goalName, priority, dueDate, notes, checked, addedDate } = goal;

  const priorityClass = `priority-${priority}`;

  const formattedAddedDate = new Date(addedDate).toLocaleString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const formattedDueDate = dueDate
    ? new Date(dueDate).toLocaleString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      })
    : "No due date";

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

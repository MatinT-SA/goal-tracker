export function Goal({ goal }) {
  const { goalName, priority, dueDate, notes, checked } = goal;

  // Priority Badge Class
  const priorityClass = `priority-${priority}`;

  return (
    <li className="goal">
      <div className="goal-container">
        {/* Goal Name */}
        <h3 className={`goal-name ${checked ? "checked" : ""}`}>{goalName}</h3>

        {/* Priority Badge */}
        <span className={`priority-badge ${priorityClass}`}>{priority}</span>

        {/* Due Date */}
        <p className="due-date">
          Due: {new Date(dueDate).toLocaleDateString()}
        </p>

        {/* Notes */}
        {notes && <p className="notes">{notes}</p>}
      </div>
    </li>
  );
}

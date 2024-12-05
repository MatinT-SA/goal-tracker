export function Goal({ goal }) {
  const { goalName, priority, dueDate, notes, checked, addedDate } = goal;

  const priorityClass = `priority-${priority}`;

  return (
    <li className="goal">
      <div className={`goal-container ${priorityClass}`}>
        <div className="priority-ribbon"></div>
        <h3 className={`goal-name ${checked ? "checked" : ""}`}>{goalName}</h3>
        <p className="dates">
          <span className="added-date">
            Added: {new Date(addedDate).toLocaleDateString()}
          </span>
          <span className="due-date">
            Due: {new Date(dueDate).toLocaleDateString()}
          </span>
        </p>
        {notes && <p className="notes">{notes}</p>}
      </div>
    </li>
  );
}

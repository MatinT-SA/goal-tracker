import { IoMdRocket } from "react-icons/io";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { formatDate } from "../../utils/dateUtils.js";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

export function Goal({ goal, onCheck }) {
  const { id, goalName, priority, dueDate, notes, checked, addedDate } = goal;

  const priorityClass = `priority-${priority}`;
  const formattedAddedDate = formatDate(addedDate);
  const formattedDueDate = dueDate ? formatDate(dueDate) : "No due date";

  function handleGoalClick() {
    if (!checked) {
      confetti({
        particleCount: 175,
        spread: 75,
        origin: { x: 0.68, y: 0.6 },
      });
    }
    onCheck(id);
  }

  return (
    <motion.li
      className={`goal ${checked ? "goal-checked" : ""}`}
      onClick={handleGoalClick}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className={`goal-container ${priorityClass}`}>
        {checked ? (
          <IoMdCheckmarkCircle className="icon-goal checked-icon" />
        ) : (
          <IoMdRocket className="icon-goal icon-goal-rocket" />
        )}
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
    </motion.li>
  );
}

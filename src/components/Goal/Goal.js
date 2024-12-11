import { IoMdRocket } from "react-icons/io";
import { formatDate } from "../../utils/dateUtils.js";
import { motion } from "framer-motion";

export function Goal({ goal }) {
  const { goalName, priority, dueDate, notes, checked, addedDate } = goal;

  const priorityClass = `priority-${priority}`;
  const formattedAddedDate = formatDate(addedDate);
  const formattedDueDate = dueDate ? formatDate(dueDate) : "No due date";

  return (
    <motion.li
      className="goal"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
    >
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
    </motion.li>
  );
}

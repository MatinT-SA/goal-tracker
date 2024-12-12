import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../UI/Button";
import { Goal } from "./Goal";

export function GoalList({ goals, onCheck, goalData }) {
  const [currentPage, setCurrentPage] = useState(1);
  let goalsPerPage = 4;

  const totalPages = Math.ceil(goals.length / goalsPerPage);
  const startIndex = (currentPage - 1) * goalsPerPage;
  const endIndex = startIndex + goalsPerPage;
  const currentGoals = goals.slice(startIndex, endIndex);

  useEffect(() => {
    if (currentGoals.length === 0 && currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  }, [goals, currentPage, currentGoals]);

  function handlePrevPage() {
    setCurrentPage((prevPage) => prevPage - 1);
  }

  function handleNextPage() {
    setCurrentPage((prevPage) => prevPage + 1);
  }

  return (
    <div className="down-layer">
      <motion.ul className="goalList" key={currentPage}>
        <AnimatePresence>
          {goalData.length > 0 ? (
            currentGoals.map((goal) => (
              <Goal goal={goal} key={goal.id} onCheck={onCheck} />
            ))
          ) : (
            <motion.p
              className="goalList__text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              You don't have any goals 😢{" "}
              <Button className="add-goal">Wanna add?</Button>
            </motion.p>
          )}
        </AnimatePresence>
      </motion.ul>

      {goalData.length > goalsPerPage && (
        <div className="pagination">
          {currentPage > 1 && (
            <button onClick={handlePrevPage} className="pagination-btn">
              ←
            </button>
          )}
          <span>
            {currentPage} / {totalPages}
          </span>
          {currentPage < totalPages && (
            <button onClick={handleNextPage} className="pagination-btn">
              →
            </button>
          )}
        </div>
      )}
    </div>
  );
}

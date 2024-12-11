import { useEffect, useState } from "react";
import { Button } from "../UI/Button";
import { Goal } from "./Goal";

export function GoalList({ goals }) {
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
      <ul className="goalList">
        {goals.length > 0 ? (
          currentGoals.map((goal) => <Goal goal={goal} key={goal.id} />)
        ) : (
          <p className="goalList__text">
            You don't have any goals 😢{" "}
            <Button className="add-goal">Wanna add?</Button>
          </p>
        )}
      </ul>

      {goals.length > 0 && (
        <div className="pagination">
          {currentPage > 1 && (
            <button onClick={handlePrevPage} className="pagination-btn">
              Previous
            </button>
          )}

          <span>
            Page {currentPage} of {totalPages}
          </span>

          {currentPage < totalPages && (
            <button onClick={handleNextPage} className="pagination-btn">
              Next
            </button>
          )}
        </div>
      )}
    </div>
  );
}

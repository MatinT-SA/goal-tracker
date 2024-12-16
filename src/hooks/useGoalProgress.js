// src/hooks/useGoalProgress.js
import { useEffect } from "react";

export function useGoalProgress(goals, setProgress) {
  useEffect(() => {
    if (Array.isArray(goals)) {
      const checkedGoals = goals.filter((goal) => goal.checked).length;
      const progress = (checkedGoals / goals.length) * 100;
      setProgress(progress);
    }
  }, [goals, setProgress]);
}

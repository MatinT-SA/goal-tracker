import { useEffect, useState } from "react";
import { Header } from "../components/Header/Header";
import { GoalList } from "./Goal/GoalList";
import { GoalForm } from "./Goal/GoalForm";
import { Footer } from "./Footer/Footer";
import { toast } from "sonner";

export const initialGoals = [
  {
    id: 1,
    goalName: "Complete React project",
    checked: false,
    priority: "high",
    dueDate: "2024-12-31T22:00",
    notes: "Focus on state management",
    addedDate: "2024-12-04T14:00",
  },
  {
    id: 2,
    goalName: "Go for a walk",
    checked: true,
    priority: "medium",
    dueDate: null,
    notes: null,
    addedDate: "2024-12-04T08:00",
  },
  {
    id: 3,
    goalName: "Music",
    checked: false,
    priority: "low",
    dueDate: null,
    notes: "Listening to Kelly Clarkson",
    addedDate: "2024-12-06T10:00",
  },
];

export default function App() {
  // LocalStorage
  const [goals, setGoals] = useState(() => {
    const savedGoals = localStorage.getItem("goals");
    return savedGoals ? JSON.parse(savedGoals) : initialGoals;
  });
  const [filteredGoals, setFilteredGoals] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check for saved theme in localStorage
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) {
      setIsDarkMode(savedMode === "true");
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    localStorage.setItem("goals", JSON.stringify(goals));
  }, [goals]);

  function handleAddGoal(goal) {
    setGoals((prevGoals) => [...prevGoals, goal]);
    setFilteredGoals([]);
  }

  function handleCheck(id) {
    setGoals((prevGoals) =>
      prevGoals.map((goal) =>
        goal.id === id ? { ...goal, checked: !goal.checked } : goal
      )
    );
  }

  function handleSearch(query) {
    setSearchQuery(query);
    const filtered = goals.filter((goal) =>
      goal.goalName.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredGoals(filtered);
  }

  function updatedThemeForElement(selector, theme) {
    const elements = document.querySelectorAll(selector);
    if (elements.length > 0) {
      elements.forEach((element) => {
        element.setAttribute("data-theme", theme);
      });
    }
  }

  function handleDarkModeToggle() {
    const newTheme = !isDarkMode ? "dark" : "light";
    setIsDarkMode((prevMode) => !prevMode);

    document.body.setAttribute("data-theme", newTheme);
    updatedThemeForElement(".custom-shape-divider-top-1733231526", newTheme);
    updatedThemeForElement(".progress-bar", newTheme);
    updatedThemeForElement(".form-add-goal input", newTheme);
    updatedThemeForElement(".form-add-goal select", newTheme);
    updatedThemeForElement(".form-add-goal", newTheme);
    updatedThemeForElement(".calendar-icon", newTheme);
    updatedThemeForElement(".custom-date-picker-button", newTheme);
    updatedThemeForElement(".goal", newTheme);
    updatedThemeForElement(".goal p", newTheme);
    updatedThemeForElement(".goal span", newTheme);
    updatedThemeForElement(".down-layer", newTheme);
    updatedThemeForElement(".header img", newTheme);
    updatedThemeForElement(".header-nav", newTheme);
    updatedThemeForElement(".footer", newTheme);
    updatedThemeForElement(".reset-button", newTheme);
  }

  function handleResetGoals() {
    if (goals.length > 0) {
      setGoals([]);
      setProgress(0);
      localStorage.removeItem("goals");
      setFilteredGoals([]);
      setSearchQuery("");
      toast.success("Goals list cleared successfully");
    }
  }

  return (
    <>
      <Header
        goals={goals}
        onSearch={handleSearch}
        searchQuery={searchQuery}
        progress={progress}
        setProgress={setProgress}
      />
      <div className="app">
        <GoalForm onAddGoal={handleAddGoal} />
        <GoalList
          filteredGoals={filteredGoals}
          goals={
            filteredGoals.length > 0 || searchQuery ? filteredGoals : goals
          }
          onCheck={handleCheck}
          isDarkMode={isDarkMode}
          updatedThemeForElement={updatedThemeForElement}
          progress={progress}
          setProgress={setProgress}
        />
      </div>
      <Footer
        isDarkMode={isDarkMode}
        onToggle={handleDarkModeToggle}
        onReset={handleResetGoals}
      />
    </>
  );
}

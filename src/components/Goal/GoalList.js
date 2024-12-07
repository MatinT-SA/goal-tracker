import { Button } from "../UI/Button";
import { Goal } from "./Goal";

export function GoalList({ goals }) {
  return (
    <div className="down-layer">
      <ul className="goalList">
        {goals.length > 0 ? (
          goals.map((goal) => <Goal goal={goal} key={goal.id} />)
        ) : (
          <p className="goalList__text">
            You don't have any goals 😢{" "}
            <Button className="add-goal">Wanna add?</Button>
          </p>
        )}
      </ul>
    </div>
  );
}

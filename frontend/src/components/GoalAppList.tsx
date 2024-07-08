import GoalApp from "./GoalApp";
import { Goal } from "../App";

type GoalListProps = {
  goals: Goal[];
  onDeleteGoal: (id: number) => void;
};

export default function GoalAppList({goals, onDeleteGoal}: GoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <GoalApp title={goal.title} onDelete={() => onDeleteGoal(goal.id)}>
            <p>{goal.description}</p>
          </GoalApp>
        </li>
      ))}
    </ul>
  );
}

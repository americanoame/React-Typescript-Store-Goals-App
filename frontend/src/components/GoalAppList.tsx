import GoalApp from "./GoalApp";
import { Goal } from "../App";

type GoalListProps = {
  goals: Goal[];
};

export default function GoalAppList({goals}: GoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <GoalApp title={goal.title}>
            <p>{goal.description}</p>
          </GoalApp>
        </li>
      ))}
    </ul>
  );
}

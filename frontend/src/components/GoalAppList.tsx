import GoalApp from "./GoalApp";

type GoalListProps = {
  goals: {
    title: string;
    description: string;
    id: number;
  }[];
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

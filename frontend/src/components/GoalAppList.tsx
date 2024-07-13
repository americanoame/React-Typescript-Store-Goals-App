import { type ReactNode } from 'react';
import GoalApp from './GoalApp';
import { Goal } from '../App';
import InfoBox from './InfoBox';

type GoalListProps = {
  goals: Goal[];
  onDeleteGoal: (id: number) => void;
};

export default function GoalAppList({ goals, onDeleteGoal }: GoalListProps) {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        <p>No goals found. Maybe add one?</p>
      </InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="medium">
        <p>Wow, that's a lot of goals! Consider removing some to stay focused.</p>
      </InfoBox>
    );
  }

  return (
    <>
    {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <GoalApp title={goal.title} onDelete={() => onDeleteGoal(goal.id)}>
              <p>{goal.description}</p>
            </GoalApp>
          </li>
        ))}
      </ul>
    </>
  );
}

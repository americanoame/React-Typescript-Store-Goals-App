import { type ReactNode, useState } from 'react';
import GoalApp from './GoalApp';
import { Goal } from '../App';
import InfoBox from './InfoBox';
import Modal from './Modal';
import GoalEditForm from './GoalEditForm';

type GoalListProps = {
  goals: Goal[];
  onDeleteGoal: (id: number) => void;
  onUpdateGoal: (updatedGoal: Goal) => void;
  
};

export default function GoalAppList({ goals, onDeleteGoal, onUpdateGoal }: GoalListProps) {
  const [editGoalId, setEditGoalId] = useState<number | null>(null);

  const handleEditClick = (id: number) => {
    setEditGoalId(id);
  };

  const handleCancelEdit = () => {
    setEditGoalId(null);
  };

  const handleUpdateGoal = (updatedGoal: Goal) => {
    onUpdateGoal(updatedGoal);
    setEditGoalId(null);
  };

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
            <GoalApp
              title={goal.title}
              onDelete={() => onDeleteGoal(goal.id)}
              onEdit={() => handleEditClick(goal.id)} 
            >
              <p>{goal.description}</p>
            </GoalApp>
          </li>
        ))}
      </ul>

      <Modal isOpen={editGoalId !== null} onClose={handleCancelEdit}>
        {editGoalId !== null && (
          <GoalEditForm
            goal={goals.find((goal) => goal.id === editGoalId)!}
            onUpdate={handleUpdateGoal}
            onCancel={handleCancelEdit}
          />
        )}
      </Modal>
    </>
  );
}

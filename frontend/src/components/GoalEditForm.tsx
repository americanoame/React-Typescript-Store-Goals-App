import { FormEvent, useState } from 'react';
import { Goal } from '../App';

type GoalEditFormProps = {
  goal: Goal;
  onUpdate: (updatedGoal: Goal) => void;
  onCancel: () => void;
  
};

export default function GoalEditForm({ goal, onUpdate, onCancel }: GoalEditFormProps) {
  const [editedTitle, setEditedTitle] = useState(goal.title);
  const [editedDescription, setEditedDescription] = useState(goal.description);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onUpdate({
      ...goal,
      title: editedTitle,
      description: editedDescription,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input type="text" id="goal" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
      </p>
      <p>
        <label htmlFor="summary">Description</label>
        <input type="text" id="summary" value={editedDescription} onChange={(e) => setEditedDescription(e.target.value)} />
      </p>  
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
}



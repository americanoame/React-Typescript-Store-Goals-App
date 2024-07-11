import { useState } from 'react';

import GoalAppList from './components/GoalAppList';
import Header from './components/Header';
import NewGoal from './components/NewGoal';
import goalsImg from './assets/goals.jpg';


 export type Goal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<Goal[]>([]);

  // defines a function addGoalHandler that adds a  
  // new goal to the existing list of goals in the state.

  function addGoalHandler(goal: string, summary: string) {
    setGoals((prevGoals) => {
      const newGoal: Goal = {
        title: goal,
        description: summary,
        id: Math.random(),
      };
      return [...prevGoals, newGoal];
    });
  }

  function deleteGoalHandler(goalId: number) {
    setGoals((prevGoals) => {
      return prevGoals.filter(goal => goal.id !== goalId);
    });
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Goals</h1>
      </Header>
      <NewGoal onAddGoal={addGoalHandler} />
      <GoalAppList goals={goals} onDeleteGoal={deleteGoalHandler} />
    </main>
  );
}

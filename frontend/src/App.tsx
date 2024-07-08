import { useState } from 'react';

import GoalApp from './components/GoalApp';
import goalsImg from './assets/goals.jpg';
import Header from './components/Header';

type Goal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<Goal[]>([]);

  // defines a function addGoalHandler that adds a  
  // new goal to the existing list of goals in the state.

  function addGoalHandler() {
    setGoals((prevGoals) => {
      const newGoal: Goal = {
        title: 'New Goal',
        description: 'A new goal',
        id: Math.random(),
      };
      return [...prevGoals, newGoal];
    });
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Goals</h1>
      </Header>
      <button onClick={addGoalHandler}>Add Goal</button>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <GoalApp title={goal.title}>
              <p>{goal.description}</p>
            </GoalApp>
          </li>
        ))}
      </ul>
    </main>
  );
}

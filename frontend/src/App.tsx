import GoalApp from './components/GoalApp';
import goalsImg from './assets/goals.jpg';
import Header from './components/Header';

export default function App() {
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Goals</h1>
      </Header>
      <GoalApp title="Goal App">
        <p>A simple goal tracking app that allows user to create, update, and delete goals.</p> 
      </GoalApp>
    </main>
  );
}

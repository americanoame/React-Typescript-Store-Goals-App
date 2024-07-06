interface GoalAppProps {
  title: string;
  description: string;
};

export default function GoalApp({ title, description }: GoalAppProps) {
  return (
    <article>
      <h1>{title}</h1>
      <p>{description}</p>
      <div>
        <button>Dellete</button>
      </div>
    </article>
  );
}

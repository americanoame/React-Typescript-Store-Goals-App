export default function GoalApp({ title, description }: { title: string; description: string }) {
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

import { PropsWithChildren, type ReactNode } from 'react';

type GoalAppProps = PropsWithChildren<{
  title: string;
  onDelete: () => void;
  onEdit: () => void;
  children: ReactNode;
}>;

export default function GoalApp({ title, children, onEdit, onDelete }: GoalAppProps) {
  return (
    <article className='article-container'>
      <h1>{title}</h1>
      <div className="children-container">
        {children}
      </div>
      <div className="button-container">
        <button onClick={onDelete}>Delete</button>
        <button onClick={onEdit}>Edit</button>
      </div>
    </article>
  );
}

// Alternative way to import ReactNode:

// import {  type ReactNode } from 'react'

// interface GoalAppProps {
//   title: string;
//   children: ReactNode;
// };

// export default function GoalApp({ title, children }: GoalAppProps) {
//   return (
//     <article>
//       <h1>{title}</h1>
//       {children}
//       <div>
//         <button>Delete</button>
//       </div>
//     </article>
//   );
// }

// Alternative way to import FC:

// import { PropsWithChildren, FC } from 'react'

// type GoalAppProps = PropsWithChildren<{ title: string}>;

// const GoalApp: FC<GoalAppProps> = ({ title, children }) => {
//   return (
//     <article>
//       <h1>{title}</h1>
//       {children}
//       <div>
//         <button>Delete</button>
//       </div>
//     </article>
//   );
// }

// export default GoalApp;

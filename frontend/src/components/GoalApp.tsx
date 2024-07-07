import { PropsWithChildren } from 'react'

type GoalAppProps = PropsWithChildren<{ title: string}>;

export default function GoalApp({ title, children }: GoalAppProps) {
  return (
    <article>
      <h1>{title}</h1>
      {children}
      <div>
        <button>Delete</button>
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


import React from 'react';
import { useLoads } from 'react-loads';
import { getTodos, Todo } from './services/services';

export interface ThingyAProps {

}



export const ThingyA: React.FunctionComponent<ThingyAProps> = (props) => {
    const {
       
    } = props;
    const doGetTodos = React.useCallback(getTodos,[]); 
    const { response , error, load, isIdle,  isRejected, isPending, isResolved } = useLoads(doGetTodos, {
        context: "todos", 
    });

    return <div >
      <h2> View Todos</h2>

        {isIdle && <p> Idle</p>}
        {isPending &&  <p>...loading</p>}
        {isResolved && <ul>
                {response.map((todo:  Todo) => <li>{todo.value} </li>)}
             </ul>}
    </div>;
}


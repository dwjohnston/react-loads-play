
import React, { useState } from 'react';
import { useLoads } from 'react-loads';
import { postTodo } from './services/services';

export interface ThingyBProps {

}



export const ThingyB: React.FunctionComponent<ThingyBProps> = (props) => {
  const {

  } = props;

  const doPostTodo = React.useCallback(postTodo, []);

  const { response, error, load, isIdle, isRejected, isPending, isResolved } = useLoads(doPostTodo, {
    defer: true,
    context: "todos"
  });

  const [value, updateValue] = useState('');

  return <div >
    <h2> Thingy B</h2>

    <form onSubmit={(e) => {
      console.log("submit");
      e.preventDefault();

      //@ts-ignore
      load(value);
    }}>
      <input value={value} onChange={(e) => updateValue(e.target.value)} />
      <button type="submit"> submit</button>
    </form>
  </div>;
}



import React from 'react';
import { useLoads } from 'react-loads';

export interface ThingyBProps {

}



export const ThingyB: React.FunctionComponent<ThingyBProps> = (props) => {
    const {
       
    } = props;

    const { response, error, load, isIdle,  isRejected, isPending, isResolved } = useLoads(async () => null, {
        defer: true, 
        context: "thingys"
    });
    return <div >
      <h2> Thingy B</h2>
      
      {JSON.stringify(response)}
      
    </div>;
}


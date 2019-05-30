
import React from 'react';
import { useLoads } from 'react-loads';
import { getThingys as _getThingys } from './services/services';

export interface ThingyAProps {

}



export const ThingyA: React.FunctionComponent<ThingyAProps> = (props) => {
    const {
       
    } = props;
    const getThingys = React.useCallback(_getThingys,[]); 
    const { response, error, load, isIdle,  isRejected, isPending, isResolved } = useLoads(getThingys, {
        defer: true, 
        context: "thingys", 
    });

    return <div >
      <h2> Thingy A</h2>

        {isIdle && <p> Idle</p>}
        {isPending &&  <p>...loading</p>}

        <button onClick = {load}> Get the things</button>

        {JSON.stringify(response)}
    </div>;
}


import React from 'react';
import { ThingyA } from './ThingyA';
import { LoadsContext } from 'react-loads';
import { ThingyB } from './ThingyB';

interface Props {

}

const App: React.FunctionComponent<Props> = (props) => {
  return (
    <LoadsContext.Provider>
      <div className="App">
        <h1>hello world</h1>
        <ThingyA />
        <ThingyB/>
      </div></LoadsContext.Provider>

  );
}

export default App;

import { useState } from 'react';
import './App.css';
import { Child1 } from './chilndren/child1/child1';
import { Child2 } from './chilndren/child2/child2';
import { Child4 } from './chilndren/child4/child4';

function App() {
  const [mainState, setMainState] = useState<string>(`[ MY START STATE! ]`);
  function setState() {
    setMainState(`[ I set state from Main: I'm here! ]`);
  }

  return (
    <>
      <h1>MainPage</h1>
      <div className="card">
        <p>{mainState}</p>
      </div>
      <button onClick={setState}>Main Set</button>

      <div className='box1'>
        <Child1 mainState={mainState} setMainState={setMainState} />
        <Child2 mainState={mainState} setMainState={setMainState} />

        <Child4 mainState={mainState} setMainState={setMainState} />
      </div>
    </>
  );
}
export default App;

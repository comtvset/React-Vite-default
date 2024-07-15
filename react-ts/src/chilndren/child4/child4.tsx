import React, { useState } from 'react';

interface ChildProps {
  mainState: string;
  setMainState: React.Dispatch<React.SetStateAction<string>>;
}

export const Child4: React.FC<ChildProps> = ({ mainState, setMainState }) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [inputValueLocalState, setInputValueLocalState] = useState<string>('');

  function showState() {
    setIsShow(true);
  }

  function setState() {
    setMainState(`[ I set state from child 4: ${inputValueLocalState} ]`);
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValueLocalState(event.target.value);
  }

  return (
    <>
      <div className='box2'>
        <h2>child 4</h2>
        <p>{isShow ? mainState : ''}</p>
        <button onClick={showState}>Show</button>
        <input
          type="text"
          value={inputValueLocalState}
          onChange={handleInputChange}
        />
        <button onClick={setState}>Set</button>
      </div>
    </>
  );
};

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Counter from './components/Counter/Counter.jsx'


function App() {

  let [count,setCount] = useState(0);
  
  const changeCounter = ()=>{
    setCount(count+1);
  }

  
  return (
    <>
    <button onClick={changeCounter}> Rua' Amjad {count} </button>
    </>
  );
}

export default App

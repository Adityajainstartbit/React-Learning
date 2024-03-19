import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const Displaydetails = ["Aditya a software developer", "JP morgan hiring", "Should be focus on more good code"];
function getRandomIndex(max)
{
  return Math.floor(Math.random() * (max +1));
}
function Header()
{
  const dynamicvalue = Displaydetails[getRandomIndex(2)];
  return (
    <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src={viteLogo} className="logo" alt="Vite logo" />
    </a>
    <a href="https://react.dev" target="_blank">
      <img src={reactLogo} className="logo react" alt="React logo" />
    </a>
    <h1 class="dynamic-color"> {dynamicvalue} </h1>
  </div>

   )
}


function Ksenia() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
     
      <p> Refresh the page or inscrese the count  to see dynamic content </p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Ksenia

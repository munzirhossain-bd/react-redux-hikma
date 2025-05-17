import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import reduxLogo from './assets/redux_toolkit.png'
import './App.css'
import Counter from './component/counter'
import Posts from './component/posts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo" alt="React logo" />
        </a>
        <a href="https://redux.dev" target="_blank">
          <img src={reduxLogo} className="logo" alt="Redux logo" />
        </a>
      </div>
      <h1>React + Redux</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Try to Learn from Basic to Advanced...
      </p>
      <Counter/>
      <Posts/>
    </>
  )
}

export default App

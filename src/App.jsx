import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Form from './Component/Form'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex h-[773px] w-[736px] bg-white rounded-lg items-center justify-center flex flex-col">
        <Form />
      </div>
    </div>
  );
  
}
export default App

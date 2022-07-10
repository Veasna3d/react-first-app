import './App.css';
import NAMES from './components/data.json'
import { useState, useTransition } from "react"

function App() {
  const [query, setQuery] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [isPending, startTransition] = useTransition()
  const changeHandler = (event) =>{
    setInputValue(event.target.value)
    startTransition(() => setQuery(event.target.value))
  }
  const fillterName = NAMES.filter(item =>{
    return item.title.includes(query) || item.body.includes(query)
  })

  return (
    <div className="App">
      <input type='text' value={inputValue} 
      
      onChange={changeHandler}/>
      {
        fillterName.map((item) => (
          <p key={item.id}>{item.title}</p>
        ))
      }
    </div>
  );
}

export default App

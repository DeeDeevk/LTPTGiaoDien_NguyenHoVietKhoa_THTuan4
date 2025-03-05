import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([]);

  var url = "https://jsonplaceholder.typicode.com/todos";

  useEffect(() =>{
    fetch(url).then((res) => {
      return res.json()
    }).then((dataItem) => {
      setData(dataItem)
    })
  },[]) 

  return (
    <> 
      {data.map((item, index)=>{
        return(
          <li key={index}>
            {item.title}
          </li>
        )
      })}
    </>
  )
}

export default App

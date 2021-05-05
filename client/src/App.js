import './App.css';
import React from 'react'
import { useState } from 'react'
const axios = require('axios')





function App() {
  const [data, setData] = useState('Hello')
  const [message, setMessage] = useState()

  const makePost = (e) => {
    e.preventDefault()
    axios.post('/posts', {
      title: message,
      body: 'yoyoyo',
    }).then(res => {
      console.log("yo", res.data.title)
      setData(res.data.title)
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {message}
        </div>
        <div>
          {data}
        </div>
        <input onChange={e => setMessage(e.target.value)}></input>
        <button onClick={makePost}>
          HELLO
        </button>
      </header>
    </div>
  );
}

export default App;

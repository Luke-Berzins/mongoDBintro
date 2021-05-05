import './App.css';
import React from 'react'
import { useState } from 'react'


const axios = require('axios')
axios.get('./')


function App() {
  const [data, setData] = useState('Hello')


  const makePost = (e) => {
    e.preventDefault()
    axios.post('/posts', {
      title: 'Hello',
      body: 'yoyoyo',
    }).then(res => {
      console.log("yo", res.data.msg.title)
      setData(res.data.msg.title)
      
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          Hi
        </div>
        <div>
          {data}
        </div>
        <button onClick={makePost}>
          HELLO
        </button>
      </header>
    </div>
  );
}

export default App;

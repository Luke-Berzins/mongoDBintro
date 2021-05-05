import './App.css';
import { useState } from 'react'


const axios = require('axios')
axios.get('./')


function App() {
  const [data, setData] = useState()


  const makePost = (e) => {
    e.preventDefault()
    axios.post('/posts', {
      title: 'Whatup',
      body: 'yoyoyo',
    }).then(res => {
      console.log("yo", res.body)
      setData(res.body)
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

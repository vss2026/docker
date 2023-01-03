import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

  useEffect(() => {
    axios.get('/api/values').then(res => { 
      console.log('res = ', res)
      setLists(res.data)
    })
  }, [])
  const [lists, setLists] = useState([])
  const [value, setValue] = useState("")

  const changeHandler = (e) => { 
    setValue(e.currentTarget.value)
  }

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post('/api/value', { value: value }).then(res => { 
      if (res.data.success) {
        console.log('res = ', res)
        setLists([...lists, res.data])
        setValue("");
        alert('success')
      } else { 
        alert('failed')
      }
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
          {lists && lists.map((list, index) => (
            <li key={index}>{ list.value }</li>
          ))}



          <form className="example" onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="input text..."
              onChange={changeHandler}
              value={value}
            />
            <button type="submit">submit</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;

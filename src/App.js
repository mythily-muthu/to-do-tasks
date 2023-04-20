import React, { useState } from 'react';
import './App.css';
import InputArea from './Components/InputArea';
import ToDoItem from './Components/ToDoItem';

function App() {
  // to store all info we use an array
  const [items, setItems] = useState([])
  const addItems = (inputText) => {
    setItems((prevItems) => {
      return [...prevItems, inputText]
    })
  }
  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id
      })
    })
  }
  console.log('items', items)
  return (
    <div className="container">
      <div className="title">
        <h1 >To-Do-Tasks</h1>
      </div>
      {/* a function addItems is sent and inputText is gvn as a params in it */}
      <InputArea addItems={addItems} />
      <div>
        <ul>
          {
            items.map((item, index) => {
              return <ToDoItem text={item} key={index} deleteItem={deleteItem} id={index} />
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;

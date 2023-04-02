import React, { useState } from 'react'
import './Todo.css'

function Todo() {

  const [item,setItem]=useState("");
  const [newitem,setNewItem]=useState([]);

  const itemChange =(event) => {
    setItem(event.target.value)
  };
  const addItem =()=>{
    if (!item){}
    else {
      setNewItem((preValue)=>{
        return [...preValue,item]
      });
      setItem("")
    }
  };
  const deleteItem=(index)=>{
    const updateItems = newitem.filter((val,ind)=>{
      return ind !==index;
    })
    setNewItem(updateItems);
  }
  return (
    <>
    <div className='container-main'>
      <div className='head-image'>
         <img src='favicon-96x96.png'></img>
      </div>
    <h1>TO-DO List </h1>
    <input type='text'value={item} placeholder='Add Your Tasks' onChange={itemChange}/> 
    <button onClick={addItem}>Add task</button>

    <ul>
      {newitem.map((val,index)=>{
        return <div className='list-items' key={index}>
                <h4>{val}</h4>
                <i className='fas fa-trash-alt add-btn'  title='Delete Item' onClick={()=>deleteItem(index)}></i>
        </div>;
      })}
    
    </ul>    
    </div>
    </>
  )
}

export default Todo
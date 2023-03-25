import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
  return (
    <div>
      {/* <p>{todo.sno}</p> */}
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-danger btn-sm" style={{margin: "auto auto 10px auto"}} onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  )
}

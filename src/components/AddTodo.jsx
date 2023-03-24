import React, { useState } from "react";

export const AddTodo = ({addTodo}) => {


    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("title and description cannot be blank")
        }
        else{
            addTodo(title, desc)
            setTitle("")
            setDesc("")
        }
    }

    const headerStyle={
            marginTop: "4rem",
            marginBottom: "3rem"
    }
  return (
    <div className="container" style={headerStyle}>
      <h3>Add a new Todo item</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            value={title}
            onChange={(e)=>{setTitle(e.target.value)}}
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc"  className="form-label">
            Description
          </label>
          <input type="text" value={desc} className="form-control" onChange={(e)=>{setDesc(e.target.value)}} id="desc" />
        </div>
        <button type="submit" className="btn btn-primary btn-md">
          Add
        </button>
      </form>
    </div>
  );
};

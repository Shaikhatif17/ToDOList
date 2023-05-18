import React, { useState } from "react";
import Task from "./Task";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [title ,setTitle] =useState();
  const [description, setDescription]=useState();
  const submitHandler=((e)=>{
    e.preventDefault();

    setTasks()
  })
  return (
    <div className="container">
      <h1>Daily Goals</h1>
      <form onSubmit={submitHandler}>
        {" "}
        <input type="text" placeholder="Title"  value={title} onChange={(e)=> setTitle(e.target.value)}/>
        <textarea placeholder="Decription" value={description} onChange={(e)=>{setDescription(e.target.value)}}></textarea>
        <button type="submit">ADD</button>
      </form>
      {tasks.map(() => (
     <Task/>
      ))}
    </div>
  );
};

export default Home;

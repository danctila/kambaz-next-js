"use client";

import React, { useState } from "react";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export default function WorkingWithArrays() {
  const [todo, setTodo] = useState({
    id: "1",
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    completed: false,
  });
  
  const API = `${HTTP_SERVER}/lab5/todos`;
  
  return (
    <div id="wd-working-with-arrays">
      <h3>Working with Arrays</h3>
      <h4>Retrieving Arrays</h4>
      <a id="wd-retrieve-todos" className="btn btn-primary" href={API}>
        Get Todos </a><hr/>
      
      <h4>Retrieving an Item from an Array by ID</h4>
      <a id="wd-retrieve-todo-by-id" className="btn btn-primary float-end" href={`${API}/${todo.id}`}>
        Get Todo by ID
      </a>
      <input id="wd-todo-id" defaultValue={todo.id} className="w-50"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })} />
      <hr />
      
      <h3>Filtering Array Items</h3>
      <a id="wd-retrieve-completed-todos" className="btn btn-primary me-2"
         href={`${API}?completed=true`}>
        Get Completed Todos
      </a>
      <a id="wd-retrieve-incomplete-todos" className="btn btn-primary"
         href={`${API}?completed=false`}>
        Get Incomplete Todos
      </a><hr/>
      
      <h3>Creating new Items in an Array</h3>
      <a id="wd-create-todo" className="btn btn-primary"
         href={`${API}/create`}>
        Create Todo
      </a><hr/>
      
      <h3>Removing from an Array</h3>
      <a id="wd-remove-todo" className="btn btn-primary float-end" href={`${API}/${todo.id}/delete`}>
         Remove Todo with ID = {todo.id} </a>
      <input defaultValue={todo.id} className="w-50" onChange={(e) => setTodo({ ...todo, id: e.target.value })}/><hr/>
      
      <h3>Updating an Item in an Array</h3>
      <a href={`${API}/${todo.id}/title/${todo.title}`} className="btn btn-primary float-end">
        Update Todo</a>
      <input defaultValue={todo.id} className="w-25 float-start me-2"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}/>
      <input defaultValue={todo.title} className="w-50 float-start"
             onChange={(e) => setTodo({ ...todo, title: e.target.value }) }/>
      <br /><br />
      
      <a href={`${API}/${todo.id}/completed/${todo.completed}`} className="btn btn-primary float-end">
        Update Completed</a>
      <input defaultValue={todo.id} className="w-25 float-start me-2"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}/>
      <input type="checkbox" defaultChecked={todo.completed} className="float-start"
        onChange={(e) => setTodo({ ...todo, completed: e.target.checked }) }/>
      <br /><br />
      
      <a href={`${API}/${todo.id}/description/${todo.description}`} className="btn btn-primary float-end">
        Update Description</a>
      <input defaultValue={todo.id} className="w-25 float-start me-2"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}/>
      <input defaultValue={todo.description} className="w-50 float-start"
        onChange={(e) => setTodo({ ...todo, description: e.target.value }) }/>
      <br /><br /><hr />
    </div>
  );
}

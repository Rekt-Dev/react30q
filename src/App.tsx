import "./styles.css";
import {useEffect, useState} from "react"

export default function App() {
  const[users, setUsers] =  useState<any[]>([])
  useEffect(()=> {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then ((response) => response.json())
    .then((json) => setUsers(json))
  },[])
  
  const mapData=() => {
    let mappedArray=users.map((user)=>user.id*2)
    console.log(mappedArray)
  }
  return <div className="App">
    <h1>
      Users
    </h1>
    <div className="card">
      {users.map((user)=>(
       <div className="card-inner">
         {user.name}
       </div> 
  
      ))}
      
      
      <div className="card-inner">
        <p>{users.name}</p>
        <p>{users.username}</p>
  </div>
       <button onClick ={mapData}> 
         check manipulated array
       </button>
  </div>
  </div>
}

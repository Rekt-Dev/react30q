import  "../src/styles.css"
import {useEffect, useState} from "react"
import Card from 'react-bootstrap/Card';


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
  return <div className="">
    <h1>
      Users
    </h1>
    <div>
 <Card>
           <Card.Body>This is some text within a card body.</Card.Body>
          </Card>
    </div>
    <br />
    <div className=""
    >
      {users.map((user)=>(
       <div className="">
       {user.name}
       </div> 
       
  
      ))}
      
      
      <div className="">
        <p>{users.name}</p>
        <p>{users.username}</p>
  </div>
       <button onClick ={mapData}> 
         check manipulated array
       </button>
  </div>
  </div>
}

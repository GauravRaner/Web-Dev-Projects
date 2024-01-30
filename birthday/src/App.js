import React, { useState } from 'react'
import Data from './Project 1/Data'
import './Project 1/App.css'
const App = () => {
  const [data,setData]=useState(Data)
  return (
    <div className='App'>
      <center><h1>Birthday Reminder is {data.length}</h1></center>
      <center><button onClick={()=>setData([])}>Clear</button></center>
      <section>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Age</th>
              <th>Name</th>
            </tr>
          </thead>
          {data.map((item)=>{
            return(
              <tbody>
                <tr>
                  <td><img src={item.img} height='100px' width='100px' alt=''></img></td>
                  <td>{item.age}</td>
                  <td>{item.name}</td>

                </tr>
              </tbody>
            )
          })}
        </table>
      </section>
    </div>
  )
}
export default App;

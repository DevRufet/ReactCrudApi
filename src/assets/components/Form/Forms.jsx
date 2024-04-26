import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
function Forms() {
    const [myinp, setmyinp] = useState("")
    const [todo, settodo] = useState([])
    function handler(e){
        e.preventDefault()
        settodo([...todo,{name:myinp,id:uuidv4()}])
        setmyinp("")
    
    function send(e){
        setmyinp(e.target.value)
    }
  return (
    <div>
        <form  onSubmit={handler}>
            <input type="text" onChange={send} value={myinp}/>
            <button>click</button>
        </form>
        <div>
            { todo.map((x)=>(
                <li key={x.id}>{x.name}</li>
            
          )
            )}
        </div>
    </div>
  )
}

export default Forms}
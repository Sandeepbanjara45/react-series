import React, { useState } from 'react'

const App = () => {
  let [update,setUpdate] = useState(15);

  const addvalue = () => {
    console.log("clicked ", update);
    // update += 1;
    setUpdate(update+1)
  }
  const removevalue = () => {
    console.log("clicked for remove: ",update);
    // setUpdate(update-1)
    // setUpdate(update ? update-1:0)
    if(update!=0){
      setUpdate(update - 1)
    }
  }

  
  return (
    <>
     <h1>counter value {update}</h1>
     <button onClick={addvalue}>add value {update}</button>
     <button onClick={removevalue}>remove value {update}</button> 
     <p>footer: {update}</p>
    </>
  )
}

export default App

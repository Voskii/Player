import React from "react";

export default function Welcome(props){
    const {username, welMsg, hey, beaitIt, userState, handleChange, info, scene, index} = props
    
    console.log(index)
    return (
        <div className="welcome-text">
        {index === 0 && <h1>Welcome {username}!</h1>}
          <h1>{welMsg[index]}</h1>
          {index !== 2 && <button onClick={scene}>Okay</button>}
          {index === 2 && <button onClick={scene}>Walk</button>}
          {/* <input name='info' type='text' value={info} placeholder='Type Here' onChange={handleChange} /> */}
        </div>
    )
}
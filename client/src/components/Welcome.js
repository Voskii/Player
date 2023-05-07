import React from "react";

export default function Welcome(props){
    const {username, welMsg, hey, beaitIt, userState, handleChange, info, scene, index} = props
    
    console.log(index)
    return (
        <div className="welcome-text screen">
        {index === 0 && <h1 style={{ textShadow: '2px 2px 1px var(--p)'}}>Welcome <span style={{fontFamily: 'Cyberway Riders', fontSize: '2em', color: 'aqua'}}>{username}!</span></h1>}
          <h3 style={{fontSize: '1.3em'}}>{welMsg[index]}</h3>
          {index !== 2 && <button onClick={scene} className="game">Okay</button>}
          {index === 2 && <button onClick={scene} className="game">Walk</button>}
          {/* <input name='info' type='text' value={info} placeholder='Type Here' onChange={handleChange} /> */}
        </div>
    )
}
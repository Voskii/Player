import React, { useState } from "react";
import CharSelect from './CharSelect';

export default function Welcome(props){
    const {username, welMsg, hey, beaitIt, userState, handleChange, info, scene, index, playerSelect, setPlayerSelect} = props
    const [chosen, setChosen] = useState('')
    console.log(index)
    return (
        <div className="welcome-text screen">
        {index === 0 && <h1 style={{ textShadow: '2px 2px 1px var(--p)'}}>Welcome <span style={{fontFamily: 'Cyberway Riders', fontSize: '2em', color: 'aqua'}}>{username}!</span></h1>}
          <h3 style={{fontSize: '1.3em'}}>{welMsg[index]}</h3>
          {playerSelect && <CharSelect chosen={chosen} setChosen={setChosen} index={index} scene={scene}/>}
          {index !== 3 && <button onClick={scene} className="game">Okay</button>}
          {index === 3 && <button  className="game">Pick a Char</button>}
          {/* <input name='info' type='text' value={info} placeholder='Type Here' onChange={handleChange} /> */}
        </div>
    )
}
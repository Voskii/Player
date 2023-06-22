import React, { useState } from "react";
import CharSelect from './CharSelect';
import lumpyl from '../images/lumpyl.gif'

export default function Welcome(props){
    const {username, welMsg, hey, beaitIt, userState, handleChange, info, scene, index, playerSelect, setPlayerSelect} = props
    const [chosen, setChosen] = useState('')
    console.log(index)
    return (
        <div className="welcome-text screen">
        {index === 0 && <h1 style={{ textShadow: '2px 2px 1px var(--p)'}}>Welcome <span style={{fontFamily: 'Cyberway Riders', fontSize: '2em', color: 'aqua'}}>{username}!</span></h1>}
          {index !== 0 && index !== 3 && <img src={lumpyl} className="lumpyl"/>}
          <h3 style={{fontSize: '1.3em'}}>{welMsg[index]}</h3>
          {index === 3 && <button  className="game">Pick a Char</button>}
          {playerSelect && <CharSelect chosen={chosen} setChosen={setChosen} index={index} scene={scene}/>}
          {index !== 3 && <button onClick={scene} className="game">Okay</button>}
          
          
        </div>
    )
}
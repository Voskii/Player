import React, { useContext, useEffect, useState} from 'react'
import { GameContext } from '../context/GameProvider.js'


export default function CharSelect(){
    const {inventory, setInventory, enemies, setEnemies, players, setPlayers, setChosen, chosen, userState, setUserState, index, scene, setIndex, walk, setWalk, welcome, setWelcome} = useContext(GameContext)
    
    const disOne = (char) => {
        console.log(char)
        // setChosen(char)
        setUserState(prev => ({
            ...prev,
            facing_sprite: char.pf,
            walking_sprite: char.pw, 
            attacking_sprite: char.pa
        }))
        setWalk(!walk)
        setWelcome(false)
        setIndex(prev => prev+1)
    }
    
    const mapMe = players.map((char, index) => <img key={index} onClick={() => disOne(char)} src={char.pw} className=''/>)
    
    return (

        <div>{mapMe}</div>

    )
}

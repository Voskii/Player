import React, { createContext, useState } from 'react'
import voskiF from '../images/voskifacing.gif'
import voskiA from '../images/voskiattack.gif'
import voskiW from '../images/voskiwalking.gif'
import cassieF from '../images/cassiefacing.png'
import cassieA from '../images/cassieattacking.gif'
import cassieW from '../images/cassiewalking.gif'
import cassieFf from '../images/cassiefacing.png'
import cassieAf from '../images/cassieattacking.gif'
import cassieWf from '../images/cassiewalking.gif'

const GameContext = createContext()

export default function GameProvider(props){
  
    const fish = 'context worky'
    const [inventory, setInventory] = useState([])
    const [enemies, setEnemies] = useState([{ name: 'CAPTAIN CASSIE', health: 150, item: 'the HIDDEN YouTube dislike button', min: 25, max: 35, _id: 0, facing_sprite: cassieF, walking_sprite: cassieW, attacking_sprite: cassieA  } , { name: "JACOB 'THE PEACEKEEPER'", health: 150, item: 'order 66', min: 38, max: 42, _id: 1 , facing_sprite: voskiF, walking_sprite: voskiW, attacking_sprite: voskiA} , { name: 'Ty Rex', health: 150, item: 'Unbreakable Will', min: 25, max: 35, _id: 2 , facing_sprite: voskiF, walking_sprite: voskiW, attacking_sprite: voskiA } , { name: 'CAPTAIN CASSIE FADE', health: 280, item: "Snow White's Apple", min: 30, max: 50 , _id: 3 , facing_sprite: cassieFf, walking_sprite: cassieWf, attacking_sprite: cassieAf } , { name: "JACOB 'THE PEACEKEEPER' FADE", health: 280, item: "Thanos' Gauntlet Snap", min: 50, max: 65, _id: 4  , facing_sprite: voskiF, walking_sprite: voskiW, attacking_sprite: voskiA} , { name: 'Ty Rex FADE', health: 300, item: 'Breakable Will', min: 35, max: 50, _id: 5 , facing_sprite: voskiF, walking_sprite: voskiW, attacking_sprite: voskiA }])
  return (
    <GameContext.Provider value={{
          inventory,
          setInventory,
          enemies,
          setEnemies
      }}>
        {props.children}
    </GameContext.Provider>
  )
}

export  { GameProvider, GameContext }

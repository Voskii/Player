import React, { createContext, useState } from 'react'

const GameContext = createContext()

export default function GameProvider(props){
  
    const fish = 'context worky'
    const [inventory, setInventory] = useState([])

  return (
    <GameContext.Provider value={{
          inventory,
          setInventory
      }}>
        {props.children}
    </GameContext.Provider>
  )
}

export  { GameProvider, GameContext }

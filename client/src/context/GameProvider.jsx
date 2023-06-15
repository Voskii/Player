import React, { createContext, useState } from 'react'
import voskiF from '../images/voskifacing.gif'
import voskiA from '../images/voskiattack.gif'
import voskiW from '../images/voskiwalking.gif'
import cassieF from '../images/cassiefacing.png'
import cassieA from '../images/cassieattack.gif'
import cassieW from '../images/cassiewalking.gif'
import cassieFf from '../images/cassieffacing.png'
import cassieAf from '../images/cassiefattack.gif'
import cassieWf from '../images/cassiefwalking.gif'
import jacobF from '../images/jacobfacing.png'
import jacobA from '../images/jacobattack.gif'
import jacobW from '../images/jacobwalking.gif'
import jacobFf from '../images/jacobffacing.png'
import jacobAf from '../images/jacobfattack.gif'
import jacobWf from '../images/jacobfwalking.gif'
import tyrexF from '../images/tyrexfacing.png'
import tyrexA from '../images/tyrexattack.gif'
import tyrexW from '../images/tyrexwalking.gif'
import tyrexFf from '../images/tyrexffacing.png'
import tyrexAf from '../images/tyrexfattack.gif'
import tyrexWf from '../images/tyrexfwalking.gif'
import p1f from '../images/p1f.png'
import p1a from '../images/p1a.gif'
import p1w from '../images/p1w.gif'
import p2f from '../images/p2f.png'
import p2a from '../images/p2a.gif'
import p2w from '../images/p2w.gif'
import p3f from '../images/p3f.png'
import p3a from '../images/p3a.gif'
import p3w from '../images/p3w.gif'
import p4f from '../images/p4f.png'
import p4a from '../images/p4a.gif'
import p4w from '../images/p4w.gif'

const GameContext = createContext()

export default function GameProvider(props){
  
    const fish = 'context worky'
    const [inventory, setInventory] = useState([])
    const [players, setPlayers] = useState([{ pf: p1f, pa: p1a, pw: p1w }, { pf: p2f, pa: p2a, pw: p2w }, { pf: p3f, pa: p3a, pw: p3w }, { pf: p4f, pa: p4a, pw: p4w }])
    const [enemies, setEnemies] = useState([{ name: 'CAPTAIN CASSIE', health: 150, item: 'the HIDDEN YouTube dislike button', itemDesc: 'lol', min: 25, max: 35, _id: 0, facing_sprite: cassieF, walking_sprite: cassieW, attacking_sprite: cassieA  } , { name: "JACOB 'THE PEACEKEEPER'", health: 150, item: 'order 66', itemDesc: 'Upon use, will immediately relieve a random boss of their life, and treasure', min: 38, max: 42, _id: 1 , facing_sprite: jacobF, walking_sprite: jacobW, attacking_sprite: jacobA} , { name: 'Ty Rex', health: 150, item: 'Unbreakable Will' , itemDesc: 'You feel unkillable around this scroll', min: 25, max: 35, _id: 2 , facing_sprite: tyrexF, walking_sprite: tyrexW, attacking_sprite: tyrexA } , { name: 'CAPTAIN CASSIE FADE', health: 280, item: "Snow White's Apple", itemDesc: 'Feeling sleepy?', min: 30, max: 50 , _id: 3 , facing_sprite: cassieFf, walking_sprite: cassieWf, attacking_sprite: cassieAf } , { name: "JACOB 'THE PEACEKEEPER' FADE", health: 280, item: "Thanos' Gauntlet Snap" , itemDesc: 'Surely this removes half of something..', min: 50, max: 65, _id: 4  , facing_sprite: jacobFf, walking_sprite: jacobWf, attacking_sprite: jacobAf} , { name: 'Ty Rex FADE', health: 300, item: 'Breakable Will', itemDesc: `The scroll reads 'Dooms door'`, min: 35, max: 50, _id: 5 , facing_sprite: tyrexFf, walking_sprite: tyrexWf, attacking_sprite: tyrexAf }])
    const [userState, setUserState] = useState({info: '', health: 2350, facing_sprite: '', walking_sprite: '', attacking_sprite: ''})
    const [index, setIndex] = useState(0)
    const [welcome, setWelcome] = useState(true)
    const [walk, setWalk] = useState(false)
    

    return (
    <GameContext.Provider value={{
          inventory,
          setInventory,
          enemies,
          setEnemies,
          players,
          setPlayers,
          userState,
          setUserState,
          index,
          setIndex,
          welcome,
          setWelcome,
          walk,
          setWalk
      }}>
        {props.children}
    </GameContext.Provider>
  )
}

export  { GameProvider, GameContext }

import React, { useContext, useState} from 'react'
import TodoForm from './TodoForm.jsx'
import TodoList from './TodoList.jsx'
import Todo from './Todo.jsx'
import Welcome from './Welcome.jsx'
import BossFight from './BossFight.jsx'
import { UserContext } from '../context/UserProvider.jsx'
import { GameContext } from '../context/GameProvider.jsx'

export default function GameOver(){
    console.log(`game over comp`)
    return (
        <div>
            <div style={{textAlign: 'center'}}>
                <h1 className="game-over-text">GAME OVER</h1>
                <h2 className="battle-text">Lumpy Toast decapitates you lol - 'BAAAAAAAABE BAAABE, SMOOTH TOAST I GOT US DUNNUH!!! AND IT DEFEATED, I MEAN I DEFEATED ALL THOSE MONSTERS THAT SOLE OUR TREASURE!'</h2>
                <form>
                    <button className="game">Resterrt</button>
                </form>
            </div>
        </div>
    )
}
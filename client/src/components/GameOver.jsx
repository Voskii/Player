import React, { useContext, useState} from 'react'
import TodoForm from './TodoForm.jsx'
import TodoList from './TodoList.jsx'
import Todo from './Todo.jsx'
import Welcome from './Welcome.jsx'
import BossFight from './BossFight.jsx'
import { UserContext } from '../context/UserProvider.jsx'
import { GameContext } from '../context/GameProvider.jsx'
import Credits from './Credits.jsx'

export default function GameOver(){
    console.log(`game over comp`)
    return (
        <div>
            <div style={{textAlign: 'center'}}>
                <h1 className="game-over-text">GAME OVER</h1>
                <Credits />
                <form>
                    <button className="game">Resterrt</button>
                </form>
                
            </div>
        </div>
    )
}
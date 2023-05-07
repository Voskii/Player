import React, { useContext, useState} from 'react'
import TodoForm from './TodoForm.js'
import TodoList from './TodoList.js'
import Todo from './Todo.js'
import Welcome from './Welcome.js'
import BossFight from './BossFight.js'
import { UserContext } from '../context/UserProvider.js'
import { GameContext } from '../context/GameProvider.js'

export default function GameOver(){
    console.log(`game over comp`)
    return (
        <div>
            <div style={{textAlign: 'center'}}>
                <h1 className="game-over-text">GAME OVER</h1>
                <form>
                    <button className="game">Resterrt</button>
                </form>
            </div>
        </div>
    )
}
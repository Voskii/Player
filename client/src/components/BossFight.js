import React, { useEffect, useState } from "react";

export default function BossFight(props){
    const {enemy, username, userState, setUserState, pummel, setPummel, bossState, setBossState, walk, setWalk, enemies, setEnemies, inventory, setInventory} = props
    let key = 0
    const [gameOver, setGameOver] = useState(false)
    //map over following array
    const [battleText, setBattleText] = useState([`${enemy.name} Appeared`])
    const [isRunning, setIsRunning] = useState(false)
    const [dub, setDub] = useState(false)
    // const maybeRun = readline.question(" Push 'r' to run away, Push 'f' GIVE'EM HELL: ");

    const tryRun = () => {
        
        const num = Math.random();
        if(num > 0.5){
            //go back to walking state
            console.log(`RUN func - ran`)
            const rNum = Math.ceil(Math.random() * (enemy.max - enemy.min) + enemy.min)
            setUserState(prev => {
                return ({
                    ...prev,
                    health: prev.health -= rNum
                })
            })
            setBattleText(prev => [
                ...prev,
                `${username} made it away but took ${rNum} dmg`
            ])
            setIsRunning(!isRunning)
            return
        } else if (num < 0.5){
            //start fight
            console.log(`RUN func - boned`)
            const rNum = Math.ceil(Math.random() * (enemy.max - enemy.min) + enemy.min)
            setUserState(prev => {
                return ({
                    ...prev,
                    health: prev.health -= rNum
                })
            })
            setBattleText(prev => [
            ...prev,
            `${username} tried to run, ${enemy.name} slaps for ${rNum} reducing ${username}'s HP to ${userState.health - rNum} lol`
            ])
        }
    }

    const running = () => {
        const rNum = Math.ceil(Math.random() * (enemy.max - enemy.min) + enemy.min)
        setBattleText(prev => [
            ...prev,
            `${enemy.name} slaps ${username} for ${rNum} reducing ${username}HP to ${userState.health - (rNum*rNum)}`
        ])
        setPummel(!pummel)
        setWalk(!walk)
    }

    const throatPunch = () => {

        const rNumBoss = Math.ceil(Math.random() * (enemy.max - enemy.min) + enemy.min)
        const rNumPlayer = Math.ceil(Math.random() * (enemy.max - enemy.min) + enemy.min)
        setBossState(prev => {
            return ({
                ...prev,
                health: prev.health -= rNumPlayer
            })
        })
        setBattleText(prev => [
            ...prev,
            `${username} slaps ${enemy.name} for ${rNumPlayer} reducing ${enemy.name} to ${bossState.health}HP`

        ])
        setUserState(prev => {
            return ({
                ...prev,
                health: prev.health -= rNumBoss
            })
        })
        setBattleText(prev => [
        ...prev,
        `  ${enemy.name} slaps ${username} for ${rNumBoss} reducing ${username}'s HP to ${userState.health} lol`
        ])
//cant render battleText during fight function, current state is behind
    }

    const restart = () => {
        // alert('BETTER LUCK NEXT TIME PAL')
    }

    const prog = () => {
        setDub(false)
        setInventory(prev => [
            ...prev,
            {item: bossState.item}
        ])
        setEnemies(enemies.filter(meanie => meanie._id !== enemy._id))
        setWalk(true)
        setPummel(false)
    }

    useEffect(() => {
    
                if(userState.health <= 0 ){
                setGameOver(true)
            } else if (bossState.health <= 0){
                setDub(!dub)
            }
            },[userState.health] || [bossState.health])

    return (
        <div >
            <div className="battle-container">
                {battleText.map(line => <h4 className='battle-text' key={key++}>{line}</h4>)}
                {!gameOver && !dub &&
                    <div>
                        {isRunning ?
                            <button onClick={running} className="game">Peace</button>
                        :
                            <div>
                                <button onClick={tryRun} className="game">Run</button>
                                <button onClick={throatPunch} className="game">Throat Punch</button>
                            </div>
                        }
                        
                    </div>
                }
            </div>
                {gameOver &&
                    <div style={{textAlign: 'center'}}>
                        <h1>GAME OVER</h1>
                        <form onSubmit={restart}>
                            <button className="game">Resterrt</button>
                        </form>
                    </div>
                }
                {dub && 
                    <div style={{textAlign: 'center'}}>
                        <h1>You Won!</h1>
                        <button onClick={prog} className="game">Sweet</button>
                    </div>
                }
        </div>
    )
}

// if (maybeRun === "r") {
//     if(tryRun > 0.5){
//         health -= Math.ceil(Math.random() * (enemy.max - enemy.min) + enemy.min);
//         console.log(enemy.name + ' swiped you. Your HP is now ' + health);
//         console.log("Lumpy toast teleported you both to safety and made you sign a written agreement for promised labor in the near future 'Ya Schmuck'");
//         readline.keyInPause();
//         return
//     }else if(tryRun < 0.5){
//         console.log(enemy.name + " ATTACKS!");
//         health -= Math.ceil(Math.random() * (enemy.max - enemy.min) + enemy.min);
//         console.log("Your hp is now " + health);
//         readline.keyInPause();
//         return bossFight(enemy);
//     }
//     }else if(maybeRun === "f"){
//         return bossFight(enemy);
// }
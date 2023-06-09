import { set } from "mongoose";
import React, { useEffect, useState } from "react";
import lumpyl from '../images/lumpyl.gif'
import Credits from "./Credits.jsx";

export default function BossFight(props){
    const {enemy, username, userState, setUserState, pummel, setPummel, setDie, bossState, setBossState, walk, setWalk, enemies, setEnemies, inventory, setInventory, setUnbw} = props
    
    const [gameOver, setGameOver] = useState(false)
    const [lumpyWins, setLumpyWins] = useState(false)
    const [battleText, setBattleText] = useState([`${enemy.name} Appeared`])
    const [runAttack, setRunAttack] = useState(false)
    const [isRunning, setIsRunning] = useState(false)
    const [dub, setDub] = useState(false)
    const [index, setIndex] = useState(0)
    const [startFight, setStartFight] = useState(true)
    const [attack, setAttack] = useState(false)
    let key = 0
    const loot = bossState.item
    const wutLoot = bossState.itemDesc
    // const maybeRun = readline.question(" Push 'r' to run away, Push 'f' GIVE'EM HELL: ");
    // const scene = () => {
    //     console.log(`scene change`)
    //     setIndex(prev => prev+1)
    // }

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

                `${username} made it away but took ${rNum} dmg`
            ])
            setIsRunning(!isRunning)
            return
        } else if (num < 0.5){
            //start fight
            console.log(`RUN func - boned`)
            
                //setAttack state to true and enable boss fighting css ~500ms
            
            const rNum = Math.ceil(Math.random() * (enemy.max - enemy.min) + enemy.min)
            setUserState(prev => {
                return ({
                    ...prev,
                    health: prev.health -= rNum
                })
            })
            setBattleText(prev => [
            
            `${username} tried to run, ${enemy.name} slaps for ${rNum} reducing ${username}'s HP to ${userState.health - rNum} lol`
            ])
            setStartFight(false)
            setRunAttack(true)
            const id = setTimeout(() => setRunAttack(false), 1000)
            return function cleanup(){
                clearInterval(id)
            }
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
        
        console.log(`TP UserHP: ${userState.health}, BossHP: ${bossState.health}`)
        charsAttack()
        const rNumBossDmg = Math.floor(Math.random() * (enemy.max - enemy.min) + enemy.min)
        const rNumPlayerDmg = Math.floor(Math.random() * (enemy.max - enemy.min) + enemy.min)
        const chonkBoss = bossState.health -= rNumPlayerDmg
        const chonkMe = userState.health -= rNumBossDmg
        
        setBossState(prev => {
            return ({
                ...prev,
                health: chonkBoss
            })
        })
        setBattleText(prev => [
            
            `${username} slaps ${enemy.name} for ${rNumPlayerDmg} reducing ${enemy.name} to ${chonkBoss}HP`,
            `${enemy.name} slaps ${username} for ${rNumBossDmg} reducing ${username}'s HP to ${chonkMe}`

        ])
        console.log(`Player hit for ${rNumPlayerDmg}`)
        setUserState(prev => {
            return ({
                ...prev,
                health: chonkMe
            })
        })
        // setBattleText(prev => [
        // ...prev,
        // `${enemy.name} slaps ${username} for ${rNumBossDmg} reducing ${username}'s HP to ${chonkMe}`
        // ])
        
        setStartFight(false)
        console.log(`Boss hit for ${rNumBossDmg}`)
        console.log(`scene clicked:`, index)
    }

    const restart = () => {
        // alert('BETTER LUCK NEXT TIME PAL')
    }

    const prog = () => {
        console.log(`on dub click`, enemies.length)
        if(bossState.item === 'Unbreakable Will'){
            console.log(`inside setUnbw`)
            setUnbw(true)
        }
        if(enemies.length === 1){
            setLumpyWins(true)
            setGameOver(true) 
            
            return 
        }
        setDub(false)
        setInventory(prev => [
            ...prev,
            {item: bossState.item}
        ])
        setEnemies(enemies.filter(meanie => meanie._id !== enemy._id))
        setIndex(0)
        setStartFight(true)
        setWalk(true)
        setPummel(false)
    }

    const charsAttack = () => {
        //setAttack state to true and enable char fighting css ~500ms
        setAttack(true)
        const id = setTimeout(() => setAttack(false), 1000)
        return function cleanup(){
            clearInterval(id)
        }
        // setAttack(false)
    }

    useEffect(() => {
    
                if(userState.health <= 0 ){
                setGameOver(true)
            } else if (bossState.health <= 0){
                setDub(!dub)
            }
            },[userState.health] || [bossState.health])

    return (
        <div>
            <div className="">
                {!gameOver && !dub &&
                    <div className="">
                        {isRunning ?
                            <div className="running-container">
                                {!gameOver && battleText.map(line => <li className='battle-text bg1`' key={key++}>{line}</li>)}
                                <img src={userState.running_sprite} className='' style={{transform: ''}}/>
                                <button onClick={running} className="game bg4" >Peace</button>
                            </div>
                        :startFight && !isRunning ?
                            <div className="boss-card-container">
                                {/* {!gameOver && battleText.map(line => <li className='battle-text boss-card-c1`' key={key++}>{line}</li>)} */}
                                
                                <img src={bossState.facing_sprite} className='boss-card-c2 boss-card-boss' style={{transform: 'scale(2)'}}/>
                                <div className="game boss-card-c1">
                                    <h4><span style={{fontFamily: 'Cyberway Riders', fontSize: '2em', color: 'aqua'}}>{bossState.name}</span> Appeared!</h4>
                                    <h4>Atk: <span style={{fontFamily: 'Cyberway Riders', fontSize: '1.5em', color: 'aqua'}}>{bossState.min} - {bossState.max}</span></h4>
                                    <h4>Hp: <span style={{fontFamily: 'Cyberway Riders', fontSize: '2em', color: 'aqua'}}>{bossState.health}</span></h4>
                                    <button onClick={tryRun} className="game" style={{transform: 'scale(.7)'}}>Run</button>
                                    <button onClick={throatPunch} className="game" style={{transform: 'scale(.7)'}}>Throat Punch</button>
                                </div>
                                
                            </div>
                        :!startFight && !isRunning &&
                            <div className="battle-container">
                                {!gameOver && battleText.map(line => <li className='battle-text btext`' key={key++}>{line}</li>)}
                                {!runAttack ? 
                                    <img src={attack? bossState.attacking_sprite : bossState.facing_sprite} className={attack? 'bg4 batk' : 'bg4'}/>
                                :
                                    <img src={bossState.attacking_sprite} className='bg4 batk' />
                                }
                                <button onClick={tryRun} className="game bg1" style={{transform: 'scale(.5)'}}>Run</button>
                                <button onClick={throatPunch} className="game bg2" style={{transform: 'scale(.5)'}}>Throat Punch</button>
                                <img src={attack? userState.attacking_sprite : userState.facing_sprite} className={attack? 'bg3 patk' : 'bg3'}/>
                            </div>
                        }
                    </div>
                }
            </div>
                {gameOver &&
                    <div style={{textAlign: 'center', paddingTop: '80px'}}>
                        <h1 className="game-over-text">GAME OVER</h1>
                        
                        {lumpyWins && <h2 className="">Lumpy Toast decapitates you lol - 'BAAAAAAAAAAAAABE BAAAAAAABE, SMOOTH TOAST I GOT US DUNNUH!!! AND IT'S GOT ALL OUR STUFF THOSE ANGRY BOSSES STOLE FROM US!'</h2>}
                        <img src={lumpyl} className="lumpyl"/>
                        <form onSubmit={restart}>
                            <button className="game" style={{fontFamily: 'Cyberway Riders', fontSize: '1.5em', color: 'aqua'}}>Resterrt</button>
                        </form>
                        <Credits />
                    </div>
                }
                {dub && !gameOver &&
                    <div className="winning">
                        <h1>You survived!</h1>
                        <h3><span style={{fontFamily: 'Cyberway Riders', fontSize: '2em', color: 'aqua'}}>{loot}</span> falls to the ground</h3>
                        <div className="lumpyWin">
                            <h3 className="wutLoot">"{wutLoot}"</h3>
                            <img src={lumpyl} className="lumpyl"/>
                        </div>
                        <button onClick={prog} className="game" style={{transform: 'scale(.5)'}}>Sweet</button>
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
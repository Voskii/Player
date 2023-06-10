import React, { useContext, useEffect, useState} from 'react'
import TodoForm from './TodoForm.js'
import TodoList from './TodoList.js'
import Todo from './Todo.js'
import Welcome from './Welcome.js'
import BossFight from './BossFight.js'
import GameOver from './GameOver.js'
import { UserContext } from '../context/UserProvider.js'
import { GameContext } from '../context/GameProvider.js'
import playerWalk from "../images/playerwalking.gif"
import playerF from '../images/playerfacing.png'
import playerA from '../images/playerattacking.gif'



export default function Game(){
  const {inventory, setInventory, enemies, setEnemies} = useContext(GameContext)
  const { user: {username}, addTodo, todos} = useContext(UserContext)
  const [whatsBag, setWhatsBag] = useState(false)
  const [userState, setUserState] = useState({info: '', health: 2350, facing_sprite: {playerF}, walking_sprite: {playerWalk}, attacking_sprite: {playerA}})
  const [bossState, setBossState] = useState({})
  const [itemPower, setItemPower] = useState()
  const [boss, setBoss] = useState('')
  
  console.log('BAG:', inventory, 'BOSSES', enemies)
  const [welcome, setWelcome] = useState(true)
  const [walk, setWalk] = useState(false)
  const [pummel, setPummel] = useState(false)
  const [index, setIndex] = useState(0)
  const [numba, setNumba] = useState(0)
  const [unbw, setUnbw] = useState(false)
  const [die, setDie] = useState(false)
  const [endGame, setEndGame] = useState(false)
  const [buttArr, setButtArr] = useState(['Walk Again..','walk again lol','its Friday night 5/5/23 hurry up','really','I didnt want SALMON'])
  // const enemies = [{ name: 'CAPTAIN CASSIE', health: 150, item: 'the HIDDEN YouTube dislike button', min: 25, max: 35  } , { name: "JACOB 'THE PEACEKEEPER'", health: 150, item: 'order 66', min: 38, max: 42  } , { name: 'Ty Rex', health: 150, item: 'Unbreakable Will', min: 25, max: 35  } , { name: 'CAPTAIN CASSIE FADE', health: 280, item: "Snow White's Apple", min: 30, max: 50 } , { name: "JACOB 'THE PEACEKEEPER' FADE", health: 280, item: "Thanos' Gauntlet Snap", min: 50, max: 65 } , { name: 'Ty Rex FADE', health: 300, item: 'Breakable Will', min: 35, max: 50 }];
  const welMsg = [
    "You just woke up on a cliff edge overlooking a vast valley full of canyons, waterfalls, lakes, forest, and loud beast howls. You see, what appears to be, a floating head. No it's a piece of toast.. with lumps, and a really great hair line. Like, it's just so great and thick and long. No reason for anyone to pick fun at this amazing hair line",
    `Well ${username}, we're fu@$ed :). My name is Lumpy Toast and I smelled ya from a far so I thought I would see wth it was. I'll help you around since you seem lost. We should look for a giant f%^in leaf or something for shelter. I'm not taking you back to my place. My wife 'smooth Toast', wouldn't like you're smelly a%#`,
    "Let's beat it already, you need a shower. You can trust me, this way.."]
  const whatsApp = "Push 'w' to walk, Push 'i' for inventory, Push 'p' for stats: "

  const scene = () => {
      console.log('scene clicked')
      if(index === 2){
        setWalk(!walk)
        setWelcome(false)
      }
      setIndex(prev => prev+1)
  }
  
  const handleChange = (e) => {
    const {name, value} = e.target
    setUserState({
      [name]: value
    })
  }

//flip state buttArr around
  const chance = () => {
    setItemPower('')
    console.log('chance', enemies)
    const roll = Math.random();
    console.log("chance func ROLL:", roll);
      while (roll < 0.25){
        const thisBoss = enemies[Math.floor(Math.random()*enemies.length)]
        setBoss(thisBoss)
        setBossState(thisBoss)
        setWhatsBag(false)
          setPummel(!pummel)
          setWalk(!walk)
          //GAME GO HERE BOOBOO!! (what happens after woahBro is called)
          break;
      }
    setNumba(Math.floor(Math.random() * buttArr.length))
  }

  const restart = () => {

  }

  const popItem = (item, index) => {
    console.log(item, index)
    setWhatsBag(false)
    if(item === 'the HIDDEN YouTube dislike button'){
      setItemPower(`The YouTube dislike button is toxic AS FU$% and removes your pants from existence...'HAHA'`)
      setInventory(prev => prev.filter(index => index.item !== item))
  } else if(item === "order 66"){
      const rndBoss = enemies[Math.floor(Math.random() * enemies.length)]
      setItemPower(`You one shot ${rndBoss.name}, the force is strong with you `)
      setInventory(prev => prev.filter(index => index.item !== item))
      setEnemies(enemies.filter(meanie => meanie._id !== rndBoss._id))
  } else if(item === "Unbreakable Will"){
      setItemPower(`This is an unknown passive effect`)
  } else if(item === "Snow White's Apple"){
      setItemPower(`You attempt to eat Snow White's Apple, Lumpy toast - 'My brother in christ, no time for naps!`)
      setInventory(prev => prev.filter(index => index.item !== item))
  } else if(item === "Thanos' Gauntlet Snap"){
    
    setUserState(prev => {
        return ({
            ...prev,
            health: prev.health * .5
        })
    })
      setItemPower(`You are a thicc ${userState.health * .5}HP . You wrestle on Thanos' gauntlet and snap your fingers ${userState.health} ...you've lost half your HP. *Lumpy Toast laughs*`)
      setInventory(prev => prev.filter(index => index.item !== item))
      //below is prob the issue line 106
  } else if(item === "Breakable Will" && unbw){
      setItemPower("Breakable will attempts to kill you but the passive effect from Unbreakable will take your place. Both items wither away.");
      // setInventory(prev => prev.filter(index => index.item !== item || 'Unbreakable Will'))
      setInventory(prev => prev.filter(function(index){
        return index.item !== item && index.item !== 'Unbreakable Will'
      }))
  }  else if(item === "Breakable Will"){
      setItemPower("Breakable will stops your heart. ");
      setDie(true)
      setWalk(false)
  }   
  }
  let key = 0
  const mapMe = inventory.map(item => <li key={key++} onClick={() => popItem(item.item, key++)}>{item.item}</li>)
  const breakableWill = () => {
    setItemPower("Lumpy Toast - 'BAAAAAAAAAAAAABE BAAAAAAABE, SMOOTH TOAST I GOT US DUNNUH!!! AND IT'S GOT ALL OUR STUFF THOSE ANGRY BOSSES STOLE FROM US!'")
    
    setEndGame(true)
  }
  console.log(`UserHP: ${userState.health}, BossHP: ${bossState.health}`)


//   useEffect(() => {


// },[userState.health] || [bossState.health])

  return (
    <section className="game game-container wrap">
      
        {welcome && <Welcome username={username} welMsg={welMsg} userState={userState} handleChange={handleChange} scene={scene} index={index}/>}
        <div>
        {walk && !die && !endGame ?
          <div className='walking'>
            
              {itemPower? 
                <h3 className='wg1'>{itemPower}</h3>
              :
                <h1 className='wg1'>...Walking...</h1>
              }
              <button onClick={chance} className="game chanceButt">{buttArr[numba]}</button>
              <img src={playerWalk} className='playerChar wg3'/>
              {inventory[0] !== undefined &&
                <div className='wg4'>
                  <button onClick={() => setWhatsBag(!whatsBag)} className="game">Bag</button>
                  {whatsBag && <ul className=''>{mapMe}</ul>}
                </div>
              }
              
          </div>
        : die && !walk && !endGame ?
            <div>
              <h3>{itemPower}</h3>
              <button onClick={() => breakableWill()} className="game">Oh S%&*</button>
            </div>
        : die && endGame && !walk &&
          <div>
            {itemPower && <h3>{itemPower}</h3>}
            <GameOver />
          </div>
        }
        {pummel && <BossFight restart={restart} username={username} enemy={boss} userState={userState} setUserState={setUserState} pummel={pummel} setPummel={setPummel} bossState={bossState} setBossState={setBossState} walk={walk} setWalk={setWalk} enemies={enemies} setEnemies={setEnemies} inventory={inventory} setInventory={setInventory} setUnbw={setUnbw} setDie={setDie}/>}
      </div>
    </section>
  )
}

// export default function Game(){
//   const { user: { username}, addTodo, todos} = useContext(UserContext)
//   return (
//     <div className="game game-container">
//       <h1>Welcome @{username}!</h1>
//       <h3>Add A Todo</h3>
//       <TodoForm addTodo={addTodo}/>
//       <h3>Your Todos</h3>
//       <TodoList todos={todos}/>
//     </div>
//   )
// }
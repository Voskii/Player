import React, { useContext, useState} from 'react'
import TodoForm from './TodoForm.js'
import TodoList from './TodoList.js'
import Todo from './Todo.js'
import Welcome from './Welcome.js'
import { UserContext } from '../context/UserProvider.js'


export default function Game(){
  const { user: {username}, addTodo, todos} = useContext(UserContext)
  const [whatsBag, setWhatsBag] = useState([])
  const [userState, setUserState] = useState({info: ''})
  const [welcome, setWelcome] = useState(true)
  const [goAway, setGoAway] = useState(false)
  const [walk, setWalk] = useState(false)
  const [pummel, setPummel] = useState(false)
  const [index, setIndex] = useState(0)
  const [numba, setNumba] = useState(0)
  const [buttArr, setButtArr] = useState(['Walk Again..','walk again lol','its Friday night 5/5/23 hurry up','really','I didnt want SALMON'])
  const enemies = [{ name: 'CAPTAIN CASSIE', health: 150, item: 'the HIDDEN YouTube dislike button', min: 25, max: 35  } , { name: "JACOB 'THE PEACEKEEPER'", health: 150, item: 'order 66', min: 38, max: 42  } , { name: 'Ty Rex', health: 150, item: 'Unbreakable Will', min: 25, max: 35  } , { name: 'CAPTAIN CASSIE FADE', health: 280, item: "Snow White's Apple", min: 30, max: 50 } , { name: "JACOB 'THE PEACEKEEPER' FADE", health: 280, item: "Thanos' Gauntlet Snap", min: 50, max: 65 } , { name: 'Ty Rex FADE', health: 300, item: 'Breakable Will', min: 35, max: 50 }];
  const welMsg = [
    "You just woke up on a cliff edge overlooking a vast valley full of canyons, waterfalls, lakes, forest, and loud beast howls. You see, what appears to be, a floating head. No it's a piece of toast.. with lumps, and a really great hair line. Like, it's just so great and thick and long. No reason for anyone to pick fun at this amazing hair line",
    `Well ${username}, we're fu@$ed :). My name is Lumpy Toast and I smelled ya from a far so I thought I would see wth it was. I'll help you around since you seem lost. We should look for a giant f%^in leaf or something for shelter. I'm not taking you back to my place. My wife 'smooth Toast', wouldn't like you're smelly a%#`,
    "Let's beat it already, you need a shower 'Push w'"]
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

//flip state buttArr around with string method
  const chance = () => {
    const roll = Math.random();
    console.log("chance func");
      while (roll < 0.25){
          woahBro();
          //GAME GO HERE BOOBOO!! (what happens after woahBro is called)
          break;
      }
    setNumba(Math.floor(Math.random() * buttArr.length))
  }



  console.log(userState)

  return (
    <div className="game game-container">
      {welcome && <Welcome username={username} welMsg={welMsg} {...userState} handleChange={handleChange} scene={scene} index={index}/>}
      {walk && 
        <div>
          <h1>...Walking...</h1>
          <button onClick={chance}>{buttArr[numba]}</button>
        </div>
      }
    </div>
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
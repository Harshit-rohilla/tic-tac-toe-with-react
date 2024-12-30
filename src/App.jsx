import {useState} from "react"
import {toast} from "react-hot-toast"
function App(){
  const [chance, setChance]=useState('X')
  const [allBoxes,setAllBoxes]=useState([null,null,null,null,null,null,null,null,null])
  function mark(value,index){
    if(value===null && chance==='X'){
      let newAllBoxes=[...allBoxes]
      newAllBoxes[index]='X'
      setAllBoxes(newAllBoxes)
      setChance('O')
      if((newAllBoxes[0]===newAllBoxes[1] && newAllBoxes[1]===newAllBoxes[2] && newAllBoxes[1]!=null) || (newAllBoxes[3]===newAllBoxes[4] && newAllBoxes[4]===newAllBoxes[5] && newAllBoxes[3]!=null) || (newAllBoxes[6]===newAllBoxes[7] && newAllBoxes[7]===newAllBoxes[8] && newAllBoxes[8]!=null) || (newAllBoxes[0]===newAllBoxes[3] && newAllBoxes[3]===newAllBoxes[6] && newAllBoxes[0]!=null) || (newAllBoxes[1]===newAllBoxes[4] && newAllBoxes[4]===newAllBoxes[7] && newAllBoxes[1]!=null) || (newAllBoxes[2]===newAllBoxes[5] && newAllBoxes[5]===newAllBoxes[8] && newAllBoxes[8]!=null) || (newAllBoxes[0]===newAllBoxes[4] && newAllBoxes[4]===newAllBoxes[8] && newAllBoxes[8]!=null) || (newAllBoxes[2]===newAllBoxes[4] && newAllBoxes[4]===newAllBoxes[6] && newAllBoxes[6]!=null)){
        toast.success("X WON")
        reset()
      }
    }
    else if(value===null && chance==='O'){
      let newAllBoxes=[...allBoxes]
      newAllBoxes[index]='O'
      setAllBoxes(newAllBoxes)
      setChance('X')
      if((newAllBoxes[0]===newAllBoxes[1] && newAllBoxes[1]===newAllBoxes[2] && newAllBoxes[1]!=null) || (newAllBoxes[3]===newAllBoxes[4] && newAllBoxes[4]===newAllBoxes[5] && newAllBoxes[3]!=null) || (newAllBoxes[6]===newAllBoxes[7] && newAllBoxes[7]===newAllBoxes[8] && newAllBoxes[8]!=null) || (newAllBoxes[0]===newAllBoxes[3] && newAllBoxes[3]===newAllBoxes[6] && newAllBoxes[0]!=null) || (newAllBoxes[1]===newAllBoxes[4] && newAllBoxes[4]===newAllBoxes[7] && newAllBoxes[1]!=null) || (newAllBoxes[2]===newAllBoxes[5] && newAllBoxes[5]===newAllBoxes[8] && newAllBoxes[8]!=null) || (newAllBoxes[0]===newAllBoxes[4] && newAllBoxes[4]===newAllBoxes[8] && newAllBoxes[8]!=null) || (newAllBoxes[2]===newAllBoxes[4] && newAllBoxes[4]===newAllBoxes[6] && newAllBoxes[6]!=null)){
        toast.success("O WON")
        reset()
      }
    }
  }
  function reset(){
    setAllBoxes([null,null,null,null,null,null,null,null,null])
    setChance('X')
  }
 
  return(
    <>
    <div className="flex flex-col bg-slate-950 h-screen w-full">
      <div className="w-full text-4xl text-purple-300 text-center font-semibold">tic-tac-toe</div>
      <div className="flex-1 grid grid-rows-[100px_100px_100px] grid-cols-[100px_100px_100px] place-content-center">
        {allBoxes.map((value,index)=>(<div key={index} onClick={()=>{mark(value,index)}} className={`grid place-content-center text-4xl font-semibold cursor-pointer text-purple-800 ${(index===1 || index===4 ||index===7)?"border-x-8 border-purple-300":""} ${(index===3 || index===4 ||index===5)?"border-y-8 border-purple-300":""}`}>{value}</div>))}
      </div>
      <button onClick={reset} className="fixed bottom-11 left-1/2 -translate-x-1/2 py-1 px-4 text-slate-700 bg-purple-300 rounded-md">RESET</button>
    </div>
    </>
  )
}
export default App
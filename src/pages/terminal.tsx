import { useState } from "react";

export const Terminal = ()=>{
    const [userInput , setUserInput] = useState(()=> "")
    const changeHandler =(event)=>{
        setUserInput(event.target.value)
    }
    const handleKeyDown = (event)=>{
        if(event.key == 'Enter'){
            console.log("Submitted")
            setUserInput(()=>"")
            event.target.value;
        }
    }


    return (
        <div id="terminal" className="bg-black w-full h-[150px] border border-white text-white font-mono p-[10px]">
            <div id="terminalOutput" ></div>
            <input onChange={changeHandler} onKeyDown={handleKeyDown} type="text" id="terminalInput" className="w-full bg-transparent border-none color-white outline-none font-mono" autoFocus></input>
        </div>
    ) 
}
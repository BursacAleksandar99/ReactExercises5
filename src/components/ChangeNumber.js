import { useState } from "react"
import { useContext } from "react";
import { AppContext } from "../App";
export const ChangeNumber = () => {
    const{setNumber} = useContext(AppContext); {/*Ne koristimo props, zbog AppContext-a koji
vec ima potrebne varijable i fje koje nama trebaju! */}
    const[newNumber, setNewNumber] = useState();
    return(
        <div>
            <input onChange={(event) => {setNewNumber(event.target.value)}}/>
            <button onClick={() => {setNumber(newNumber)}}>Change Number</button>
        </div>
    )
}
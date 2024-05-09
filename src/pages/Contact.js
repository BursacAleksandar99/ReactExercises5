import { useContext } from "react";
import { AppContext } from "../App";
import { ChangeNumber } from "../components/ChangeNumber"
export const Contact = () =>{
    const {number} = useContext(AppContext);
    return <h1>Number we want is: {number}
    <ChangeNumber /></h1>
}
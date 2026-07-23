import {useContext} from "react";
import userContext from "./UserContact.jsx";
function GrandChild(){
    const name=useContext(userContext);
    return <h2>{name}</h2>
}
export default GrandChild;
import {useEffect, useState} from "react";
import userContext from "./UserContact.jsx";
import Parent from "./Parent.jsx";
import "./Count.css";

function Count(){

    const [count , setCount]=useState(0);
    const [Mobile , BuyMobile]=useState(false);
    const [Lunch , FinishLunch]=useState("");
    useEffect(
        ()=>{
            document.title=`Count : ${count}`;
        },[count]
    )
    return(
        <>
            <h1 className="count">Count:{count}</h1>
            <div className="counting">
            <button onClick={
                ()=>setCount(count+1)
            }
            >
                +1
            </button>
            <button  onDoubleClick={
                ()=>setCount(count-1)
            }>
                -1
            </button>
            </div>
            <h2>phone:{Mobile ? "Andriod":"iphone"}</h2>
            <button onClick={
                ()=>BuyMobile(!Mobile)}>Change</button>
            <div>
                <h2>i ate  {Lunch} for Lunch.</h2>
                <input type="text" placeholder="peas curry with rice" value={Lunch}
                onChange={
                    (e)=>FinishLunch(e.target.value)
                }
                />
            </div>
            <userContext.Provider value="Akshaya">
                <Parent />
            </userContext.Provider>
        </>
    );

}

export default Count;
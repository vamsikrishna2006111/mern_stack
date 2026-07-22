import {usestate,usestate} from 'react';
import axios from 'axios';
function Api(){
    const API = "https://jsonplaceholder.typicode.com/posts/1";
    const [data,setData]=usestate([]);
    const[name,setName ]=usestate("");
    const[mail,setmail]=usestate("");
    useEffect(()=>{
        getuser();
    },[]);
    async funntion getusers(){
        try {
            const response=await axios.get(API);
            

        }
        catch(){

        }
    }
    return();
}
export default Api;
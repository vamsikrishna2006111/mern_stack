import React,{ useState } from "react";

function DB_connect()
{

    const [FormData,setFormData]=useState({
        name:'',
        email:'',
        message:''
    });
    const [Status,setStatus]=useState({
        type:'',
        msgs:''
       }
    );
    const[Loading,setLoading]=useState(false);
    const handleInputData =(e)=>{
        const {name,value}=e.target;
        setFormData(
            prev=>({
                ...prev,
                [name]:value
            })
        );
    };
    const handleSubmit=async(e)=>
    {
        e.preventDefaulf();
        setLoading(true);
        setStatus({
            type:'',
            msgs:''
        });
        try
        {
            const response=await fetch('',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(FormData)
            });
            const result=await response.json();
            if(response.ok)
            {
                setStatus({type:"Success",msgs:"Form submitted successfully"});
                setFormData({name:'',email:'',msgs:''})
            }
            else{
                setStatus({type:"Fail",msgs:"Submission Failed."});
            }
        }
        catch(error){
            setStatus({type:'error',msgs:"Could not connect to Localhost"})
        }
        finally
        {
            setLoading(false);
        }
        
    }
    return(
        <>
        <div>
            <h1>send message</h1>
            <form onSubmit={handleSubmit}>
                <label><b>Name:</b></label>
                <input type="text" name="name" value={FormData.name} required/>
                <label><b>email:</b></label>
                <input type="email" name="name" value={FormData.email} required/>
                <label><b>msgs:</b></label>
                <input type="text" name="message" value={FormData.message} required/>
                <button type="submit" disabled={Loading}>
                    submit
                </button>
            </form>
        </div>
        </>
    );
}
export default DB_connect;
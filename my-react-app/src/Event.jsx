function Event(){
    function press(e){
        
    }
    return(
        <>
        <div>
            <button onMouseOver={
                ()=>alert("Doremon Came...")
            }
            >
                Doremon
                </button>
                <button onMouseLeave={()=>
                    alert("nobitha has a problem.")
                }>
                    nobitha
                    
                    </button>        
                </div>
                

                
        </>
    );

}
export default Event;
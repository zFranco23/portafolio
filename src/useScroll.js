import { useEffect, useState } from "react";

const useScroll = ()=> {
        const[scroll,setScroll]=useState(false);

        useEffect(()=>{
            setScroll(false);
        },[])

        const updateScroll=()=>{
                if(window.scrollY>= document.getElementById("home").offsetHeight){
                    setScroll(true);
                }else{
                    setScroll(false);
                }
        }
        
        
        window.addEventListener("scroll",updateScroll);
        
        return scroll;
}

export default useScroll
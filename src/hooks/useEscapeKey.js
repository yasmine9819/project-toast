import React from "react";


 const useEscapeKey=(callback) => {

    React.useEffect(()=>{
        window.addEventListener("keydown", (e)=>{
          if(e.key=="Escape"){
            callback();
          }
        })
    
        return ()=>{
          window.removeEventListener("keydown");
        }
    
      },[])
};

export default useEscapeKey;
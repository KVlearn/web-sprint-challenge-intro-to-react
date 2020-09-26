import React from "react";
import { Button } from "reactstrap";

function NextButton({currentpage,setPagenum,lastPage,setLastPage,setFirstPage}){
  
    const handleNext=()=>{
        console.log('pagenum',currentpage);
        (currentpage === 5) ? setLastPage(true):
         setPagenum(currentpage+1)
         setFirstPage(false);
    }

    return(
        <div>
            <Button
             disabled={lastPage}
             onClick={(e)=>{
                e.preventDefault();
                handleNext();}}
            >Next</Button>
        </div>
    )
}

export default NextButton;
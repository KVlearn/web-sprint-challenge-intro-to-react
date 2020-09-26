import React from "react";
import { Button } from "reactstrap";

function PrevButton({currentpage,setPagenum,firstPage,setFirstPage,setLastPage}){

    const handleNext=()=>{
    console.log('pagenum',currentpage);
    (currentpage === 1) ? setFirstPage(true): 
    setPagenum(currentpage - 1);
    setLastPage(false);
    }

    return(
        <div>
            <Button
            disabled={firstPage}
            onClick={(e)=>{
                e.preventDefault();
                handleNext();}}
            >Prev</Button>
        </div>


    )


}

export default PrevButton;
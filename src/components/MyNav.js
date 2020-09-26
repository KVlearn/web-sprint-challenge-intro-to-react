import React from "react";
// import { Nav } from 'reactstrap';
import Nav from 'react-bootstrap/Nav'

function MyNav({setChoice}){
console.log('im in mynav')
return(
    
    <Nav variant="pills" defaultActiveKey="/home" 
        style={{justifyContent:"center"}}>
        <Nav.Item  >
        <Nav.Link className="navlink" href="/home">Characters</Nav.Link>
        </Nav.Item>
        
        <Nav.Item>
            <Nav.Link eventKey="link-1"
            className="navlink" 
            onSelect={(event)=>setChoice("planets")}
            >Planets</Nav.Link>
        </Nav.Item>
        
        <Nav.Item>
            <Nav.Link eventKey="link-2"
            className="navlink" 
            onSelect={(event)=>setChoice("starships")}
            >Starships</Nav.Link>
        </Nav.Item>
      </Nav> 
);
}
export default MyNav;




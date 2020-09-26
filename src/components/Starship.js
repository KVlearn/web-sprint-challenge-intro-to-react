import React,{useState} from "react";
import { Card,CardHeader, CardText,Col } from "reactstrap";
import {Container,Row} from "reactstrap";
 
function Starship({info}){
    const [searchText,setSearchText]=useState('');
     document.body.classList.remove('planet');
     document.body.classList.add('starship');
    //document.body.classList.replace('planet', 'starship');
return(
    <Container>
      <Row style={{display:"flex",flexFlow:"wrap",justifyContent:
    "space-evenly", margin:"0 auto"}}>
      {info.map((item,index) => {
        return (
            <Col key={index} xs="6" md="4" xl="2" style={{margin:"10px"}}>
            {/* <Card style={{ width:"200px",opacity:"70%",color:"black"}}> */}
            <Card className="starshipCard">
            <CardHeader tag="h4">{item.name}</CardHeader>
            <CardText>Manufacturer:{item.model}</CardText>
            <CardText>MGLT/Length:{item.MGLT}/{item.length}</CardText>
            <CardText>Max Atmosphering Speed:{item.max_atmosphering_speed}</CardText>
            <CardText>Hyperdrive Rating:{item.hyperdrive_rating}</CardText>
            <CardText>Cargo Capacity:{item.cargo_capacity} </CardText>
            <CardText>Cost in Credits:{item.cost_in_credits}</CardText>
            <CardText>Crew:{item.crew} </CardText>
            <CardText>Passengers:{item.passengers}</CardText>
          </Card>
        </Col>   
        );
      })}
      </Row>
     </Container>
);
}

export default Starship;
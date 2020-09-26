import React from "react";
import { Card,CardHeader, CardText,Col } from "reactstrap";
import {Container,Row} from "reactstrap";
import styled from 'styled-components';

function Starship({info}){
    // const [searchText,setSearchText]=useState('');
    document.body.classList.remove('planet');
    document.body.classList.add('starship');
    // document.body.classList.replace('planet', 'starship');
    const Swrap = styled.div`
    text-shadow: 1px 1px 3px white;
    font-family: Jura; 
    font-family: 'Droid', sans-serif;
    font-weight: bold;
    font-size: medium;
    opacity:70%;
    margin-top: 20px;
    padding:2% 8%;
   }
    `
    

return(
    <Swrap>
    <Container>
      <Row>
      {info.map((item,index) => {
        return (
            <Col key={index} xs="6" md="4" xl="2" style={{margin:"10px"}}>
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
     </Swrap>
);
}

export default Starship;
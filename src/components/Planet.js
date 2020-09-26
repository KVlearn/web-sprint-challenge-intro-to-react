import React,{useState} from "react";
import { Card,CardBody,CardHeader, CardText,Col } from "reactstrap";
import {Container,Row} from "reactstrap";


function Planet({info}){
    const [searchText,setSearchText]=useState('');
    document.body.classList.remove('starship');
    document.body.classList.add('planet');
return(
    <Container>
      <Row style={{display:"flex",flexFlow:"wrap",justifyContent:
    "space-evenly", margin:"0 auto"}} >
      {info.map(item => {
        return (
            <Col xs="6" md="4" xl="2" >
            <Card className="planetCard">
            <CardHeader tag="h4">{item.name}</CardHeader>
            <CardText>Rotation Period :{item.rotation_period}</CardText>
            <CardText>Climate :{item.climate}</CardText>
            <CardText>Terrain : {item.terrain}</CardText>
            <CardText>Gravity :{item.gravity} </CardText>
            <CardText>Surface Water:{item.surface_water}</CardText>
          </Card>
        </Col>   
        );
      })}
      </Row>
     </Container>
);
}

export default Planet;
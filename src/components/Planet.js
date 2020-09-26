import React from "react";
import { Card,CardHeader, CardText,Col } from "reactstrap";
import {Container,Row} from "reactstrap";
import styled from 'styled-components';


function Planet({info}){
    // const [searchText,setSearchText]=useState('');
    document.body.classList.remove('starship');
    document.body.classList.add('planet');

const Wrap = styled.div`
text-shadow: 1px 1px 2px snow;
font-family: 'Droid', sans-serif;
font-weight: bold;
font-style: italic;
font-size: 18px;
opacity:70%;
margin-top: 10px;
padding:5% 2.5%;
}
`

return(
    <Wrap>
    <Container>
      <Row >
      {info.map((item,index) => {
        return (
            <Col key={index} xs="6" md="4" xl="2" >
            <Card key={index} className="planetCard">
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
     </Wrap>
);
}

export default Planet;
// Write your Character component here
import React,{useState} from "react";
import { Card,CardHeader,Container, CardText,Col, Row} from "reactstrap";
import SearchText from './SearchText';


function Character({info}){
    const [searchText,setSearchText]=useState('');
    const handleSearch =(value)=>setSearchText(value);

    console.log('value in char',searchText);
return(
    <Container>
    <SearchText
    handleSearch={handleSearch}
    />

    <Row style={{display:"flex",flexFlow:"wrap",justifyContent:
    "space-evenly", margin:"0 auto"}}>
        {info
       .filter(item=>item.name.includes(searchText))
       .map(item => {
           return(
            <Col xs="6" md="4" xl="2" style={{margin:"15px",width:"20rem"}}>
               <Card className="charCard">
                  <CardHeader tag="h5">{item.name}</CardHeader>
                  <CardText className="charCard">I'm {item.eye_color} eyed! and {item.hair_color} Hair !</CardText>
                  <CardText className="charCard"> My Height:{item.height}</CardText>
                  <CardText className="charCard"> My Mass:{item.mass} </CardText>
               </Card>
           </Col>            
        );
      })
      }
    </Row>

    </Container>
 )
}

export default Character;
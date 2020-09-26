import React,{useState} from "react";
import Form from 'react-bootstrap/Form'

function SearchText({handleSearch}){

const [value,setValue]=useState('');
console.log(value);
return(

  <Form className="searchbar"
  onSubmit={(e)=>{
    console.log(value)
    e.preventDefault();
    setValue(value);
    handleSearch(value);
    setValue('');
    
  }}>
  
  <Form.Group controlId="formSearch">
    <Form.Label> May the Force be with you !</Form.Label>
    <Form.Control 
    type="text"
     placeholder="Search here..."
     onChange={(e)=>setValue(e.target.value)}
     value={value} />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  
  </Form>

  );
}
export default SearchText;

import React from 'react'
import {Form} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import './myCss.css'

const User = () => {
    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br> 
            <h1 style={{color:'red'}}>Please fill up this form</h1>
            <br></br>
            <br></br>
            <br></br>
            <Form style={{marginRight: 20 + 'em', marginLeft: 20 + 'em'}}>
            
                <Form.Group controlId="formBasicEmail" className="Group">
                    <Form.Label className= "form-label">Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" className="form-control"/>
                    
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="Group">
                    <Form.Label className= "form-label">Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" className="form-control" />
                </Form.Group>

                <Form.Group controlId="formBasicAddress"className="Group">
                    <Form.Label className= "form-label">address</Form.Label>
                    <Form.Control type="address" placeholder="address" className="form-control"/>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="switch" id="custom-switch"
    label="Check this switch"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default User;

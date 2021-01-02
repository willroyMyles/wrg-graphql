import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { setSyntheticTrailingComments } from 'typescript'

function Header() {

    const history = useHistory();
    
    return (
        <Container fluid className="header">
           <Container>
           <Row >
            <Col md={2}><span onClick={()=> history.push("/")} >WRG</span></Col>
            <Col />
            <Col md={2}><span onClick={()=> history.push("categories")} >Categories</span></Col>
            <Col />
        </Row>
           </Container>
        </Container>
    )
}

export default Header

const style : React.CSSProperties = {
    backgroundColor:"rgba(100,100,200,1)",
    padding: 15
}

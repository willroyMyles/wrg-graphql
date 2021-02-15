import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import { observer } from 'mobx-react';
import React from 'react'
import { Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { setSyntheticTrailingComments } from 'typescript'
import data_store from '../data-layer/store/data_manager';

function Header() {

    const history = useHistory();
    const bp = useBreakpoint();
    
    return (
        <Container fluid className="header">
           {/* <Container>
           <Row >
            <Col md={2}><span onClick={()=> history.push("/")} >WRG</span></Col>
            <Col />
            <Col md={2}><span onClick={()=> history.push("categories")} >Categories</span></Col>
            <Col />
            <Col md={2}><span onClick={()=> history.push("categories")} >Login</span></Col>
        </Row>
           </Container> */}


<Container>
<Navbar collapseOnSelect expand="lg">
  <Navbar.Brand className="header-link brand" ><span onClick={()=> history.replace("/")} >WRG</span></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto" />
      <Nav className="mr-auto">
      <Nav.Link className="header-link"><span onClick={()=> history.replace("/categories")} >Categories</span></Nav.Link>
    </Nav>
    <Nav >
{ data_store.jwt == "" &&  <Nav.Link className="header-link"><span onClick={()=> history.replace("/auth")} >Login</span></Nav.Link>}    
{ data_store.jwt != "" && <Nav.Link className="header-link"><span onClick={()=> history.replace("/profile")} >Profile</span></Nav.Link>}    
</Nav>
  </Navbar.Collapse>
</Navbar>
</Container>
        </Container>
    )
}

export default observer(Header)

const style : React.CSSProperties = {
    backgroundColor:"rgba(100,100,200,1)",
    padding: 15
}

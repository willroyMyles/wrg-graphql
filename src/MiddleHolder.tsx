import { Drawer } from 'antd'
import { observer } from 'mobx-react'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Route, Switch } from 'react-router-dom'
import ui_manager from './data-layer/store/ui_manager'
import Categories from './pages/Categories'
import Home from './pages/Home'
import Category from './templates/Category'


const MiddleHolder = observer(()  =>{

    const [num, setnum] = useState<number>(0)

    useEffect(() => {
        
       console.log(ui_manager.drawerVisible, "ui");
       
    }, [ui_manager.drawerVisible])
    return (
        <Container style={{overflowX:"hidden"}}>
        <Row>
          <Col md={2}></Col>
          <Col>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/categories" component={Categories} />
              <Route exact path="/category" component={Category} />
            </Switch>
        <Drawer 
        className="drawer"
        visible={ui_manager.drawerVisible}
        drawerStyle={{
            backgroundColor : "var(--pastel-bg)"
        }}
        onClose={()=>{
            ui_manager.drawerVisible= false
            setnum(10);
        }}
        placement="right"
          closable={true}
          getContainer={false}
          style={{ position: 'absolute' }}
          width={"100%"}
          destroyOnClose
        >
          {ui_manager.drawerNode}
        </Drawer>
          </Col>
        </Row>
        </Container>
    )
})

export default MiddleHolder

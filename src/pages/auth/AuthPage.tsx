import React, { useState } from 'react'
import { ButtonGroup, Card, Col, Row, ToggleButton } from 'react-bootstrap'
import Login from './Login'

const pages = () =>[
    {name :"login", value:1},
    {name :"register", value:2},
]


const AuthPage = () => {


    const [value, setValue] = useState<number>(0)

    return (
        <div>
           <Row>
               <Col />
               <Col  md={6}>
               <Card className="post-card" style={{minHeight:"50vh"}}>
                    <Login />
               </Card>
               </Col>
               <Col />

           </Row>
            
        </div>
    )
}

export default AuthPage

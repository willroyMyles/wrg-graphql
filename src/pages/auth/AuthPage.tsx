import React, { useState } from 'react'
import { ButtonGroup, Card, Col, Row, ToggleButton } from 'react-bootstrap'
import Login from './Login'
import Register from './Register'

const pages = () =>[
    {name :"login", value:1},
    {name :"register", value:2},
]


const AuthPage = () => {


    const [value, setValue] = useState<number>(0)

    const onChange = (index:number) => setValue(index);

    return (
        <div>
           <Row>
               <Col />
               <Col  md={6}>
               <Card className="post-card" style={{minHeight:"50vh"}}>
                   {value == 0 && <Login change={(index) => onChange(index)} />}
                   {value == 1 && <Register change={onChange}  />}
               </Card>
               </Col>
               <Col />

           </Row>
            
        </div>
    )
}

export default AuthPage

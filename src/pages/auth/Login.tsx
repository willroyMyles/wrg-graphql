import { Input, Space } from 'antd'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import FormControler from '../../components/FormControler'
import { Headliner } from '../../components/Typography'

const Login = () => {

    const { control, } = useForm();

    return (
        <div>
            <Row>
                <Headliner>Login</Headliner>

            </Row>
            <Row>
                <Col>
                    <FormControler
                        child={<Input className="inputs" bordered={false} placeholder="username or email" />}
                        control={control}
                        name="title"
                    />

                </Col>
            </Row>
            <div style={{height:30}} />
            <Row>
                <Col>
                    <FormControler
                        child={<Input className="inputs" type="password" bordered={false} placeholder="password" />}
                        control={control}
                        name="title"
                    />

                </Col>
            </Row>
            <div style={{height:30}} />
            <Row>
                <Col>
                    <div className="btn ">Login</div>
                </Col>
            </Row>
            <div style={{height:30}} />
            <Row>
                <Col>
                    <span className="muted">Dont have an account? </span><span className="action-link" onClick={() => console.log("greatness")}>we got you!</span>
                </Col> 
            </Row>
        </div>
    )
}

export default Login

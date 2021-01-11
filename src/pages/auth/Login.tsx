import { useMutation } from '@apollo/client'
import { Input, Space } from 'antd'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import FormControler from '../../components/FormControler'
import { Headliner } from '../../components/Typography'
import { LOGIN } from '../../data-layer/api/Queries'

interface FormProps{
    username:string
    password: string
}

const Login = ({change} : {change : (index:number)=>void }) => {

    const { control, handleSubmit, errors } = useForm<FormProps>();

    const [login, options] = useMutation(LOGIN)

    const onSubmit = (data:any) =>{
        const {username, password} = data;

        console.log(username, password);

        login({
            variables : {data : {identifier : username, password:password}}
        }).then(res=>{
            console.log(res);
            
        }).catch(err=>{
            console.log(err.graphQLErrors[0].extensions.exception.data.data[0].messages[0].message);
        })
        

    }

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
                        name="username"
                    />

                </Col>
            </Row>
            <div style={{height:30}} />
            <Row>
                <Col>
                    <FormControler
                        child={<Input  className="inputs" type="password" bordered={false} placeholder="password" />}
                        control={control}
                        name="password"
                    />

                </Col>
            </Row>
            <div style={{height:30}} />
            <Row>
                <Col>
                    <div onClick={()=> handleSubmit(onSubmit)()} className="btn ">Login</div>
                </Col>
            </Row>
            <div style={{height:30}} />
            <Row>
                <Col>
                    <span className="muted">Dont have an account? </span><span className="action-link" onClick={() => change(1)}>we got you!</span>
                </Col> 
            </Row>
        </div>
    )
}

export default Login

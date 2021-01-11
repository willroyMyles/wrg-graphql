import { Input } from 'antd';
import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import FormControler from '../../components/FormControler';
import { Headliner } from '../../components/Typography';
import Crypto from 'crypto'
import { useMutation, ApolloError } from '@apollo/client';
import { REGISTER } from '../../data-layer/api/Queries';


interface FormProps{
    username:string
    email:string
    password:string
    cpassword:string

}

const Register = ({change} : {change : (index:number)=>void }) => {
    const { control, handleSubmit, errors } = useForm<FormProps>();

    const [register, options] = useMutation(REGISTER,{
        errorPolicy:"ignore"
    })

    const onSubmit = (data : any) =>{
        console.log(data)
        const {username, email, password} = data;
        

        register({
            variables: {data: {username, email, password}}
        }).then(res=>{
            console.log(res.data, res.errors);

            if(res.data){
                //user created
            }else{
                //user already exsists it seems
            }
            
        }).catch(err =>{
            console.log(err)
            console.log(err.networkError.response);
            console.log(err.networkError.result);

            
        })
    }

    const classNamesErrors = "inputs input-errors"

    return (
        <div>
            <Row>
                <Headliner>Regiser</Headliner>

            </Row>
            <Row>
                <Col>
                    <FormControler
                        child={<Input className={errors.username ? classNamesErrors : "inputs"} bordered={false} placeholder="username" />}
                        control={control}
                        name="username"
                    />

                </Col>
            </Row>
            <div style={{height:30}} />
            <Row>
                <Col>
                    <FormControler
                        child={<Input className={errors.email ? classNamesErrors : "inputs"} bordered={false} placeholder="email" />}
                        control={control}
                        name="email"
                    />

                </Col>
            </Row>
            <div style={{height:30}} />
            <Row>
                <Col>
                    <FormControler
                        child={<Input 
                        type="password"
                        className={errors.password ? classNamesErrors : "inputs"} bordered={false} placeholder="password" />}
                        control={control}
                        name="password"
                    />

                </Col>
            </Row>
            <div style={{height:30}} />
            <Row>
                <Col>
                    <FormControler
                        child={<Input className={errors.cpassword ? classNamesErrors : "inputs"} type="password" bordered={false} placeholder="confirm password" />}
                        control={control}
                        name="cpassword"
                    />

                </Col>
            </Row>
            <div style={{height:30}} />
            <Row>
                <Col>
                    <div onClick={()=>{handleSubmit(onSubmit)()}} className="btn ">Register</div>
                </Col>
            </Row>
            <div style={{height:30}} />
            <Row>
                <Col>
                    <span className="muted">Already have an account? </span><span className="action-link" onClick={() => change(0)}>say no more!</span>
                </Col> 
            </Row>
        </div>
    )
}

export default Register

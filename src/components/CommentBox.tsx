import { useMutation } from '@apollo/client'
import { Input, Space } from 'antd'
import React, { Dispatch } from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { CREATE_COMMENT } from '../data-layer/api/Queries'
import FormControler from './FormControler'

const CommentBox = ({ visable, setVisible, id }: { visable: boolean, setVisible: Dispatch<boolean>, id:string }) => {


    const [createComment,  mutationOption] = useMutation(CREATE_COMMENT)

    const { control, handleSubmit } = useForm<{
        content: string
    }>()

    const executeCreation = (data:any) => {
        console.log(data);
        createComment({
            variables : {comment : {post : id, content: data["content"]}}
        })
        
    }

    if (!visable) return <div />

    return (
        <Card className="post-card" style={{ padding: 30 }}>
            <Row> avatar</Row>
            <div style={{height:15}} />
            <Row>
                <Col>
                    <FormControler
                        child={<Input.TextArea autoSize={{ minRows: 4, maxRows: 10 }} className="inputs" bordered={false} placeholder="content of comment..." />}
                        control={control}
                        name="content"
                    />
                </Col>
                <Col md={2}>
                    <div onClick={() => handleSubmit(executeCreation)()} className="btn outline btn-block" style={{justifySelf:"end"}}>send</div>
                    <div onClick={()=>setVisible(false)} className="btn outline btn-block" style={{justifySelf:"end"}}>close</div>
                </Col>
            </Row>
        </Card >
    )
}

export default CommentBox

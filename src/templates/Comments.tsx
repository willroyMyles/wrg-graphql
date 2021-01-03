import { useQuery } from '@apollo/client'
import { Comment, List } from 'antd'
import React, { useState } from 'react'
import { Row, Container, Col, Card } from 'react-bootstrap'
import { GET_COMMENTS } from '../data-layer/api/Queries'

const Comments = ({id} : {id:string}) => {

    const {loading, data} = useQuery(GET_COMMENTS,{
        variables :{id : id}
    })
    const [viewed, setviewed] = useState<boolean>(false)

    return (
        <Container style={{height:"80vh", overflowY:"scroll", border:"0px solid lightgrey",}}>
            {!viewed && <Row>
                <span className="btn btn-block" onClick={()=> setviewed(v => !v)}> view comments</span>
            </Row>}
            {viewed && <Row>
               <Card className="post-card" style={{width:"100%", padding:0}}>
               <List
               header={
                   <div>Comments</div>
               }
                style={{ height: "60vh", padding: 10 }}
                loading={loading}
                dataSource={data ? data.comments : []}
                grid={{ gutter: 10, xs: 1, sm: 1, md: 1, xl: 1, xxl: 1 }}
                renderItem={(item : any, index)=>{
                    return <List.Item>
                        <Comment 
                        className="comment-card" 
                            content={item["content"]}
                        />
                    </List.Item>
                }}

                /></Card>
            </Row>}
        </Container>
    )
}

export default Comments

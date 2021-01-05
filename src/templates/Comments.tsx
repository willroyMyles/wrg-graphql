import { useQuery } from '@apollo/client'
import { Comment, List } from 'antd'
import React, { useState } from 'react'
import { Row, Container, Col, Card } from 'react-bootstrap'
import { HintText } from '../components/Typography'
import { GET_COMMENTS } from '../data-layer/api/Queries'
import { getCreateAt } from '../helpers/Time_helper'


const getCommetStyle = (val : boolean) => val? "comment-card offer" : "comment-card"
const Comments = ({id} : {id:string}) => {

    const {loading, data} = useQuery(GET_COMMENTS,{
        variables :{id : id}
    })
    const [viewed, setviewed] = useState<boolean>(false)

    return (
        <Container style={{height:"80vh", overflowY:"scroll", border:"0px solid lightgrey",}}>
            {!viewed && <Row>
                <Col className="btn btn-block outline" onClick={()=> setviewed(v => !v)}> view comments</Col>
            </Row>}
            {viewed && <Row>
               <Card className="post-card" style={{width:"100%", padding:0}}>
               <List
               header={
                   <Container>
                       <Row>
                           <Col md={2} />
                           <Col>Comments</Col>
                           <Col md={2}>
                               <div className="btn outline">...</div>
                           </Col>
                       </Row>
                   </Container>
               }
                style={{ height: "80vh", padding: 10, overflowY:"scroll" }}
                loading={loading}
                dataSource={data ? data.comments : []}
                grid={{ gutter: 10, xs: 1, sm: 1, md: 1, xl: 1, xxl: 1 }}
                renderItem={(item : any, index)=>{
                    console.log(item["isOffer"]);
                    
                    return <List.Item>
                        <div className={getCommetStyle(item["isOffer"])}>
                            <Row>{item["content"]}</Row>
                            <Row><HintText>{getCreateAt(item)}</HintText></Row>
                        </div>
                    </List.Item>
                }}

                /></Card>
            </Row>}
        </Container>
    )
}

export default Comments

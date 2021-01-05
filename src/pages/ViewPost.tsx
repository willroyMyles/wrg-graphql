import { useMutation } from '@apollo/client'
import Paragraph from 'antd/lib/typography/Paragraph'
import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu'
import { useLocation, useParams } from 'react-router-dom'
import BackBtn from '../components/BackBtn'
import BreadCrumbs from '../components/BreadCrumb'
import CommentBox from '../components/CommentBox'
import { HintText } from '../components/Typography'
import { GET_POST, UPDATE_POST } from '../data-layer/api/Queries'
import Comments from '../templates/Comments'

const ViewPost = () => {
    const location = useLocation<any>()
    const params: any = useParams()
    const item = location.state["post"];
    const {postId} = params;

    const [isCommentVisible, setisCommentVisible] = useState(false)
    const [isOffer, setisOffer] = useState(false)
    
    const [operation, options] = useMutation(UPDATE_POST, {
        refetchQueries: [{
            query : GET_POST,
            variables : {id : postId}
        }]
    })
    
    const updatePst = () =>{
        let currentViews = item["views"] || 0;
        currentViews++
        
        operation({
            variables : {views : currentViews, id : postId}
        }).then(res=>{
            console.log(res);
            
        })
    }

    useEffect(() => {
        if(item){
            updatePst();
        }
    }, [item])
    
    
    if(!item) return <div />
    else return (
            <div>
                <Row>

                </Row>
                <Row>
                    <BackBtn />
                </Row>
                <Row>
                    <Col md={7} style={{ padding: 10 }}>

                        <Card className="post-card">
                            <Row>

                                <Col><HintText>   {item["year"]} </HintText></Col>

                                <Col><HintText>  {item["make"]}  </HintText></Col>

                                <Col><HintText>   {item["model"]} </HintText></Col>

                                <Col><HintText>  {item["category"]}  </HintText></Col>

                                <Col><HintText>   {item["sub_category"]} </HintText></Col>

                            </Row>
                            <hr />
                            <Container>
                                <Row>
                                    <Col md={9} style={{ textAlign: "start", padding: 0, fontSize: "1.1rem" }}>
                                        {item.title}
                                    </Col>
                                    <Col style={{ textAlign: "end", padding: 0 }}><DropdownMenu /></Col>
                                </Row>
                                <Row style={{ height: 5 }}></Row>
                                <Row>
                                    <Col>
                                        <Row>{dayjs(item["createdAt"]).fromNow()}</Row>
                                        <br />
                                        <Row >
                                            <Paragraph ellipsis={{ rows: 5, expandable: true, symbol: 'show more' }}>
                                                <div dangerouslySetInnerHTML={{ __html: item["content"] }} />
                                            </Paragraph>
                                        </Row>
                                    </Col>

                                </Row>
                                <hr />
                                <Row>
                                    <Col><div className=" btn outline">watch</div></Col>
                                    <Col><div onClick={() =>{
                                        setisCommentVisible(true)
                                        setisOffer(true)
                                    }} className=" btn outline">offer help</div></Col>
                                    <Col><div onClick={() => {
                                        setisCommentVisible(true)
                                        setisOffer(false)
                                    }}  className=" btn outline">comment</div></Col>

                                </Row>

                              

                            </Container>
                        </Card>

                        <Container style={{padding: 0, marginTop:25}}>
                                    <CommentBox isOffer={isOffer} id={item["id"]} visable={isCommentVisible} setVisible={setisCommentVisible} />
                            </Container>

                    </Col>
                    <Col style={{ paddingTop: 10 }}>
                        <Comments id={params["postId"]} />
                    </Col>
                </Row>
            </div>
        )
    
}

export default ViewPost

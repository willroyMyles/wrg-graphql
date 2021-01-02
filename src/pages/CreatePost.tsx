import { Input, Cascader, DatePicker } from 'antd'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Headliner, InputPromptText } from '../components/Typography'

function CreatePost() {
    return (
        <Container>
            <Row>
                <Col md={1} />
                <Headliner >Create Post</Headliner>
            </Row>
            <Row>
                <Col md={1} />
                <Col>
                    <Container className="create-post-container">
                        <Row>
                            <Col md={2} />
                            <Col>  
                            <Row>
                                <Col><InputPromptText>title</InputPromptText></Col>
                            </Row>
                                <Row>
                                    <Col><Input className="inputs" placeholder="title of post" /></Col>
                                </Row>


                                <Row>
                                    <Col><InputPromptText>make & model</InputPromptText></Col>
                                </Row>
                                <Row>
                                    <Col ><Cascader className="inputs" placeholder="title of post" /></Col>
                                </Row>

                                <Row>
                                    <Col><InputPromptText>category & subcategory</InputPromptText></Col>
                                </Row>
                                <Row>
                                    <Col><Cascader className="inputs" placeholder="title of post" /></Col>
                                </Row>

                                <Row>
                                    <Col><InputPromptText>year</InputPromptText></Col>
                                </Row>
                                <Row>
                                    <Col><DatePicker className="inputs" picker="year" placeholder="title of post" /></Col>
                                </Row>
                                <Row style={{marginTop:35}}>
                                <Col md={6} ><div className="btn">  cancel  </div></Col>
                                <Col md={6} ><div className="btn">  post  </div></Col>
                            </Row>
                                </Col>
                            <Col md={2} />
                        </Row>

                    </Container>
                </Col>
                <Col md={1} />
            </Row>
        </Container>
    )
}

export default CreatePost

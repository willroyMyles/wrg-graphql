import { useQuery } from '@apollo/client'
import { Divider, List } from 'antd';
import Paragraph from 'antd/lib/typography/Paragraph';
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { POSTS } from '../data-layer/api/Queries'

function PostsView({ cat, sub }: { cat: string, sub: string }) {

    console.log(cat, sub)
    const { loading, data, error } = useQuery(POSTS(cat))

    return (
        <div>
            <List
                style={{ height: "60vh", padding: 10 }}
                loading={loading}
                dataSource={data ? data.posts : []}
                grid={{ gutter: 20, xs: 2, sm: 2, md: 2, xl: 2, xxl: 3 }}
                renderItem={(item: any, index) => {
                    return <List.Item>
                        <Card className="post-card" >
                                    <Row>
                                        <Col style={{ textAlign: "start", padding: 0 }}>{item.title}</Col>
                                        <Col style={{ textAlign: "end", padding: 0 }}>button</Col>
                                    </Row>
                                    <br />
                                    <Row style={{height:15}}></Row>
                            <Row>
                                <Col md={8}>
                                    <Row>{item["createdAt"]}</Row>
                                    <br />
                                    <Row >
                                        <Paragraph ellipsis={{ rows: 1, expandable: true, symbol: 'show more' }}>
                                            {item["content"]}
                                        </Paragraph>
                                    </Row>
                                    <hr />
                                </Col>
                                <Col>
                                    <Row>
                                        <Col>{item["year"]}</Col>
                                    </Row>
                                    <Row>
                                        <Col>{item["make"]}</Col>
                                    </Row>
                                    <Row>
                                        <Col>{item["model"]}</Col>
                                    </Row>
                                    <Row>
                                        <Col>{item["category"]}</Col>
                                    </Row>
                                    <Row>
                                        <Col>{item["sub_category"]}</Col>
                                    </Row>
                                </Col>
                            </Row>

                        </Card>
                    </List.Item>
                }}
            />
        </div>
    )
}

export default PostsView

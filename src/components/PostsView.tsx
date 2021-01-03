import { useQuery } from '@apollo/client'
import { Button, Dropdown, List, Menu } from 'antd';
import Paragraph from 'antd/lib/typography/Paragraph';
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { POSTS } from '../data-layer/api/Queries'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime);

function PostsView({ cat, sub }: { cat: string, sub: string }) {

    console.log(cat, sub)
    const { loading, data, error } = useQuery(POSTS(cat))

    const menu = (
        <Menu>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
              1st menu item
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
              2nd menu item
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
              3rd menu item
            </a>
          </Menu.Item>
        </Menu>
      );

      
    const DropdownMenu = () => (
        <Dropdown key="more" overlay={menu}>
          <Button
            style={{
              border: 'none',
              padding: 0,
            }}
          >
           ...
          </Button>
        </Dropdown>
      );



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
                                        <Col style={{ textAlign: "end", padding: 0 }}><DropdownMenu /></Col>
                                    </Row>
                                    <br />
                                    <Row style={{height:15}}></Row>
                            <Row>
                                <Col>
                                    <Row>{ dayjs(item["createdAt"] ).fromNow()}</Row>
                                    <br />
                                    <Row >
                                        <Paragraph ellipsis={{ rows: 1, expandable: false, symbol: 'show more' }}>
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

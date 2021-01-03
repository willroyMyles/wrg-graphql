import { useQuery } from '@apollo/client'
import { Button, Dropdown, List, Menu } from 'antd';
import Paragraph from 'antd/lib/typography/Paragraph';
import React, { useEffect } from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import {  POSTSBY } from '../data-layer/api/Queries'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import {  useHistory } from 'react-router-dom';
import Link from 'antd/lib/typography/Link';
dayjs.extend(relativeTime);

function PostsView({ cat, sub }: { cat: string, sub: string }) {
    const { loading, data, error, refetch, client,  } = useQuery(POSTSBY,{
        partialRefetch : true,
        variables : {c:cat, s:sub}
    })
  


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


      const history = useHistory()
      const navigate = (item:any) =>{
            history.push(`/view-post/${item["id"]}`, {post : item});
      }

    return (
        <div>
            <List
                style={{ height: "60vh", padding: 10 }}
                loading={loading}
                dataSource={data ? data.posts : []}
                grid={{ gutter: 20, xs: 1, sm: 2, md: 3, xl: 3, xxl: 3 }}
                renderItem={(item: any, index) => {
                    return <List.Item>
                        <Card className="post-card" >
                           
                                    <Row>
                                        <Col md={9} style={{ textAlign: "start", padding: 0, fontSize:"1.1rem" }}>
                                            <Link onClick={() => navigate(item)}>
                                            {item.title}
                                            </Link>
                                        </Col>
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

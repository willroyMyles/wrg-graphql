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
import { HintText } from './Typography';
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
                grid={{ gutter: 20, xs: 1, sm: 2, md: 2, xl: 2, xxl: 3 }}
                renderItem={(item: any, index) => {
                    return <List.Item>
                        <Card className="post-card" >
                           
                                    <Row>
                                        <Col md={9} style={{ textAlign: "start", padding: 0, fontSize:"1.1rem" }}>
                                            <Link onClick={() => navigate(item)}>
                                            {item.title}
                                            </Link>
                                        </Col>
                                        <Col style={{ textAlign: "end", padding: 0 }}>
                                          <Row>
                                            <Col>{item["comments"].length} comments</Col>
                                            <Col>{item["views"]} views</Col>
                                            <Col><DropdownMenu /></Col>
                                          </Row>
                                        </Col>
                                    </Row>
                                    <Row style={{height:5}}></Row>
                            <Row>
                                <Col md={12}>
                                    <Row><HintText>{ dayjs(item["createdAt"] ).fromNow()}</HintText></Row>
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

<Col><HintText>   {item["year"]} </HintText></Col>

<Col><HintText>  {item["make"]}  </HintText></Col>

<Col><HintText>   {item["model"]} </HintText></Col>

<Col><HintText>  {item["category"]}  </HintText></Col>

<Col><HintText>   {item["sub_category"]} </HintText></Col>

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

import { useQuery } from '@apollo/client'
import { Divider, List } from 'antd'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { Headliner, Cardliner } from '../components/Typography'
import api from '../data-layer/api/API_V1'
import { CATEGORIES } from '../data-layer/api/Queries'

function Categories() {

    const {loading, error, data} = useQuery(CATEGORIES)
    const history = useHistory();

    const handleClick = (item:any, index:number) =>{
        history.push("/category",  {title:item["title"], sub : item["sub"], cat:item["title"]});
    }


    return (
        <>
        <Headliner>categories</Headliner>        
        <Divider />
        <List  
            dataSource={data? data["categories"] : []}
            loading={loading}
            grid={{gutter:20, md:3, xs:3, sm:3, lg:3, xl:4, xxl:5}}
            renderItem={(item : any, index)=>{                
                return <List.Item>
                    <div onClick={() => handleClick(item, index) } className="category-card">
                        <div>{item["title"]}</div>
                    </div>
                </List.Item>
            }}
        />
        </>
    )
}

export default Categories

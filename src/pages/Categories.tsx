import { Divider, List } from 'antd'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Headliner, Cardliner } from '../components/Typography'
import api from '../data-layer/api/API_V1'

function Categories() {

    const [data, setdata] = useState<any[]>([])

    useEffect(() => {
      const data1 = api.getCategories()
      setdata(data1);
    }, [])


    return (
        <>
        <Headliner>categories</Headliner>        
        <Divider />
        <List  
            dataSource={data}
            grid={{gutter:20, md:3, xs:3, sm:3, lg:3, xl:4, xxl:4}}
            renderItem={(item, index)=>{                
                return <List.Item>
                    <div className="category-card">
                        <Cardliner>{item.title}</Cardliner>
                    </div>
                </List.Item>
            }}
        />
        </>
    )
}

export default Categories

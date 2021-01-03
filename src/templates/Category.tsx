import { useQuery } from '@apollo/client';
import { Divider, List } from 'antd';
import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom'
import PostsView from '../components/PostsView';
import { Headliner } from '../components/Typography';

function Category() {
    const location = useLocation<any>();
    const [selected, setSelected] = useState<number>(0)
    const {title, sub, cat} = location.state;   
    const history = useHistory(); 

    const onPress = (index:number) =>{
        setSelected(index)
    }

    const openDrawer = () =>{
        // ui_manager.drawerNode = <CreatePost />
        // console.log(ui_manager.drawerVisible)
        // ui_manager.drawerVisible = true;
        // console.log(ui_manager.drawerVisible)

        history.push("/create-post")
    }
    
    return (
        <>
         <Row style={{ display:"flex", alignItems:"center", justifyContent:"flex-end"}}>
        <Headliner>{location.state["title"]}</Headliner>        
        <Col style={{ display:"flex", alignItems:"center", justifyContent:"flex-end", marginTop:20}}>
            <div className="btn" onClick={openDrawer}>
                + add new
            </div>
        </Col>
        </Row>
        <Divider />
  
         <div className="chips-holder" style={{overflowX:"scroll"}}>
        {["Any", ...location.state["sub"]].map((item:string,index:number)=>{
            const isSelected = index == selected
            return <div onClick={()=>onPress(index)} className={isSelected? "chips-selected chips" : "chips"}>{item}</div>
        })}
        </div> 
        <Divider />
        <PostsView cat={cat} sub={sub[selected-1]} />
        </>
    )
}

export default observer(Category)

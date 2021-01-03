import { useMutation, useQuery } from '@apollo/client'
import { Input, Cascader, DatePicker, Divider } from 'antd'
import React, { useMemo, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import FormControler from '../components/FormControler'
import { Headliner, InputPromptText } from '../components/Typography'
import { CATEGORIES, CREATE_POST } from '../data-layer/api/Queries'
import { Cars } from '../data-layer/data'
import Posts from '../models/Posts'
import dayjs from 'dayjs'



const CreatePost = () => {

    const {loading, error, data} = useQuery(CATEGORIES)

    const {errors, control, handleSubmit, setValue, getValues} = useForm<{
        title:string
        mm:string[]
        cs:string[]
        year : string
    }>()

    const [createPost, mutationOptions] = useMutation(CREATE_POST)

    const submit = (data:any) =>{

    const {loading, error} = mutationOptions

        const post1 :Posts = {
            title : data["title"],
            category : data["cs"][0],
            sub_category : data["cs"][1],
            make : data["mm"][0],
            model : data["mm"][1],
            year : dayjs(data["year"]).toDate().getFullYear(),
            content: data["content"]
        }

        let post = {post :post1}        
        createPost({variables :post}).then(res =>{
            console.log(res);
            
        })
        
    }

    const categoryOptions = () => {
            if(!data && !loading) return [[]]
            const cat : any[] = data["categories"];
            const arr = cat.map((array, index) => {
                const title : string = array["title"];
                const subs : string[] = array["sub"] || []                
                return {
                    value: title,
                    label: title,
                    index: index,
                    children: subs.map((val, idx) => {
                        if (idx == 0) return {value: val, label: " all", index: idx}
                        return {value: val, label: val, index: idx}
                    }),
                }
            });
 
            return [arr];            
        
    }

    const carOptions = [
        Cars().map((array, index) => {
            return {
                value: array[0],
                label: array[0],
                index: index,
                children: array.map((val, idx) => {
                    if (idx == 0) return { value: val, label: " any", index: idx }
                    return { value: val, label: val, index: idx }
                }),
            }
        }),

    ]

    return (
        <div>
            <Row style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", width: "100%" }}>
                <Headliner>create post</Headliner>
                <Col style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", marginTop: 20 }}>
                    <div className="btn" >
                        + add new
            </div>
                </Col>
            </Row>
            <Divider />
            <Row className="create-post-container">
                <Col md={2} />
                <Col>
                    <Row>
                        <Col><InputPromptText>title</InputPromptText></Col>
                    </Row>
                    <Row>
                        <Col>
                        <FormControler  
                        child={ <Input className="inputs" bordered={false} placeholder="title of post" />}
                        control={control}
                        name="title"
                        />
                        
                        </Col>
                    </Row>

                    <Row>
                        <Col><InputPromptText>content</InputPromptText></Col>
                    </Row>
                    <Row>
                        <Col>
                        <FormControler  
                        child={   <Input.TextArea autoSize={{ minRows: 4, maxRows: 10 }} className="inputs" bordered={false} placeholder="content of post..." />}
                        control={control}
                        name="content"
                        />
                        </Col>
                    </Row>


                    <Row>
                        <Col><InputPromptText>make & model</InputPromptText></Col>
                    </Row>
                    <Row>
                        <Col >
                        
                        <FormControler  
                        child={    <Cascader expandTrigger="click"
                        options={carOptions[0]}
                        // value={[make, model]}
                        className="inputs" bordered={false} placeholder="title of post" />}
                        control={control}
                        name="mm"
                        />


                      
                            
                            
                            </Col>
                    </Row>

                    <Row>
                        <Col><InputPromptText>category & subcategory</InputPromptText></Col>
                    </Row>
                    <Row>
                        <Col>
                        <FormControler  
                        child={    <Cascader expandTrigger="click"
                        options={categoryOptions()[0]}
                        // value={[make, model]}
                        className="inputs" bordered={false} placeholder="title of post" />}
                        control={control}
                        name="cs"
                        />

                    
                                        </Col>
                    </Row>

                    <Row>
                        <Col><InputPromptText>year</InputPromptText></Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="inputs" style={{ display: "flex" }}>
                            <FormControler  
                        child={                                   <DatePicker style={{ display: "flex", width: "100%" }} bordered={false} picker="year" placeholder="year of vehicle..." />
                    }
                        control={control}
                        name="year"
                        />

                            </div>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: 35 }}>
                        <Col md={6} ><div className="btn">  cancel  </div></Col>
                        <Col md={6} ><div className="btn" onClick={()=> handleSubmit(submit)()}>  post  </div></Col>
                    </Row>
                </Col>
                <Col md={2} />
            </Row>


        </div>
    )
}

export default CreatePost

import React, { useState, useEffect } from "react"

import { Row, Button, notification, Space, Layout, Input, Col, Divider, Switch, Avatar } from "antd"

import Text from "antd/lib/typography/Text"

import { observer } from "mobx-react"
import Paragraph from "antd/lib/typography/Paragraph"

const Profile = observer(() => {
    const [onlineDatabase, setonlineDatabase] = useState(false)

    const handleToggle = (value: boolean) => {

    }

    return (
        <>
            <span>Profile</span>

            <Row align="middle" justify="center" style={{ flexDirection: "column" }}>
                <Avatar size={75} style={{ margin: 10 }} />
            </Row>

            <Divider />
            <Row>
                <span>User Name</span>
            </Row>
            <Row justify="space-between">
                <Col  >
                    <Row>
                        <Col><Paragraph>your user-name is "</Paragraph></Col>
                        <Col><span style={{ marginTop: 3, marginLeft: 4 }}> username</span></Col>
                    </Row>
                </Col >
                <Col>						
                    <Button type="ghost">Change</Button>
                </Col>
            </Row>
            <Divider />
            <Row>
                <span>Email Address</span>
            </Row>
            <Row justify="space-between">
                <Col  >
                    <Row>
                        <Col><Paragraph>your email address is : "</Paragraph></Col>
                        <Col><span style={{ marginTop: 3, marginLeft: 4 }}> emailaddy</span></Col>
                    </Row>
                </Col >
                <Col>						
                    <Button type="ghost">Change</Button>
                </Col>
            </Row>
            <Divider />
            <Row justify="space-between">
                <span>Password</span>
                <Button type="ghost">Change</Button>
            </Row>
            <Divider />
            <Row justify="space-between">
                <span>Delete my account</span>
                <Button type="ghost">Delete Account</Button>
            </Row>
            <Divider />
            <Space size="middle">
                <Row>
                    <Button
                        onClick={() => {
                            notification.info({
                                message: "Confirm log out?",
                                placement: "bottomLeft",
                                description: "Are you sure you wish to log out?",
                                duration: 10,
                                // btn: <ConfirmButton />,
                                key: "btn",
                            })
                        }}>
                        Log out
							</Button>
                </Row>
                <Row>
                    <Button
                        onClick={() => {
                            notification.info({
                                message: "Confirm log out?",
                                placement: "bottomLeft",
                                description: "Are you sure you wish to log out?",
                                duration: 10,
                                // btn: <Button onClick={() => sideHistory.go(0)}>Clear History</Button>,
                                key: "btn",
                            })
                        }}>
                        Clear History
							</Button>
                </Row>
                <Row>
                    <Button onClick={() => { }}>change</Button>
                </Row>
            </Space>
        </>
    )
})

export default Profile

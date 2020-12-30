import { Children, PureComponent } from "react"
import { Col, Row } from "react-bootstrap"
import '../assets/css/typography.css'

export class Headliner extends PureComponent{

    render(){
        return (
            <Row>
                <Col style={{textAlign:"start", marginTop:10}}>
                <div className="headliner">{this.props.children}</div>
                </Col>
            </Row>
        )
    }
}

export class Cardliner extends PureComponent{

    render(){
        return (
            <Row>
                <Col style={{textAlign:"start", marginTop:10}}>
                <div className="card-text">{this.props.children}</div>
                </Col>
            </Row>
        )
    }
}


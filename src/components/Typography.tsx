import { Children, PureComponent } from "react"
import { Col, Row } from "react-bootstrap"
import '../assets/css/typography.css'

export class Headliner extends PureComponent{

    render(){
        return (
                <Col style={{textAlign:"start"}}>
                <div className="headliner">{this.props.children}</div>
                </Col>
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

export class InputPromptText extends PureComponent{
    render(){
        return (
            <Row>
                <Col style={{textAlign:"start"}}>
                <div className="input-text">{this.props.children}</div>
                </Col>
            </Row>
        )
    }
}


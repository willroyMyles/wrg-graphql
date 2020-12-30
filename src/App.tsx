import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'antd/dist/antd.css';
import Header from './components/Header';
import {
  Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import {createBrowserHistory} from "history"
import Categories from './pages/Categories';

const history = createBrowserHistory()

function App() {
  
  return (
      <Container className="App">
          <Router history={history}>
        <Header/>
        <Row>
          <Col md={2}></Col>
          <Col>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/categories" component={Categories} />
            </Switch>
          </Col>
        </Row>
        <Row>footer</Row>
          </Router>
      </Container>
  );
}

export default App;

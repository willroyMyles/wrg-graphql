import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'antd/dist/antd.css';
import './assets/css/style.css'

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
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import Category from './templates/Category';
import Footer from './components/Footer';
import { Drawer } from 'antd';
import { observer } from 'mobx-react';
import ui_manager from './data-layer/store/ui_manager';
import MiddleHolder from './MiddleHolder';

const history = createBrowserHistory()

const link = createHttpLink({
  uri: 'http://localhost:1337/graphql',
});

const client = new ApolloClient({
  link:link,
  cache: new InMemoryCache(),
  connectToDevTools:true,
  // headers: {
  //     "Content-Type" : "application/json",
  //     "Accept": "application/json",
  //     "Access-Control-Allow-Methods":"*",
  //     "origin" :"http://localhost:3000",
  //     "Access-Control-Allow-Headers": "*",
  //     "Access-Control-Allow-Method": "*",
  //     "Access-Control-Allow-Origin" : "http://localhost:3000"
  // }
});

const App = observer(() => {
  
  return (
    <ApolloProvider client={client}  >

      <Container fluid className="App" style={{padding:0}}>
          <Router history={history}>
        <Header/>
       <MiddleHolder />
        <Footer />
          </Router>
      </Container>
    </ApolloProvider>
  );
})

export default App;

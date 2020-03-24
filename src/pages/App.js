import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
import './App.css';

import Restriction from './Restriction';
import Login from './Login';
import Overview from './Overview';

const { Header, Content, Footer } = Layout;

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {

        return (
            <div className="App">
                <Layout className="layout">
                    <Header>
                        <div id="title">Map4All Government</div>
                    </Header>
                    <Content style={{ padding: '0 50px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Start</Breadcrumb.Item>
                            <Breadcrumb.Item>Datenpflege</Breadcrumb.Item>
                            <Breadcrumb.Item>Übersicht</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="site-layout-content">

                            <Router>
                                <Switch>
                                    <Route path="/government" component={Restriction}/>
                                    <Route exact path="/" component={Login}/>
                                    <Route exact path="/overview" component={Overview}/>
                                </Switch>
                            </Router>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Map4All ©2020</Footer>
                </Layout>
            </div>
        )
    };
}

export default App;

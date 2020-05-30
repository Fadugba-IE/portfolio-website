import React, { Component } from 'react';
import './App.css';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import Main from './Components/Main';
import {Link} from 'react-router-dom';



 class App extends Component {
  render() {
    return (
      <div>
     <div className="demo-big-content">
    <Layout>
        <Header className = 'header-color' title = ' '  scroll >
            <Navigation>
            <Link to="/">Home</Link>
                <Link to="/Project">Projects</Link>
                <Link to="Contact">Contacts</Link>
            </Navigation>
        </Header>
        <Drawer className = 'drawer-color' >
            <Navigation>
            <Link to="/">Home</Link>
                <Link to="/Project">Projects</Link>
                <Link to="Contact">Contacts</Link>
            </Navigation>
        </Drawer>
        <Content>
        
          <div className="page-content" />
          <Main/>
        </Content>
    </Layout>
</div>
</div>
    )
  }
}

export default App

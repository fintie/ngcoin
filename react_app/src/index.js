import React from 'react';
import ReactDOM from 'react-dom';
import {  Layout } from 'antd';
import 'antd/dist/antd.css';
import Acc from './Acc';
import Transfercoin from './Transfercoin';

const { Header, Content, Footer, Sider } = Layout;


ReactDOM.render(
  <Layout>
    <Header className="header">
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Layout style={{ padding: '24px 0', background: '#fff' }}>
        <Sider width={200} style={{ background: '#fff' }}>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
        <Transfercoin></Transfercoin>
        <Acc></Acc>

        </Content>
      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
    </Footer>
  </Layout>
, document.getElementById('root'));

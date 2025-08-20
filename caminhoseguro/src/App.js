import React, { useState } from 'react';
import { DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined, } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

function getItem(label, key, icon, children) {
  return { key, icon, children, label, };
}
const items = [
  getItem('Option 1', '1', < PieChartOutlined />),
  getItem('Option 2', '2', < DesktopOutlined />),
  getItem('Mussa', 'sub1', < UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Equipe', 'sub2', < TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Ficheiros', '9', < FileOutlined />),
];
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: {
      colorBgContainer,
      borderRadiusLG
    },
  } = theme.useToken();
  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={value => setCollapsed(value)}
        >
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            defaultSelectedKeys={['1']}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb
              style={{ margin: '16px 0' }}
              items={[
                { title: 'Mussa' },
                { title: 'Programador' },
              ]}
            />
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              Caminho seguro.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Caminho seguro© {new Date().getFullYear()}.Todos direitos reservados.
          </Footer>
        </Layout>
      </Layout>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </>
  );
};
        export default App;
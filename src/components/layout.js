import { Layout } from "antd";
const { Header, Content, Footer } = Layout;

const LayoutComponent = ({ children }) => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo">Baggage Storage</div>
      </Header>
      <Content style={{ padding: "20px 50px" }}>
        <div className="site-layout-content">{children}</div>
      </Content>
      <Footer className="footer">Created by Nahuel Bonader</Footer>
    </Layout>
  );
};

export default LayoutComponent;

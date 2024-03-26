import { Content, Footer, Header } from "antd/es/layout/layout";
import CodeEditor from "../pages/editor";
import { Terminal } from "../pages/terminal";
import { useState } from "react";
import { ConfigProvider, Layout } from "antd";
import Sider from "antd/es/layout/Sider";

export const AppRenderer = () => {
  const [code, setCode] = useState("");
  
  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };
  return (
    <div>
      <ConfigProvider
        theme={{
          components: {
            Layout: {
              bodyBg: "#272727",
              colorText: "#ffffff",
              footerBg: "#ffffff",
              siderBg: "#272727",
              footerPadding: "0px",
            },
          },
        }}
      >
        <Layout style={{ height: "100vh" }}>
          <Header>header</Header>
          <Layout>
            <Sider>left sidebar</Sider>
            <Layout>
              <Content>
                <CodeEditor value={code} onChange={handleCodeChange} />
              </Content>
              <Terminal></Terminal>
            </Layout>
            <Sider>right sidebar</Sider>
          </Layout>
          <Footer>
            FOOTER
          </Footer>
        </Layout>
      </ConfigProvider>
    </div>
  );
};

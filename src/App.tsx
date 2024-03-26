/* eslint-disable no-mixed-spaces-and-tabs */
import { ConfigProvider } from "antd";
import "./App.css";
import { AppRenderer } from "./pageRenderers/appRenderer";

function App() {
  return (
    <div>
      <AppRenderer />
      <ConfigProvider
        theme={{
          components: {
            Layout: {
              bodyBg: "#272727",
              colorText: "#ffffff",
              footerBg: "#272727",
              siderBg: "#272727",
              footerPadding: "0px",
            },
          },
        }}
      />
    </div>
  );
}

export default App;

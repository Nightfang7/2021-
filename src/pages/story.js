import { Layout } from 'antd';
import AppHeader from "../components/Navbar/Navbar"
import ImageSlider from "../components/Slider/ImageSlider"
import AppFooter from "../components/footer"
import { SliderData } from "../components/Slider/SliderData"


const { Header, Content, Footer } = Layout;

function Story() {
  return (
    <>
      <Layout>
        <Header className="header-bg">
          <AppHeader/>
        </Header>
      </Layout>
      <Layout>
        <Content>
          <ImageSlider slides={SliderData}/>
        </Content>
      </Layout>
      <Layout>
        <Footer className="footer-bg">
          <AppFooter />
        </Footer>
      </Layout>
      
    </>
    
        
  );
}

export default Story;
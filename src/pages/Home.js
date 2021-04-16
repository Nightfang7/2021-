import { Layout } from 'antd';
import AppHeader from "../components/Navbar/Navbar"
import ImageSlider from "../components/Slider/ImageSlider"
import AppFooter from "../components/footer"
import { SliderData } from "../components/Slider/SliderData"


const { Header, Content, Footer } = Layout;

function Home() {
  return (
    <>
      <Layout>
        <Header className="container header-bg">
          <AppHeader/>
        </Header>
      </Layout>
      <Layout>
        <Content className="container silder-content">
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

export default Home;
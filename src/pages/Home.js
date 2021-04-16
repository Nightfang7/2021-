import { Layout } from 'antd';
import AppHeader from "../components/Navbar/Navbar"
import ImageSlider from "../components/Slider/ImageSlider"
import { SliderData } from "../components/Slider/SliderData"


const { Header, Content, Footer } = Layout;

function Home() {
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
      
    </>
    
    
        
  );
}

export default Home;
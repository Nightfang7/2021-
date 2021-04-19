import { Layout } from 'antd';
import AppHeader from "../components/Navbar/Navbar"
import ImageSlider from "../components/Slider/ImageSlider"
import KindBar from "../components/KindBar/KindBar"
import HomeContent from "../components/Homecontent"
import AppFooter from "../components/footer"
import { SliderData } from "../components/Slider/SliderData"
import ProductList from "../components/ProductList";
import products from "../json/specialproduct.json"
import { Button } from "antd"
import { Link } from 'react-router-dom';


const { Header, Content, Footer } = Layout;

function Home() {
  return (
    <>
      <Layout>
        <Header className="container header-bg">
          <AppHeader/>
        </Header>
      
        <Layout>
          <Content className="container silder-content">
            <ImageSlider slides={SliderData}/>
            <KindBar />
            <HomeContent/>
            <ProductList products = {products} />
            <Button  className="btn-product">
              <Link to="/Special">
              更多商品一覽
              </Link>
            </Button>
          </Content>
        </Layout>
      
        <Footer className="footer-bg">
          <AppFooter />
        </Footer>
      </Layout>
      
    </>
    
        
  );
}

export default Home;
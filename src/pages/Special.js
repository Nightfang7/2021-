import { Layout } from 'antd';
import AppHeader from "../components/Navbar/Navbar"
import AppFooter from "../components/footer"
import ProductList from "../components/ProductList";
import products from "../json/specialproduct.json"
import ProductSider from "../components/Products/ProductSider";


const { Header, Sider, Content, Footer } = Layout;

function Product() {
    return (
        <>
        <Layout>
            <Header className="container header-bg">
                <AppHeader/>
            </Header>
        
            <Layout>
            <Sider>
                <ProductSider />
            </Sider>
            <Content>
                <ProductList products = {products} />
            </Content>
            </Layout>
        
            <Footer className="footer-bg">
                <AppFooter />
            </Footer>
        </Layout>
        
        </>
    
        
  );
}

export default Product;
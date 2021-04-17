import { Layout } from 'antd';
import AppHeader from "../components/Navbar/Navbar"
import AppFooter from "../components/footer"
import ProductTitle from "../components/Products/ProductsTitle"
import ProductSider from "../components/Products/ProductSider"
import ProductList from '../components/Products/ProductList';


const { Header, Content, Sider, Footer } = Layout;

function Home() {
    return (
        <>
        <Layout>
            <Header className="container header-bg">
            <AppHeader/>
            </Header>
        
            <Layout className="content-layout">
                <Content className="container ">
                    <ProductTitle />
                </Content>
                
            </Layout>
            <Layout className="content-layout"> 
                <Sider>
                    <ProductSider />
                </Sider>
                <Content>
                    
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
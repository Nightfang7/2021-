
import { Layout } from 'antd';
import AppHeader from "../components/Navbar/Navbar"
import AppFooter from "../components/footer"
import ProductDetail from "../components/ProductDetail";
import products from "../json/specialproduct.json";

const { Header, Content, Footer } = Layout;

function Product({ match }) {
   const product = products.find(
      (x) => x.id === match.params.productId
   );
   return (
      <Layout>
         <Header className="container header-bg">
            <AppHeader title="Product Detail"/>
         </Header>
         <Content>
            <ProductDetail product = {product} />
         </Content>
         <Footer className="footer-bg">
            <AppFooter />
         </Footer>
      </Layout>
   );
}

export default Product;

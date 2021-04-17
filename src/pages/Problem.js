import { Layout } from 'antd';
import AppHeader from "../components/Navbar/Navbar"
import ProblemContent from "../components/ProblemContent"
import AppFooter from "../components/footer"

const { Header, Content, Footer } = Layout;

function Home() {
  return (
    <>
      <Layout>
        <Header className="header-bg">
          <AppHeader/>
        </Header>

        <Layout>
          <Content>
            <ProblemContent/>
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
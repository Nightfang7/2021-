import { Layout } from 'antd';
import AppHeader from "../components/Navbar/Navbar"
import StoryContent from "../components/StoryContent"
import AppFooter from "../components/footer"

const { Header, Content, Footer } = Layout;

function Home() {
  return (
    <>
      <Layout>
        <Header className="header-bg">
          <AppHeader/>
        </Header>
      <Content>
        <img className="Story-img container" src="https://www.touched.com.tw/banner/_imagecache/page_banner.jpg"></img>
        <StoryContent/>
      </Content>
        <Footer className="footer-bg">
          <AppFooter />
        </Footer>
      </Layout>
    </>
    
    
        
  );
}

export default Home;
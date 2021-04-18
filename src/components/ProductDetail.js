import { Row, Col } from "antd";
import AddToCart from "./AddToCart"
function ProductDetail({ product }) {
   return (
      <Row gutter={[32, 32]}>
        <Col 
          lg={{ span: 8, offset: 2 }}
        >
         <img
            alt=""
            className="product-image"
            src={product.image}
         />           
        </Col>
        <Col 
          lg={{ span: 12 }}
        >
         <div className="product-info--detail">
            {/* <h2 className="product-category">
               {product.category}
            </h2> */}
            <h1 className="product-name product-name--large">
               {product.name}
            </h1>
            <div className="product-price-wrap  ">
               <p className="product-price product-price--large text-line">
                  NT.{product.price}
               </p>
               <p className="product-price product-price--large p-pink">
                  NT.{product.discount}
               </p>
            </div>
            <p className="product-description">{product.description1}</p>
            <p className="product-description">{product.description2}</p>
            <p className="product-description">{product.description3}</p>
            <p className="product-description">{product.description4}</p>
            <p className="product-description">{product.description5}</p>
            <p className="product-description">{product.description6}</p>
            <p className="product-description">{product.description7}</p>
            <p className="product-description">{product.description8}</p>
            <p className="product-description">{product.description9}</p>
            <p className="product-description">{product.description10}</p>
            <p className="product-description">{product.description11}</p>
            <p className="product-description">{product.description12}</p>
            <p className="product-description">{product.description13}</p>
            <div className="product-price-wrap">
               <AddToCart />
            </div>
         </div>           
        </Col>
      </Row>
   );
}

export default ProductDetail;
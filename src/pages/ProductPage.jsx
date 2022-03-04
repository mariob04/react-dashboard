import React from "react";
import "./ProductPage.css";
import { Link } from "react-router-dom";
import Chart from "../components/Chart";
import { productData } from "../data/data";
import PublishIcon from "@mui/icons-material/Publish";

function ProductPage() {
  return (
    <div className="product">
      <div className="product__titleContainer">
        <h1 className="product__title">Product</h1>
        <Link to="/newproduct">
          <button className="product__addBtn">Create</button>
        </Link>
      </div>
      <div className="product__top">
        <div className="product__topLeft">
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="product__topRight">
          <div className="product__infoTop">
            <img
              src="https://wpblog.zyro.com/cdn-cgi/image/w=1200,q=85/wp-content/uploads/2021/05/Apps-best-digital-products-to-sell-scaled.jpg"
              alt=""
              className="product__infoImg"
            />
            <span className="product__infoName">Digital Product</span>
          </div>
          <div className="product__infoBottom">
            <div className="product__infoItem">
              <span className="product__infoKey">id: </span>
              <span className="product__infoValue">123</span>
            </div>
            <div className="product__infoItem">
              <span className="product__infoKey">sales: </span>
              <span className="product__infoValue">5123</span>
            </div>
            <div className="product__infoItem">
              <span className="product__infoKey">active: </span>
              <span className="product__infoValue">yes</span>
            </div>
            <div className="product__infoItem">
              <span className="product__infoKey">in stock: </span>
              <span className="product__infoValue">50</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product__bottom">
        <form action="" className="product__form">
          <div className="product__formLeft">
            <label>Product Name</label>
            <input type="text" />
          </div>
          <div className="product__formRight">
            <div className="product__upload">
              <img
                src="https://wpblog.zyro.com/cdn-cgi/image/w=1200,q=85/wp-content/uploads/2021/05/Apps-best-digital-products-to-sell-scaled.jpg"
                alt=""
                className="product__uploadImg"
              />
              <label htmlFor="file">
                <PublishIcon />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="product__btn">Upload</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductPage;

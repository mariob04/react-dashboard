import React from "react";
import "./NewProduct.css";

function NewProduct() {
  return (
    <div className="newproduct">
      <h1 className="newproduct__title">New Product</h1>
      <form action="" className="newproduct__form">
        <div className="newproduct__item">
          <label htmlFor="">Product Name</label>
          <input type="text" placeholder="name" />
        </div>
        <div className="newproduct__item">
          <label htmlFor="">Price</label>
          <input type="text" placeholder="price" />
        </div>
        <div className="newproduct__item">
          <label htmlFor="">Availaible from</label>
          <input type="date" placeholder="availability" />
        </div>
        <div className="newproduct__item">
          <label htmlFor="">Product ID</label>
          <input type="email" placeholder="e-mail" />
        </div>
        <div className="newproduct__item">
          <label htmlFor="">Stock</label>
          <input type="password" placeholder="stock" />
        </div>
        <div className="newproduct__itemImg">
          <label htmlFor="">Product Image</label>
          <input type="file" id="file" />
        </div>
        <button className="newproduct__btn">Create</button>
      </form>
    </div>
  );
}

export default NewProduct;

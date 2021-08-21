import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductsItmes from "./ProductsItmes";
import { Link } from "react-router-dom";

const Products = () => {
  const [stateProducts, setProductsState] = useState([]);

useEffect(() => {
getProducts();
}, []);
const getProducts = () => {
  axios
    .get("http://localhost:8080/products")
    .then(data => {
      let product = data.data;
      setProductsState(
          product.map(d => {
          return {
            select: false,
            id: d.id,
            name: d.name,
            total: d.total
          };
        })
      );
    })
    .catch(err => alert(err));
};

const deleteProductsByIds = () => {
  let arrayids = [];
  stateProducts.forEach(d => {
    if (d.select) {
      arrayids.push(d.id);
    }
  });

  axios
    .delete(`http://localhost:8080/products/${arrayids}`)
    .then(data => {
      console.log(data);
      getProducts();
    })
    .catch(err => alert(err));
};

  return (
  <div className="container">
          <Link to="/add">
          <button className="btn btn-secondary btn-sm m-2">Add Product</button>
          </Link>
          <button className="btn btn-danger btn-sm m-2" onClick={() => {
              deleteProductsByIds();
              }}> <i className="fa fa-trash" > </i>
              Delete product 
          </button>
              <table className="table">
          <thead>
          <tr>
              <th>
              <input
                  type="checkbox"
                  onChange={e => {
                  let value = e.target.checked;
                  setProductsState(
                      stateProducts.map(d => {
                      d.select = value;
                      return d;
                      })
                  );
                  }}
              />
              </th>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Edit</th>
          </tr>
          </thead>
          <tbody>
          <ProductsItmes
          stateProducts={stateProducts}
          setProductsState={setProductsState}  />
          </tbody>
      </table>

                  <div className="container my-5">
                      <p className="text-info"><span className="h4">Note :</span> Select only single element will be deleted. </p>
                  </div>
  </div>
  )
}

export default Products
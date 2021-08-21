import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

const AddProduct = (props) => {
    const submit = e => {
        let name = e.target[0].value;
        let  total = e.target[1].value;
        let data = {
          name,
          total
        };
        postProducts(data);
      };
      const postProducts = data => {
        axios
          .post("http://localhost:8080/products", data)
          .then(d => {
            console.log(d);
            props.history.push("/");
          })
          .catch(err => alert(err));
      };

    return (
    <div className="container">
        <div className="container my-3">
            <form onSubmit={e => {
                e.preventDefault(); submit(e);  }} >

            <div className="form-group">
                <label>Product Name</label>
                <input type="text" className="form-control form-control-sm" />
            </div>
            <div className="form-group">
                <label>Total Products</label>
                <input type="text" className="form-control form-control-sm" />
            </div>

                <button type="submit" className="btn btn-primary btn-sm my-3">
                Submit
                </button>
            </form>
        </div>            
    </div>
    )
}

export default withRouter(AddProduct);

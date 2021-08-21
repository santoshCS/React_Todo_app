import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

const EditProduct = (props) => {
    const [stateProd, setstateProd] = useState({});
  useEffect(() => {
    let id = props.match.params.id;
    getProductsByIds(id);
  }, []);
  const getProductsByIds = id => {
    axios
      .get(`http://localhost:8080/products/${id}`)
      .then(d => {
        let product = d.data;
        setstateProd({
          id: product.id,
          name: product.name,
          total: product.total
        });
      })
      .catch(err => alert(err));
  };
  const putProdcuts = e => {
    console.log(stateProd);
    axios
      .put(`http://localhost:8080/products/${stateProd.id}`, stateProd)
      .then(d => {
        props.history.push("/");
      })
      .catch(err => alert(err));
  };


    return (
        <div className="container my-3">
            <form onSubmit={e => {
                e.preventDefault();
                putProdcuts(e);
             }}>
            <div className="form-group">
                <label>Name</label>
                <input type="text" value={stateProd.name} onChange={e => {
                    let value = e.target.value;
                    setstateProd({
                        name: value,
                        id: stateProd.id,
                        total: stateProd.total
                    });
                }}
                className="form-control form-control-sm" />
            </div>
            <div className="form-group">
          <label>Total Product</label>
          <input onChange={e => {
              let value = e.target.value;
               setstateProd({
                name: stateProd.name,
                id: stateProd.id,
                total: value
              });
            }}
            value={stateProd.total}
            type="text"
            className="form-control form-control-sm"/>
        </div>
        <button type="submit" className="btn btn-primary btn-sm"> Submit </button>
      </form>

    </div>
    
    )
}

export default withRouter(EditProduct);

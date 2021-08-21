import React from 'react'
import { Link } from "react-router-dom";

function ProductsItmes(props) {
    return props.stateProducts.map(d => (
        <tr key={d.id}>
          <td>
            <input
              type="checkbox"
              checked={d.select}
              onChange={e => {
                let value = e.target.checked;
                props.setProductsState(
                  props.stateProducts.map(sd => {
                    if (sd.id === d.id) {
                      sd.select = value;
                    }
                    return sd;
                  })
                );
              }}  id="flexCheckDefault"    />
          </td>
          <th scope="row">{d.id}</th>
          <td>{d.name}</td>
          <td>{d.total}</td>
          <td>
            <Link to={`edit/${d.id}`}>
              <button className="btn bg-warning btn-sm">Edit</button>
            </Link>
          </td>
        </tr>
      ));
}

export default ProductsItmes

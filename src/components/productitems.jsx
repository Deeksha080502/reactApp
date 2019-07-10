import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../header.css";
import { connect } from 'react-redux'
import {AddTOCart} from '../actions';
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

class ProductItems extends Component {
  state = {};

  buttonClicked() {
    console.log("Button was clicked!");
  }

  render() {
    // console.log("productsItems",this.props.productItem);
    const { productItem } = this.props;
    const {AddTOCart} = this.props
    return (
      <div>
        <div className="card-body" >
          <h5 className="garage-title">{productItem.name}</h5>
          <h6 className="card-text">Order No: {productItem.orderNo}</h6>
          <h6 className="card-text">Serial No: {productItem.serialNo}</h6>
          <h6 className="card-text">Order Date: {productItem.orderedDate}</h6>
          <h6 className="card-text">
            warrantyPeriod No: {productItem.warrantyPeriod}
          </h6>
          <img src={"./assets/camera.png"} width="100" height="80"  />

          <Link 
            to= {{
              pathname: "/detail",
              state: {data:productItem}
            }}>
            <button className="btn btn-warning" >View Detail</button>
          </Link>

          <button onClick = {()=>AddTOCart(productItem.serialNo, productItem.name)} className="btn btn-secondary" >Add To Cart</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    AddTOCart: (serialNo,name)=>dispatch(AddTOCart(serialNo,name))
      //  decrement: ()=>dispatch(decrement()),
      // reset: ()=>dispatch(reset())
  }
};

export default connect(null, mapDispatchToProps)(ProductItems)

// export default ProductItems;

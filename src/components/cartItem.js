import React, { Component } from "react";
import { Image, Button } from "react-bootstrap";
import { connect } from "react-redux";
import {onDecrement,onIncrement,onDelete} from '../actions';

class CartItem extends Component {
  state = {};
  render() {
    const { productItem } = this.props;
    const {onDecrement,onIncrement,onDelete} = this.props
    return (
    
    <div className="row m-2" >
    <div className="col-sm-3" >
    <Image src={"./assets/camera.png"} width="100" height="80"  />
    </div>
    <div className="col-sm-6">
      <h3>{productItem.name}</h3>
      <p>
        <span style={{ color: "grey" }}>Model No : </span>
        {productItem.modelNo}
      </p>
      <p>
        <span style={{ color: "grey" }}>Warranty : </span>
        {productItem.warrantyPeriod}
      </p>
    </div>
    <div className="col-sm-3">
      <div className="float-right align-items-center">
        <h2>{"$ "+(productItem.price)}</h2>
        <div className="m-2">
          <Button onClick={()=>onDecrement(productItem.serialNo)} className="m-2" variant="warning">
            -
          </Button>
          <label>{this.props.cart[productItem.serialNo]}</label>
          <Button onClick={()=>onIncrement(productItem.serialNo)} className="m-2" variant="warning">
            +
          </Button>
        </div>
        <Button onClick={()=>onDelete(productItem.serialNo)} className="mt-2, ml-4" variant="secondary">
          DELETE
        </Button>
      </div>
    </div>
  </div>

    );
  }
}


const mapStateToProps = state => {
  console.log("mapStateToPropscartsitems", state);
 return {
   cart: state.cart,
   allProducts : state.allProducts
 };
};

const mapDispatchToProps = (dispatch)=>{
  return{
    onDecrement: (serialNo)=>dispatch(onDecrement(serialNo)),
    onIncrement: (serialNo)=>dispatch(onIncrement(serialNo)),
    onDelete: (serialNo)=>dispatch(onDelete(serialNo))


      //  decrement: ()=>dispatch(decrement()),
      // reset: ()=>dispatch(reset())
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(CartItem);

import React, { Component } from "react";
import { connect } from "react-redux";
import CartItem from "./cartItem";

class CartProducts extends Component {

  render() {
    console.log("cartProductscartProducts", Object.keys(this.props.cart));
    return (
      <div>
        {/* <div className="container"> */}
          <div className="jumbotron" style = {{height : 50}}>
            <h1>Cart Products</h1>  
          </div>
        {/* </div> */}

        <div className="container-fluid">
          {Object.keys(this.props.cart).map(
            item => (
              // <div className="row m-2">

              <div className="card m-2">
                <CartItem
                  key={item}
                
                  productItem={this.props.allProducts.find(
                    prd => prd.serialNo === item
                  )}
                />
              </div>
            )  
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("mapStateToPropscartsProducts", state);
  return {  
    cart: state.cart,
    allProducts: state.allProducts
  };
};

export default connect(mapStateToProps)(CartProducts);

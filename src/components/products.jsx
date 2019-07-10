import React, { Component } from "react";
import ProductItems from "./productitems";

class Product extends Component {
  constructor(props) {
    super(props);
    console.log("propsprops",props);
}


componentWillMount(){
  console.log("componentWillMount",this.props);
}

render() {
   const {allProductList} = this.props; 
    return (
      <div>
      <div className="container-fluid">
          <div className="row">
            {allProductList.map(element => (
              <div className="col-sm-4">
                <br />
                <div className="card">
                  <ProductItems key = {element.orderNo} productItem = {element} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}


 export default Product;

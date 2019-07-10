import React, { Component } from "react";
import "../header.css";
class ProductDetail extends Component {
  state = {};
  render() {
    console.log("===data", this.props.location.state.data);
    const data = this.props.location.state.data;
    return (
      <div>
        <img src={"./assets/camera.png"} width="500" height="320" />
        <div className="b">
          <h5>{data.name}</h5>
          <h6 className="card-text">Order No: {data.orderNo} </h6>
          <h6 className="card-text">Serial No: {data.serialNo} </h6>
          <h6 className="card-text">Order Date: {data.orderedDate} </h6>
          <h2>Specifications : </h2>
          <h6 className="card-text">
            focalLength: {data.specifications.focalLength}{" "}
          </h6>
          <h6 className="card-text">
            LensType: {data.specifications.lensType}{" "}
          </h6>
          <h6 className="card-text">
            opticalZoom: {data.specifications.opticalZoom}{" "}
          </h6>
          <h2>Features : </h2>

          {data.features.map(element => (
            <h6 className="card-text">{element} </h6>
          ))}

          <h2>Insurance : </h2>
          <h6 className="card-text">
            ExistenceYear: {data.insurance.existenceYear}{" "}
          </h6>
          <h6 className="card-text">
            NomineeName: {data.insurance.nomineeName}{" "}
          </h6>
        </div>
      </div>
    );
  }
}

export default ProductDetail;

import "./App.css";
import "./header.css";
import React, { Component } from "react";
import axios from "axios";
import Product from "./components/products";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/navbar";
import {storeData} from './actions';
import { connect } from 'react-redux';

class App extends Component {
  state = {
    allProductList: [],
    allProductListTemp: [],
    expiredProductList: [],
    expiringProductList: [],
   
    title: "Filter Products",
    pageNo: 0,
    isMoreItem : false
  };

  componentDidMount() {
    this.readData();
    
  }

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
   
     console.log("datadata", this.state.allProductList);
    return (
      <React.Fragment>
        <NavBar
          allProductListTemp={this.state.allProductListTemp}
          expiredProductList={this.state.expiredProductList}
          expiringProductList={this.state.expiringProductList}
          getAllProduct1={this.getAllProduct1}
          getPreviousPage={this.getPreviousPage}
          getNextPage={this.getNextPage}
          title={this.state.title}
          pageNo={this.state.pageNo}
        />

        
        <Product
          key={0}
         
          allProductList = {this.state.allProductList}
          // expiredProductList={this.state.expiredProductList}
          // expiringProductList={this.state.expiringProductList}
        />
      </React.Fragment>
    );
  }

  getAllProduct1 = (json, tile) => {
    console.log("allProductListTempallProductListTemp", json);
    this.setState({ allProductList: json, title: tile });
    // this.state.allProductList = json;
    // this.state.title = tile;
  };

  readData = () => {
    axios
      .get("assets/products.json")
      .then(response => {
        this.getAllProduct(response.data);
        this.getExpiredProduct(this.state.allProductList);
        this.goingToExpired(this.state.allProductList);
      })
      .catch(err => {
        console.log(err);
      });
  };

  getAllProduct(json, products = []) {
    if (json.hasOwnProperty("children")) {
      json.children.forEach(element => {
        this.getAllProduct(element, products);
      });
    } else {
      products.push(json);
    }
    this.setState({ allProductList: products });
    this.setState({ allProductListTemp: products });
    this.props.storeData(products);
    this.getPreviousPage(this.state.allProductList,10,this.state.pageNo,"")
    return products;
  }

  getExpiredProduct(allProduct) {
    let expiredProduct = allProduct.filter(function(element) {
      var warrantyP = element.warrantyPeriod.charAt(0);

      if (isNaN(warrantyP)) {
        warrantyP = 0;
      } else {
        warrantyP = parseInt(warrantyP);
      }

      var extendedW = element.extendedWarranty.charAt(0);

      if (isNaN(extendedW)) {
        extendedW = 0;
      } else {
        extendedW = parseInt(extendedW);
      }

      // warranty expiry time

      var orderedDate = new Date(element.orderedDate);
      var year = orderedDate.getFullYear();
      var month = orderedDate.getMonth();
      var day = orderedDate.getDate();
      var expiryDate = new Date(year + (warrantyP + extendedW), month, day);

      if (expiryDate < new Date()) {
        return element;
      }
    });
    this.setState({ expiredProductList: expiredProduct });
  }

  goingToExpired(allProduct) {
    let goingToExpiredProduct = allProduct.filter(function(element) {
      var warrantyP = element.warrantyPeriod.charAt(0);

      if (isNaN(warrantyP)) {
        warrantyP = 0;
      } else {
        warrantyP = parseInt(warrantyP);
      }

      var extendedW = element.extendedWarranty.charAt(0);

      if (isNaN(extendedW)) {
        extendedW = 0;
      } else {
        extendedW = parseInt(extendedW);
      }

      // warranty expiry time

      var orderedDate = new Date(element.orderedDate);
      var year = orderedDate.getFullYear();
      var month = orderedDate.getMonth();
      var day = orderedDate.getDate();
      var expiryDate = new Date(year + (warrantyP + extendedW), month, day);
      var currentDate = new Date();

      const diffTime = Math.abs(currentDate.getTime() - expiryDate.getTime());
      var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
      if (diffDays <= 120) {
        return element;
      }
    });

    this.setState({ expiringProductList: goingToExpiredProduct });
  }

  // pagination
  getPreviousPage = (array, page_size, page_number, pageType) => {
    let newarr = [];   
    console.log("arrayarrayarray",array);

    // if (this.state.allProductList.length>0  && this.state.isMoreItem===false) {

      if (pageType === "previous") {
        page_number = page_number - 1;
      } else if(pageType === "Next"){    //&& this.state.isMoreItem === true
        page_number = page_number + 1;
      }
      console.log("pageNopageNo", page_number);

      this.setState({pageNo: page_number });
      // because pages logically start with 1, but technically with 0
      newarr = array.slice(page_number * page_size,(page_number + 1) * page_size);
     
      if (newarr.length > 0) {
        this.setState({isMoreItem:false})
       
      }else{
        this.setState({isMoreItem:true})
      }
      console.log("newarrnewarrnewarr",newarr);
      this.setState({ allProductList: newarr });
    // }
   
  };
}




const mapDispatchToProps = (dispatch)=>{
  return{
      storeData: (allProduct)=>dispatch(storeData(allProduct))
      //  decrement: ()=>dispatch(decrement()),
      // reset: ()=>dispatch(reset())
  }
};

export default connect(null, mapDispatchToProps)(App);

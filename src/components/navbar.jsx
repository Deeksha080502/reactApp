import React, { Component } from "react";
import "../header.css";
import { connect } from "react-redux";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      // title: "Filter Products",
  // isOpen: false,
   pageLimit: 10,
    };
  }

  changeTitle = title => {
    this.setState({ title: title });
  };

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });
  render() {
    const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
    // const {counter,increment,decrement} = this.props;
    // console.log("===this.props", this.props.cart);
    return (
      <div>
        {
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand">
                  <b>All Products</b>
                </a>

                <a className ="PreviousButton" onClick={() =>
                    this.props.getPreviousPage(
                      this.props.allProducts,
                      this.state.pageLimit,
                      this.props.pageNo,
                      "previous"
                    )
                  }
                  className="previous round"
                >
                  &#8249;
                </a>
                <a className ="NextButton" onClick={() =>
                    this.props.getPreviousPage(
                      this.props.allProducts,
                      this.state.pageLimit,
                      this.props.pageNo,
                      "Next"
                    )
                  }
                  className="next round">
                  &#8250;
                </a>
                <Link
                  to=  "/products"
                    // state: { data: this.props.cart }
                    >
                  <span
                    className="badge badge-pill badge-secondary"
                    style={{
                      position: "absolute",
                      right: 0,
                      marginRight: 220,
                      marginTop: -15,
                      padding: 10
                    }}
                  >
                    {Object.keys(this.props.cart).length + " Cart"}
                  </span>
                </Link>
              </div>
              <ul className="nav navbar-nav">
                <li className="dropdown" onClick={this.toggleOpen}>
                  <a className="dropdown-toggle" data-toggle="dropdown">
                    {this.props.title}
                    <span className="caret" />
                  </a>
                  <ul className={menuClass}>
                    <li>
                      <a
                        onClick={() =>
                          this.props.getAllProduct1(
                            this.props.allProductListTemp,
                            "All Products"
                          )
                        }
                      >
                        All Products
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() =>
                          this.props.getAllProduct1(
                            this.props.expiredProductList,
                            "GetExpired"
                          )
                        }
                      > GetExpired</a>
                    </li>

                    <li>
                      <a
                        onClick={() =>
                          this.props.getAllProduct1(
                            this.props.expiringProductList,
                            "Going Expired"
                          )
                        }
                      >
                        Going Expired
                      </a>
                    </li>
                    <li>


                    <a onClick={() =>
                          this.props.getAllProduct1(
                            this.props.allProductListTemp,
                            "Filter Products"
                          )  
                        }
                      >
                        Clear Filter
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
   console.log("Navestatestate", state);
  return {
    cart: state.cart,
    allProducts : state.allProducts
  };
};

export default connect(mapStateToProps)(NavBar);
// export default NavBar;

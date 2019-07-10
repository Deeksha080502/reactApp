import { ESPIPE } from "constants";

// console.log("====",localStorage.getItem("cart"))
// var initCart = JSON.parse(localStorage.getItem("cart"));
// var initAllProducts = JSON.parse(localStorage.getItem("allProducts"));
const intialState = {
  // title: "Filter Products",
  // isOpen: false,
  // pageLimit: 10,
 
  cart: {},
  allProducts: {}
};


const reducer = (state = intialState, action) => {
  switch (action.type) {
    case "ADDTOCART":
      if (state.cart.hasOwnProperty(action.value)) {
        state.cart[action.value]++;
        // state.title.push(action.productName);
        state.cart = { ...state.cart };
      } else {
        state.cart[action.value] = 1;
        // state.title.push(action.productName);
        state.cart = { ...state.cart };
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));

      return { ...state };
    case "DECREMENT":
      if (state.cart[action.value] > 1) {
        state.cart[action.value]--;
        state.cart = { ...state.cart };
      }

      return { ...state };

    case "INCREMENT":
      state.cart[action.value]++;
      state.cart = { ...state.cart };
      return { ...state };

    case "DELETE":
      delete state.cart[action.value];
      state.cart = { ...state.cart };
      return { ...state };

    case "STOREDATA":
      state.allProducts = action.value;
      localStorage.setItem("allProducts", JSON.stringify(state.allProducts));
      return { ...state };

    // case 'RESET': return 0
    default:
      return { ...state };
  }
};

export default reducer;

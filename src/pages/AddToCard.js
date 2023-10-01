import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import {
  increaseQuantity,
  decreaseQuantity,
  removeProduct,
} from "../store/slices/Card";

import { useDispatch, useSelector } from "react-redux";


export default function Cart() {
  const cartArray = useSelector((state) => state.cartArray);
  const dispatch = useDispatch();
  const location = useLocation();
  const { productDetails, quantity } = location.state;

  console.log("Product Details:", productDetails);
  console.log("Quantity:", quantity);

  let [totalPrice, setTotalPrice] = useState(
    cartArray.reduce((sum, item) => sum + item.quantity * item.price, 0)
  );
  const updateTotal = () => {
    setTotalPrice(
      cartArray.reduce((sum, item) => sum + item.quantity * item.price, 0)
    );
  };

  useEffect(() => updateTotal(), [cartArray]);

  return (
    <>
      {cartArray.length != 0 ? (
        <>
          <div className="container text-start p-5 ">
            <h1 className="fw-bold ">Cart</h1>
            {cartArray.map((product) => {
              return (
                <>
                  <hr />
                  <div className="d-flex w-100 my-5">
                    <div className="photo w-50 d-flex ">
                      <img
                        src={product.image}
                        className="rounded"
                        width={"150px"}
                        height={"150px"}
                        alt="/"
                      ></img>
                      <div className="ms-2 p-2">
                        <h6>{product.title}</h6>
                        <h6>{product.brand}</h6>
                      </div>
                    </div>

                    <div className="w-50 d-flex justify-content-end ">
                      <div className="btn-group p-4  ">
                        <button
                          type="button"
                          onClick={() => dispatch(decreaseQuantity(product))}
                          className="btn btn-primary fs-2"
                        >
                          -
                        </button>
                        <button
                          type="button"
                          className="btn p-4  border-0 fs-3 disabled"
                        >
                          {product.quantity}
                        </button>
                        <button
                          type="button"
                          onClick={() => dispatch(increaseQuantity(product))}
                          className="btn btn-primary fs-2"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="w-25  p-4">
                      <button
                        className="btn btn-danger border border-1  w-100 h-100 fs-4 "
                        onClick={() => dispatch(removeProduct(product))}
                      >
                        X
                      </button>{" "}
                    </div>
                    <div className="w-25  d-flex align-items-center justify-content-center p-2">
                      <p className="fs-4 ">
                        {" "}
                        {product.price * product.quantity}$
                      </p>{" "}
                    </div>
                  </div>
                </>
              );
            })}

            <hr />
            <h1 className="text-end me-4 fw-bold">Total: {totalPrice} $</h1>
          </div>
        </>
      ) : (
        <h1 className=" container fw-bold">Empty Cart</h1>
      )}
    </>
  );
}



// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import {
//   increaseQuantity,
//   decreaseQuantity,
//   removeProduct,
// } from "../store/slices/Card";
// import { useDispatch, useSelector } from "react-redux";

// export default function Cart() {
//   const cartArray = useSelector((state) => state.cartArray);
//   const dispatch = useDispatch();
//   const location = useLocation();
//   const { productDetails, quantity } = location.state;

//   let [totalPrice, setTotalPrice] = useState(
//     cartArray.reduce((sum, item) => sum + item.quantity * item.price, 0)
//   );
//   const updateTotal = () => {
//     setTotalPrice(
//       cartArray.reduce((sum, item) => sum + item.quantity * item.price, 0)
//     );
//   };

//   useEffect(() => updateTotal(), [cartArray]);

//   return (
//     <>
//       {cartArray.length !== 0 ? (
//         <>
//           <div className="container text-start p-5 ">
//             <h1 className="fw-bold ">Cart</h1>
//             <div className="product-details">
//               <h2>Product Details:</h2>
//               <p>ID: {productDetails.id}</p>
//               <p>Title: {productDetails.title}</p>
//               <p>Brand: {productDetails.brand}</p>
//               <p>Price: {productDetails.price}</p>
//               <p>Quantity: {quantity}</p>
//             </div>

//             <hr />
//             <h1 className="text-end me-4 fw-bold">Total: {totalPrice} $</h1>
//           </div>
//         </>
//       ) : (
//         <h1 className=" container fw-bold">Empty Cart</h1>
//       )}
//     </>
//   );
// }

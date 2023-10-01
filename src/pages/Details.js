// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { axiosInstance } from "../apis/config.js";
// import renderStars from "../components/stars/Star.js";
// import { NavLink } from "react-router-dom";
// import { useDispatch } from "react-redux";


// export default function Details() {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     axiosInstance
//       .get(`/products/${id}`)
//       .then((res) => {
//         setProduct(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [id]);

//   const [count, setCount] = useState(1);
//   const increaseCount = () => {
//     let newCount = count + 1;
//     if (newCount <= currentProduct[0].stock) {
//       setCount(newCount);
//     }
//   };
//   const decreaseCount = () => {
//     let newCount = count - 1;
//     if (newCount > 0) {
//       setCount(newCount);
//     }
//   };

//   const dispatch = useDispatch();

//   return (
//     <>
//       <div className="container text-center mt-5">
//         {product ? (
//           <div className="row">
//             <div className="col text-center">
//               <img
//                 src={product.thumbnail}
//                 className="card-img-top"
//                 alt="Product"
//                 style={{
//                   height: "500px",
//                   width: "500px",
//                 }}
//               />
//             </div>
//             <div className="col text-start">
//               <h3 className="card-title">{product.title}</h3>
//               <h6 className="card-title">Category: {product.category}</h6>
//               <p className="card-text">{product.description}</p>
//               <p className="card-text">Brand: {product.brand}</p>
//               <p className="card-text">Rating: {renderStars(product.rating)}</p>
//               {product.discountPercentage ? (
//                 <>
//                   <p className="card-text">
//                     Price: <del>{product.price}$</del>{" "}
//                     <strong>
//                       {(
//                         product.price -
//                         (product.price * product.discountPercentage) / 100
//                       ).toFixed(2)}
//                       $
//                     </strong>{" "}
//                     ({product.discountPercentage}% off)
//                   </p>
//                 </>
//               ) : (
//                 <p className="card-text">Price: {product.price}$</p>
//               )}
//               <button className="btn btn-info m-3"> Buy Now </button>
//               <NavLink
//                 to="/add-to-card"
//                 className="btn btn-danger m-2"
//                 activeClassName="active-link"
//                 onClick={() =>
//                   dispatch(
//                     addProductWQuantity({
//                       item: currentProduct[0],
//                       quantity: count,
//                     })
//                   )
//                 }

//               >
//                 Add To Card
//               </NavLink>
//             </div>
//           </div>
//         ) : (
//           <p>No product</p>
//         )}
//       </div>
//     </>
//   );
// }

import { axiosInstance } from "../apis/config.js";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProductWQuantity } from "../store/slices/Card.js";

const ProductDetail = () => {
  const params = useParams();
  const currentProduct = useState(
    axiosInstance.find((product) => product.id == params.id)
  );
  const discountPrice = useState(
    (
      currentProduct[0].price -
      (currentProduct[0].price * currentProduct[0].discountPercentage) / 100
    ).toFixed(2)
  );
  useEffect(() => {
    axiosInstance
      .get(`/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const [count, setCount] = useState(1);
  const increaseCount = () => {
    let newCount = count + 1;
    if (newCount <= currentProduct[0].stock) {
      setCount(newCount);
    }
  };
  const decreaseCount = () => {
    let newCount = count - 1;
    if (newCount > 0) {
      setCount(newCount);
    }
  };
  const dispatch = useDispatch();
  return (
    <>
      <div className="container d-flex flex-col ">
        <div className="m-5">
          <img
            src={currentProduct[0].thumbnail}
            style={{ height: "40rem", width: "40rem" }}
            className="rounded"
            alt="/"
          />
        </div>

        <div className="m-5 text-start">
          <h1 className="text-dark fw-bold  mb-2">{currentProduct[0].title}</h1>
          <h6 className=" ">{currentProduct[0].description}</h6>
          <h6 className="">Rating : {currentProduct[0].rating}</h6>

          <hr className="mt-5 mb-2" />
          <h4 className="fw-bold">
            <span className="text-decoration-line-through  me-2">
              {currentProduct[0].price}$
            </span>
            {discountPrice}$ or 99.9$/month
          </h4>
          <h6>Suggested payments with 6 months special financing</h6>
          <hr className="mt-5 mb-2" />

          <div className="position-relative">
            <div className="position absolute text-center  text-light w-25">
              {currentProduct[0].stock == 0 ? (
                <h6 className="bg-danger p-1 rounded">Out of Stock</h6>
              ) : (
                <h6 className="bg-success  p-1 rounded">In Stock</h6>
              )}
            </div>

            <h4 className="info d-flex flex-col mt-4 mb-2 fw-bold">
              More Information
            </h4>
            <div className="d-flex flex-row ">
              <h4 className="p-2 text-center fs-5 rounded me-2 my-2 bg-secondary text-light">
                {currentProduct[0].category}
              </h4>
              <h4 className="p-2 text-center bg-secondary text-light m-2 fs-5 rounded">
                {currentProduct[0].brand}
              </h4>
            </div>
          </div>
          <hr className="mt-5 mb-2" />

          <div className="d-flex flex-row">
            <button
              type="button"
              className="btn rounded-0 fs-4 bg-info"
              onClick={decreaseCount}
            >
              -
            </button>
            <span className="px-4 py-2  bg-danger fs-4 ">{count}</span>
            <button
              type="button"
              className="btn rounded-0 fs-4 bg-info"
              onClick={increaseCount}
            >
              +
            </button>

            <h6 className="fs-5  mx-2 my-auto">
              Currently in Stock: {currentProduct[0].stock}
            </h6>
          </div>
          <div className="d-flex flex-row justify-content-around mt-5">
            <button
              className={
                currentProduct[0].stock != 0
                  ? `btn bg-success text-light p-3 px-5 fs-4 border rounded border-dark`
                  : `btn bg-secondary disabled text-light p-3 px-5 fs-4 border rounded border-dark `
              }
            >
              Buy Now
            </button>
            <button
              className={
                currentProduct[0].stock != 0
                  ? "btn bg-light text-dark p-3 px-5 fs-4  border rounded border-dark"
                  : "btn bg-secondary disabled text-light p-3 px-5 fs-4  border rounded border-dark"
              }
              onClick={() =>
                dispatch(
                  addProductWQuantity({
                    item: currentProduct[0],
                    quantity: count,
                  })
                )
              }
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetail;

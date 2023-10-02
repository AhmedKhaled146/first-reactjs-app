import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../apis/config.js";
import renderStars from "../components/stars/Star.js";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/slices/Card.js";

export default function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);

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

  return (
    <>
      <div className="container text-center mt-5">
        {product ? (
          <div className="row">
            <div className="col text-center">
              <img
                src={product.thumbnail}
                className="card-img-top"
                alt="Product"
                style={{
                  height: "500px",
                  width: "500px",
                }}
              />
            </div>
            <div className="col text-start">
              <h3 className="card-title">{product.title}</h3>
              <h6 className="card-title">Category: {product.category}</h6>
              <p className="card-text">{product.description}</p>
              <p className="card-text">Brand: {product.brand}</p>
              <p className="card-text">Rating: {renderStars(product.rating)}</p>
              {product.discountPercentage ? (
                <>
                  <p className="card-text">
                    Price: <del>{product.price}$</del>{" "}
                    <strong>
                      {(
                        product.price -
                        (product.price * product.discountPercentage) / 100
                      ).toFixed(2)}
                      $
                    </strong>{" "}
                    ({product.discountPercentage}% off)
                  </p>
                </>
              ) : (
                <p className="card-text">Price: {product.price}$</p>
              )}

              <button className="btn btn-info m-3"> Buy Now </button>
              <button className="btn btn-danger m-2" onClick={() => dispatch(addToCart(product))}>
                Add To Card
              </button>
            </div>
          </div>
        ) : (
          <p>No product</p>
        )}
      </div>
    </>
  );
}

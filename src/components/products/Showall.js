import React from "react";
import { useNavigate } from "react-router-dom";
import Stock from "../stock/Stock.js";
import renderStars from "../stars/Star.js";

function Showall(props) {
  const navigate = useNavigate();

  const redirectToDetails = (id) => {
    navigate("/details/" + id);
  };

  const addToCart = () => {
    const productDetails = {
      id: props.productdata.id,
      title: props.productdata.title,
      brand: props.productdata.brand,
      thumbnail: props.productdata.thumbnail,
      price: props.productdata.price,
      stock: props.productdata.stock,
    };
    const quantity = 1;

    navigate("/add-to-card", {
      state: { productDetails, quantity },
    });
  };

  return (
    <>
      <div
        className="card"
        style={{
          height: "500px",
          maxWidth: "300px",
          alignItems: "",
        }}
      >
        <span className="stock">{Stock(props.productdata.stock)}</span>
        <img
          src={props.productdata.thumbnail}
          className="card-img-top"
          alt="..."
          style={{
            maxHeight: "150px",
            idth: "100%",
            alignItems: "center",
          }}
        />

        <div className="card-body">
          <h5 className="card-title">{props.productdata.title}</h5>
          <p className="card-text">{props.productdata.description}</p>
          {props.productdata.discountPercentage ? (
            <>
              <p className="card-text">
                Price: <del>{props.productdata.price}$</del>{" "}
                <strong>
                  {(
                    props.productdata.price -
                    (props.productdata.price *
                      props.productdata.discountPercentage) /
                      100
                  ).toFixed(2)}
                  $
                </strong>{" "}
                ({props.productdata.discountPercentage}% off)
              </p>
            </>
          ) : (
            <p className="card-text">Price: {props.productdata.price}$</p>
          )}
          Rating: {renderStars(props.productdata.rating)}
          <br />
          <br />
          <button
            className="btn btn-info"
            onClick={() => redirectToDetails(props.productdata.id)}
          >
            {" "}
            Details{" "}
          </button>
          <button className="btn btn-danger m-2" onClick={addToCart}>
            Add To Card
          </button>
        </div>
      </div>
    </>
  );
}

export default Showall;

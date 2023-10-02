import React from "react";
import { useNavigate } from "react-router-dom";
import Stock from "../stock/Stock.js";
import renderStars from "../stars/Star.js";
import { addToCart } from "../../store/slices/Card.js";
import { useDispatch } from "react-redux";



function Showall(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const redirectToDetails = (id) => {
    navigate("/details/" + id);
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
          <button className="btn btn-danger m-2" onClick={() => dispatch(addToCart(props.productdata))}>
            Add To Card
          </button>
        </div>
      </div>
    </>
  );
}

export default Showall;

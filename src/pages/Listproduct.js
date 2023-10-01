import React, {useState, useEffect} from "react";
import Showall from "../components/products/Showall.js";
import {axiosInstance} from '../apis/config.js'



export default function List() {
  const [data, setData] = useState([]);
  useEffect(() =>{
    axiosInstance.get("/products")
    .then((res)=>setData(res.data.products))
    .catch();
  }, []);

  return (
    <>
      <div className="container">
        <h1>All Products</h1>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {data.map((productdata) => (
            <div className="col" key={productdata.id}>
              <Showall productdata={productdata} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

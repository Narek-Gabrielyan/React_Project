// Libraries
import React, { useState } from "react";

// CSS
import cssProd from "./Products.module.css";

export default function Products({ products }) {
  const [titleLength, setTitleLength] = useState(100);
  const num = 5;
  const [count, setCount] = useState(0);
  const [quantity, setQuantity] = useState(num);

    const prev = () => {
        if (count > 0) {
            setCount(count - num)
            setQuantity(quantity - num)
        }
    }
    const next = () => {
        if (quantity < products.length) {
            setCount(count + num)
            setQuantity(quantity + num)
        }
    }
    
  return (
    <div className={cssProd.prod_box}>
      {products.slice(count, quantity).map((elem) => (
        <div style={{ border: "1px solid black" }} key={elem.id}>
          <img
            src={elem.image}
            alt={"Img_Id= " + elem.id}
            style={{ width: "100px" }}
          />
          <div>
            <h4>
              {elem.title.length <= titleLength
                ? elem.title
                : `${elem.title.slice(0, titleLength)}...`}
            </h4>
          </div>
        </div>
      ))}
      <div className={cssProd.btnBox}>
        <span onClick={prev} className={cssProd.btnBoxItem}>
          Prev
        </span>
        <span onClick={next} className={cssProd.btnBoxItem}>
          Next
        </span>
      </div>
    </div>
  );
}

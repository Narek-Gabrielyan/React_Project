import React from "https://cdn.skypack.dev/react@^16.13.1";
import Masonry from "https://cdn.skypack.dev/react-responsive-masonry@2.1.0";
// import ReactDOM from "https://cdn.skypack.dev/react-dom@^16.13.1";

import { images } from "../../Relative_DataBase/All_Database.js";

// css style
const container = {
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  width: "640px",
};

export function Slider() {
  return (
    <div className={container}>
      <Masonry columnsCount={3} gutter={4}>
        {images.map((image) => (
          <img src={image} style={{ width: "100%", borderRadius: "4px" }} key={image} />
        ))}
      </Masonry>
    </div>
  );
}

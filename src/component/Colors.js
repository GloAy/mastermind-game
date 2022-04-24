import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/fontawesome-free-regular";

const colors = {
  0: (
    <FontAwesomeIcon icon={faStar} style={{ color: "red", fontSize: "40px" }} />
  ),
  1: (
    <FontAwesomeIcon
      icon={faStar}
      style={{ color: "black", fontSize: "40px" }}
    />
  ),
  2: (
    <FontAwesomeIcon
      icon={faStar}
      style={{ color: "blue", fontSize: "40px" }}
    />
  ),
  3: (
    <FontAwesomeIcon
      icon={faStar}
      style={{ color: "yellow", fontSize: "40px" }}
    />
  ),
  4: (
    <FontAwesomeIcon
      icon={faStar}
      style={{ color: "green", fontSize: "40px" }}
    />
  ),
  5: (
    <FontAwesomeIcon
      icon={faStar}
      style={{ color: "purple", fontSize: "40px" }}
    />
  ),
  6: (
    <FontAwesomeIcon
      icon={faStar}
      style={{ color: "orange", fontSize: "40px" }}
    />
  ),
  7: (
    <FontAwesomeIcon
      icon={faStar}
      style={{ color: "brown", fontSize: "40px" }}
    />
  ),
};

export default colors;

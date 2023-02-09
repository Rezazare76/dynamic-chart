import React from "react";
import PropTypes from "prop-types";
import "./item.css";
const Item = ({
  content,
  secondContent,
  unit,
  unitClass,
  containerClass,
  id,
  style,
  itemKey,
  relation,
}) => {
  return (
    <li
      className={`text-center border border-2 border-dark cursor-pointer position-relative ${containerClass}`}
      id={id}
      style={style}
      key={itemKey}
    >
      {content}
      {secondContent && <div>{secondContent}</div>}
      {unit && <div className={`${unitClass}`}>واحد {unit}</div>}
      {relation &&
        relation.arrow.map((item, index) => {
          return (
            <div
              className={`arrow position-absolute ${item.class}`}
              style={{
                top: `${item.top}%`,
                right: `${item.right}%`,
                rotate: `${item.rotate}deg`,
              }}
              key={index}
            ></div>
          );
        })}
      {relation &&
        relation.line.map((item, index) => {
          return (
            <div
              className={`line position-absolute ${item.class}`}
              style={{
                top: `${item.top}%`,
                right: `${item.right}%`,
                height: `${item.height}%`,
                rotate: `${item.rotate}deg`,
              }}
              key={index}
            ></div>
          );
        })}
    </li>
  );
};

Item.defaultProps = {
  containerClass: "py-2 px-4",
  unitClass: "pt-1",
};

export default Item;

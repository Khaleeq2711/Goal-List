import React from "react";

import style from "./Goal.module.css"; //using CSS MODULES...BEST WAY ..coz it creates Unique Classes..!
//IF f-name is property name in there..in JS and React its INVALID use  style.f-name => style['f-name']
const Goal = (props) => {
  return (
    <div className={style.main}>
      <div className={`${style.name} ${!props.name === "a" && style.name2}`}>
        {" "}
        {/*Dynamically Naming Classes of Module css*/}
        {props.name}
      </div>{" "}
      <div className={style.time}>{``}{props.time}</div>
      <button className={style.btn} onClick={props.onClick}>delete</button>
      
    </div>
  );
};

export default Goal;

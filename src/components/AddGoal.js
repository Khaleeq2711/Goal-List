import React, { useEffect, useState } from "react";

import "./AddGold.css";

function AddGoal(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredTime, setEnteredTime] = useState('');
  const [nameValid, setnameValid] = useState("Invalid Name");
  const [validColor, setValidColor] = useState("white");

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const timeChangeHandler = (e) => {
    setEnteredTime(e.target.value); //When we Read, its in STIRING Form.
  };
  const submitHandler = (e) => {
    e.preventDefault(); //prevent default behavior...
    if (enteredName.trim().length <= 2) {
      setValidColor("red");
      return;
    } else {
      const goalData = {
        name: enteredName,
        time: enteredTime.length === 0 ? `` :  `${enteredTime}d`,
      };
      // if(goalData.time===0){}
      props.onAdd(goalData); //Sends Data to PArent
      setEnteredTime('');
      setEnteredName("");
    }
  };

  useEffect(() => {
    if (enteredName.length > 2) {
      //Starting from Zero
      setnameValid("Valid Name");
      setValidColor("green");
    } else {
      setnameValid("Invalid Name");
      setValidColor("white");
    }
  }, [enteredName]);

  return (
    <div className="add-main-main">
      <form onSubmit={submitHandler}>
        <div className="add-main">
          <div
            className={`add-name ${validColor === "red" ? "invalid" : ""} ${
              validColor === "green" ? "valid" : ""
            }`}
          >
            <label>Goal Name</label>
            <input
              type={"text"}
              value={enteredName}
              onChange={nameChangeHandler}
              required
            />{" "}
            {/*Two Way Binding...value={variable}*/}
            <p style={{ color: validColor }}>{nameValid}</p>{" "}
            {/* Inline Style Dynamically..  Most Priority*/}
          </div>
          <div className="add-time">
            <label>Time (days)</label>
            <input
              type={"number"}
              min={"0..1"}
              step={"0.1"}
              value={enteredTime}
              placeholder='0'
              onChange={timeChangeHandler}
            />
          </div>
        </div>
        <div className="add-button">
          <button type="submit">
            <h3>Add GOAL</h3>
          </button>{" "}
          {/*onClick Listner is not Best Approach here*/}
        </div>
      </form>
    </div>
  );
}

export default AddGoal;

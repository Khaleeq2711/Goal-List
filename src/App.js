import React, { useState } from "react";

import "./App.css";
import GoalList from "./components/GoalList";
import AddGoal from "./components/AddGoal";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function App() {
  const items = [];
  const [goals, setGoals] = useState(items);
  const [open, setOpen] = useState(false);
  const [dlt_goal, setDlt_goal] = useState("items");

  const onAddHandler = (newGoalData) => {
    console.log(newGoalData);
    let newGoal = { ...newGoalData, id: Math.random().toString() };
    setGoals([newGoal, ...goals]);
  };

  const deleteHandler = (gol) => {
    const filter_goal = goals.filter((goal_id) => goal_id.id !== gol.id);
    // const deleted_name = goals.filter((goal_name) => goal_name.n === id);
    setDlt_goal(gol.name);
    console.log(dlt_goal);
    setGoals(filter_goal);
    setOpen(true);
  };

  const handleClose = () => {
    // setState({ ...state, open: false });
    setOpen(false);
  };

  return (
    <div className="App">
      <div>
        <h1>GOAL List</h1>
      </div>

      <AddGoal goals={goals} onAdd={onAddHandler} />

      <div className="list-heading">
        <h3 className="goal"> 
          <u>Goal</u>
        </h3>
        <h3 className="time">
          <u>Time</u>
        </h3>
        <h4>(Click Done to Remove)</h4>
      </div>
      {goals?.length === 0 && <h1>No Goals Found !!</h1>}
      <GoalList goals={goals} callBack={deleteHandler} />
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          {dlt_goal + "  Deleted"}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default App;

import React from "react";

import Goal from "./Goal";
const GoalList = (props) => {


  return (
  props.goals.map((goal) => {
    return( <Goal 
        key={goal.id}
        name={goal.name}
        time={goal.time}
        onClick={()=> {
          // props.goals.filter((goal_id) => goal_id.id !== goal.id);
          props.callBack(goal);
          console.log('click')
        }}
      />);
     
  })
 )
}

export default GoalList;

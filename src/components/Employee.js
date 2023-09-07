import React from 'react'

export default function Employee(props) {
   

  return (
    <>
    <h3>Employee {props.name}</h3>
    {/* {props.role ? <p>{props.role}</p>: <p>Don't have a role yet</p>} */}
    <p>{props.role ? props.role : "The role is not decided yet."}</p>
    </>
  );
}

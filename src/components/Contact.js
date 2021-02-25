import React from "react";
import auth from "../Auth";

const Contact = (props) => {
  const logoutHandler = () => auth.logout(() => props.history.push("/"));

  return (
    <div className="container">
      <h3>Contact</h3>
      <button onClick={logoutHandler}>logout</button>
    </div>
  );
};

export default Contact;

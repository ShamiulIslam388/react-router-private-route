import React from "react";

const Contact = (props) => {
  const logoutHandler = () => {
    localStorage.removeItem("token");
    props.history.push("/");
  };

  return (
    <div className="container">
      <h3>Contact</h3>
      <button onClick={logoutHandler}>logout</button>
    </div>
  );
};

export default Contact;

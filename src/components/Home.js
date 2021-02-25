import React from "react";
import auth from "../Auth";

const Home = (props) => {
  const loginHandler = () => auth.login(() => props.history.push("/contact"));

  return (
    <div className="container">
      <h3>Home</h3>
      <button onClick={loginHandler}>login</button>
    </div>
  );
};

export default Home;

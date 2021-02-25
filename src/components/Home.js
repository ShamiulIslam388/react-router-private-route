import React from "react";

const Home = (props) => {
  const loginHandler = () => {
    localStorage.setItem("token", "secret token");
    props.history.push("/contact");
  };

  return (
    <div className="container">
      <h3>Home</h3>
      <button onClick={loginHandler}>login</button>
    </div>
  );
};

export default Home;

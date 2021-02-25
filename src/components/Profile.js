import react from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { name } = useParams();
  return <div className="container">Profile: {name}</div>;
};

export default Profile;

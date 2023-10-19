import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

 function Red() {
  const navigate = useNavigate ();
    setTimeout(() => {
        navigate('/blue')
    }, 5000);
  return (
    <div className="red">
      <h1>RED</h1>
    </div>
  );
}
export default Red;

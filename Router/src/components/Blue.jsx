import React from "react";
import { useNavigate } from "react-router-dom";

 function Blue() {
    const navigate = useNavigate ();
    setTimeout(() => {
        navigate('/red')
    }, 5000);
    return (
      <div className="blue">
        <h1>BLUE</h1>
      </div>
    );
  }
  
  export default Blue;
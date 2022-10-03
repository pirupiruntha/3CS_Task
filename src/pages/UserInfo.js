import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./UserInfo.css";

function UserInfo() {
  const [user, setuser] = useState([]);
  const { id } = useParams();
  // get api by id
  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${id}`).then((response) => {
      setuser(response.data.data);
    });
  }, []);

  return (
    <div>
      <div className="header-user-info">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          Back
        </Link>
      </div>
      <div className="main" style={{ paddingTop: "100px" }}>
        <div className="container">
          <div className="image_container">
            <img src={user.avatar} alt="" />
          </div>
          <div className="details">
            <div className="detail_container">
              <div className="title">First Name</div>
              <div className="names">{user.first_name}</div>
            </div>
            <div className="detail_container">
              <div className="title">Last Name</div>
              <div className="names">{user.last_name}</div>
            </div>
            <div className="detail_container">
              <div className="title">E-mail</div>
              <div className="names">{user.email}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;

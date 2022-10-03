import React, { useEffect, useState } from "react";
import User from "../components/User";
import axios from "axios";
import "./UserList.css";

function UserList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=1").then((response) => {
      setUsers(response.data.data);
    });
  }, []);
  return (
    <div>
      <div className="header">Title</div>
      <div style={{ padding: "10px" }}>
        <div className="title" style={{ marginBottom: "20px" }}>
          Users
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="users">
            {users &&
              users.map((item) => {
                return (
                  <User
                    key={item.id}
                    image={item.avatar}
                    name={item.first_name}
                    email={item.email}
                    userId={item.id}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserList;

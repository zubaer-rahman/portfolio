import React from "react";
import "./AdminPanel.css";
import { Typography } from "@mui/material";
const AdminPanel = () => {
  return (
    <div className="adminPanel">
      {" "}
      <div className="AdminPanelContainer">
        <Typography variant="h4">
          <p>A</p>
          <p>D</p>
          <p>M</p>
          <p>I</p>
          <p style={{ marginRight: "1vmax" }}>N</p>
          <p>P</p>
          <p>A</p>
          <p>N</p>
          <p>E</p>
          <p>L</p>
        </Typography>
        {/* <form onSubmit={submitHandler}>
            <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
         </form> */}
      </div>
    </div>
  );
};

export default AdminPanel;

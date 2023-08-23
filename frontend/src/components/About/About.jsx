import { Typography } from "@mui/material";
import React from "react";
import "./About.css";

const About = ({ about }) => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>This is a simple quote</Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <img
            src="https://media.licdn.com/dms/image/C5603AQGY2tdaXsbu_A/profile-displayphoto-shrink_800_800/0/1646923186598?e=1698278400&v=beta&t=Yl6QhW5UzbnsUsL12YFeuDfFV91eIdy4zF90NoFZwuY"
            alt="Zubu"
            className="aboutAvatar"
          />

          <Typography
            variant="h4"
            style={{ margin: "1vmax 0", color: "black" }}
          >
            Zubaer
          </Typography>

          <Typography>Full stack programmer</Typography>

          <Typography style={{ margin: "1vmax 0", textAlign: "center" }}>
            A youtuber
          </Typography>
        </div>

        <div>
          <Typography
            style={{
              wordSpacing: "5px",
              lineHeight: "50px",
              letterSpacing: "5px",
              textAlign: "right",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            asperiores est ducimus, ipsa quasi neque dignissimos earum,
            voluptates repellat cupiditate vero.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import "./Profile.css";
import img1 from "../../assets/images/profile/arrow_left_alt.png";
import img2 from "../../assets/images/profile/edit.png";
import img3 from "../../assets/images/profile/12.png";
import {
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

function Profile() {
  return (
    <>
      <div className="page">
        <div className="contenu">
          <div className="entete">
            <div className="fleche">
              <Avatar src={img1} alt="fleche" />
            </div>
            <div className="titre">
              <Typography> My Proflie </Typography>
            </div>
            <div className="editation">
              <Avatar src={img2} alt="edit" />s
            </div>
          </div>

          {/* <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <ListItem>
              <Avatar src={img1} alt="fleche" />
              <ListItemText primary="My Profile" />
              <Avatar src={img2} alt="edit" />
            </ListItem>
          </List> */}

          <div className="corps">
            <div className="texte">
              <div className="photo">
                <img src={img3} alt="photo" />
              </div>
              <div className="textfield"></div>
            </div>
            <div className="bouton"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;

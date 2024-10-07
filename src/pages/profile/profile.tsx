import React, { useState } from "react";
import "./Profile.css";
import img1 from "../../assets/images/profile/arrow_left_alt.png";
import img2 from "../../assets/images/profile/universal_currency.png";
import img3 from "../../assets/images/profile/12.png";
import img4 from "../../assets/images/profile/allergies.png";
import img5 from "../../assets/images/profile/call.png";
import img6 from "../../assets/images/profile/mail.png";
import img7 from "../../assets/images/profile/home.png";
import {
  Avatar,
  Typography,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import Header from "../../components/header/Header";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { useNavigate } from "react-router-dom";

interface Profile {
  Medical_ID: string;
  state: string;
  contact: string;
  email: string;
  adresse: string;
}

function Profile() {
  const [medecin, setMedecin] = useState<Profile>({
    Medical_ID: "GRCFNCXXXXXXXXXX",
    state: "No allergies",
    contact: "(555) 123-4567",
    email: "francesca.greco@example.com ",
    adresse: "123 Vision Lane Suite 2000 Cityville, ST 12345 ",
  });

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editID, setEditID] = useState<string>(medecin.Medical_ID);
  const [editState, setEditState] = useState<string>(medecin.state);
  const [editContact, setEditContact] = useState<string>(medecin.contact);
  const [editEmail, setEditEmail] = useState<string>(medecin.email);
  const [editAdresse, setEditAdresse] = useState<string>(medecin.adresse);
  const navigate = useNavigate();

  const handleIsEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setMedecin({
      Medical_ID: editID,
      state: editState,
      contact: editContact,
      email: editEmail,
      adresse: editAdresse,
    });
    setIsEditing(false);
  };

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="profile_container">
      <Header
        title="My Profile"
        showBackButton={true}
        showRightButton={!isEditing && true}
        onRightButtonClick={handleIsEditing}
        RightButton={<ModeEditIcon />}
      />
      <div className="page">
        <div className="contenu">
          <div className="corps">
            <div className="photo">
              <img src={img3} alt="photo" />
            </div>
            <div className="texte">
              <div className="titre">
                <Typography> Francesca Greco</Typography>
              </div>
              <div className="textfield">
                <TextField
                  disabled={!isEditing}
                  fullWidth
                  value={editID}
                  label="Medical ID"
                  sx={{ m: 1 }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={img2} alt="id" />
                      </InputAdornment>
                    ),
                  }}
                  onChange={(e) => setEditID(e.target.value)}
                />

                <TextField
                  disabled={!isEditing}
                  fullWidth
                  value={editState}
                  label="State"
                  sx={{ m: 1 }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={img4} alt="allergie" />
                      </InputAdornment>
                    ),
                  }}
                  onChange={(e) => setEditState(e.target.value)}
                />

                <TextField
                  disabled={!isEditing}
                  fullWidth
                  value={editContact}
                  label="Phone number"
                  sx={{ m: 1 }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={img5} alt="Phone number" />
                      </InputAdornment>
                    ),
                  }}
                  onChange={(e) => setEditContact(e.target.value)}
                />

                <TextField
                  disabled={!isEditing}
                  fullWidth
                  value={editEmail}
                  label="Email"
                  sx={{ m: 1 }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={img6} alt="email" />
                      </InputAdornment>
                    ),
                  }}
                  onChange={(e) => setEditEmail(e.target.value)}
                />

                <TextField
                  disabled={!isEditing}
                  fullWidth
                  value={editAdresse}
                  label="Adresse"
                  sx={{ m: 1 }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={img7} alt="adresse" />
                      </InputAdornment>
                    ),
                  }}
                  onChange={(e) => setEditAdresse(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="button">
            {!isEditing ? (
              <>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={handleLogout}
                  sx={{
                    backgroundColor: "red",
                    color: "white",
                    fontWeight: "bold",
                    flex: 1,
                  }}
                  type="submit"
                >
                  LOGOUT
                </Button>
              </>
            ) : (
              <Button
                variant="contained"
                onClick={handleSave}
                sx={{
                  backgroundColor: "red",
                  color: "white",
                  fontWeight: "bold",
                  flex: 1,
                }}
              >
                Save
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

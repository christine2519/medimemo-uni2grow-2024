import React, { useState } from "react";
import "./Profile.css";
import img1 from "../../assets/images/profile/save (1).png";
import img2 from "../../assets/images/profile/universal_currency.png";
import img3 from "../../assets/images/profile/12.png";
import img4 from "../../assets/images/profile/allergies.png";
import img5 from "../../assets/images/profile/call.png";
import img6 from "../../assets/images/profile/mail.png";
import img7 from "../../assets/images/profile/home.png";
import img8 from "../../assets/images/profile/cancel.png";
import LogoutIcon from "@mui/icons-material/Logout";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import {
  Avatar,
  Typography,
  TextField,
  InputAdornment,
  Button,
  ListItemText,
} from "@mui/material";
import Header from "../../components/header/Header";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

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
  const [activeField, setActiveField] = useState<string | null>(null);
  const [openLogoutDialog, setOpenLogoutDialog] = useState<boolean>(false);
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
    // setOpenLogoutDialog(true);
  };

  const handlesaveConfirm = () => {
    setMedecin({
      Medical_ID: editID,
      state: editState,
      contact: editContact,
      email: editEmail,
      adresse: editAdresse,
    });
    setOpenLogoutDialog(false);
    setIsEditing(false);
  };

  const handlesaveCancel = () => {
    setOpenLogoutDialog(false);
  };

  const handleCancel = () => {
    setEditID(medecin.Medical_ID);
    setEditState(medecin.state);
    setEditContact(medecin.contact);
    setEditEmail(medecin.email);
    setEditAdresse(medecin.adresse);
    setIsEditing(false);
  };

  const handleField = (field: string) => {
    setActiveField(field);
  };

  const handleLogoutDialogOpen = () => {
    setOpenLogoutDialog(true);
  };

  const handleLogoutCancel = () => {
    setOpenLogoutDialog(false);
    navigate("/profile");
  };

  const handleLogoutConfirm = () => {
    navigate("/login");
  };

  const handlePrev = () => {
    navigate("/login");
  };

  return (
    <div className="profile_container">
      <Header
        title="My Profile"
        showBackButton={true}
        showRightButton={!isEditing && true}
        onRightButtonClick={handleIsEditing}
        onBackButtonClick={handlePrev}
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
              <form>
                <div className="textfield">
                  <TextField
                    disabled={!isEditing}
                    fullWidth
                    id="outlined-basic"
                    label="Medical_ID"
                    variant="outlined"
                    color="error"
                    value={editID}
                    sx={{ flex: 1 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <img src={img4} alt="ID" />
                        </InputAdornment>
                      ),

                      endAdornment: isEditing && (
                        <InputAdornment position="end">
                          <div className="image" onClick={handleCancel}>
                            <img src={img8} alt="cancel" />
                          </div>
                        </InputAdornment>
                      ),
                    }}
                    onChange={(e) => setEditState(e.target.value)}
                  />

                  <TextField
                    disabled={!isEditing}
                    fullWidth
                    id="outlined-basic"
                    label="State"
                    variant="outlined"
                    color="error"
                    value={editState}
                    sx={{ flex: 1 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <img src={img4} alt="allergie" />
                        </InputAdornment>
                      ),

                      endAdornment: isEditing && (
                        <InputAdornment position="end">
                          <div className="image" onClick={handleCancel}>
                            <img src={img8} alt="cancel" />
                          </div>
                        </InputAdornment>
                      ),
                    }}
                    onChange={(e) => setEditState(e.target.value)}
                  />

                  <TextField
                    disabled={!isEditing}
                    fullWidth
                    id="outlined-basic"
                    label="Phone Number"
                    variant="outlined"
                    color="error"
                    value={editContact}
                    sx={{ flex: 1 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <img src={img4} alt="call" />
                        </InputAdornment>
                      ),

                      endAdornment: isEditing && (
                        <InputAdornment position="end">
                          <div className="image" onClick={handleCancel}>
                            <img src={img8} alt="cancel" />
                          </div>
                        </InputAdornment>
                      ),
                    }}
                    onChange={(e) => setEditState(e.target.value)}
                  />

                  <TextField
                    disabled={!isEditing}
                    fullWidth
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    color="error"
                    value={editEmail}
                    sx={{ flex: 1 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <img src={img4} alt="allergie" />
                        </InputAdornment>
                      ),

                      endAdornment: isEditing && (
                        <InputAdornment position="end">
                          <div className="image" onClick={handleCancel}>
                            <img src={img8} alt="cancel" />
                          </div>
                        </InputAdornment>
                      ),
                    }}
                    onChange={(e) => setEditState(e.target.value)}
                  />

                  <TextField
                    disabled={!isEditing}
                    fullWidth
                    id="outlined-basic"
                    label="Adresse"
                    variant="outlined"
                    color="error"
                    value={editAdresse}
                    sx={{ flex: 1 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <img src={img4} alt="allergie" />
                        </InputAdornment>
                      ),

                      endAdornment: isEditing && (
                        <InputAdornment position="end">
                          <div className="image" onClick={handleCancel}>
                            <img src={img8} alt="cancel" />
                          </div>
                        </InputAdornment>
                      ),
                    }}
                    onChange={(e) => setEditState(e.target.value)}
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="button">
            {!isEditing ? (
              <>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={handleLogoutDialogOpen}
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
                <img src={img1} alt="save" />
                Save
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="dialog">
        <Dialog open={openLogoutDialog} onClose={handleLogoutCancel}>
          <ReportGmailerrorredIcon />
          <DialogTitle>Log-out Confirmation</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to log out? Any unsaved changes will be lost
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleLogoutCancel}
              color="primary"
              sx={{
                color: "black",
              }}
            >
              <ArrowBackIosIcon />
              BACK
            </Button>
            <Button
              onClick={handleLogoutConfirm}
              color="primary"
              sx={{ color: "red" }}
            >
              <LogoutIcon />
              Log Out
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default Profile;

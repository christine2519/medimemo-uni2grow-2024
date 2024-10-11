import { useState } from "react";
import "./Profile.css";
import img1 from "../../assets/images/profile/save (1).png";
import img2 from "../../assets/images/profile/universal_currency.png";
import img3 from "../../assets/images/profile/3d_avatar_12.svg";
import img4 from "../../assets/images/profile/allergies.png";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import img5 from "../../assets/images/profile/call.png";
import img6 from "../../assets/images/profile/mail.png";
import img7 from "../../assets/images/profile/home.png";
import CancelIcon from "@mui/icons-material/Cancel";
import LogoutIcon from "@mui/icons-material/Logout";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import { Typography, TextField, InputAdornment, Button } from "@mui/material";
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
    setOpenLogoutDialog(true);
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

  const handleClearField = (field: string) => {
    const resetFunctions: { [key: string]: () => void } = {
      Medical_ID: () => setEditID(""),
      State: () => setEditState(""),
      PhoneNumber: () => setEditContact(""),
      Email: () => setEditEmail(""),
      Adresse: () => setEditAdresse(""),
    };

    // Appelle la fonction de réinitialisation correspondante si elle existe
    if (resetFunctions[field]) {
      resetFunctions[field]();
    }
  };

  const handleLogoutConfirm = () => {
    navigate("/login");
  };

  const handlePrev = () => {
    navigate(-1);
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
              <div className="profile">
                <img src={img3} width="120px" height="120px" alt="photo" />
              </div>
              <div className="camera">
                <PhotoCameraIcon
                  sx={{
                    color: "white",
                    bottom: "1px",
                    backgroundColor: "red",
                    borderRadius: "50%",
                    position: "absolute",
                    left: "90px",
                  }}
                />
              </div>
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
                    label="Medical_ID"
                    variant="outlined"
                    color="error"
                    value={editID}
                    sx={{
                      flex: 1,
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <img src={img5} alt="call" />
                        </InputAdornment>
                      ),

                      endAdornment: isEditing && (
                        <InputAdornment position="end">
                          {editID && (
                            <div
                              className="image"
                              onClick={() => handleClearField("Medical_ID")}
                            >
                              <CancelIcon
                                sx={{
                                  color: "red",
                                }}
                              />
                            </div>
                          )}
                        </InputAdornment>
                      ),
                    }}
                    onChange={(e) => setEditID(e.target.value)}
                  />

                  <TextField
                    disabled={!isEditing}
                    fullWidth
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
                          {editState && (
                            <div
                              className="image"
                              onClick={() => handleClearField("State")}
                            >
                              <CancelIcon
                                sx={{
                                  color: "red",
                                }}
                              />
                            </div>
                          )}
                        </InputAdornment>
                      ),
                    }}
                    onChange={(e) => setEditState(e.target.value)}
                  />

                  <TextField
                    disabled={!isEditing}
                    fullWidth
                    label="PhoneNumber"
                    variant="outlined"
                    color="error"
                    value={editContact}
                    sx={{
                      flex: 1,
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <img src={img5} alt="call" />
                        </InputAdornment>
                      ),

                      endAdornment: isEditing && (
                        <InputAdornment position="end">
                          {editContact && (
                            <div
                              className="image"
                              onClick={() => handleClearField("PhoneNumber")}
                            >
                              <CancelIcon
                                sx={{
                                  color: "red",
                                }}
                              />
                            </div>
                          )}
                        </InputAdornment>
                      ),
                    }}
                    onChange={(e) => setEditContact(e.target.value)}
                  />

                  <TextField
                    disabled={!isEditing}
                    fullWidth
                    label="Email"
                    variant="outlined"
                    color="error"
                    value={editEmail}
                    sx={{ flex: 1 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <img src={img6} alt="allergie" />
                        </InputAdornment>
                      ),

                      endAdornment: isEditing && (
                        <InputAdornment position="end">
                          {editEmail && (
                            <div
                              className="image"
                              onClick={() => handleClearField("Email")}
                            >
                              <CancelIcon
                                sx={{
                                  color: "red",
                                }}
                              />
                            </div>
                          )}
                        </InputAdornment>
                      ),
                    }}
                    onChange={(e) => setEditEmail(e.target.value)}
                  />

                  <TextField
                    disabled={!isEditing}
                    fullWidth
                    label="Adresse"
                    variant="outlined"
                    color="error"
                    value={editAdresse}
                    sx={{ flex: 1 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <img src={img7} alt="allergie" />
                        </InputAdornment>
                      ),

                      endAdornment: isEditing && (
                        <InputAdornment position="end">
                          {editAdresse && (
                            <div
                              className="image"
                              onClick={() => handleClearField("Adresse")}
                            >
                              <CancelIcon
                                sx={{
                                  color: "red",
                                }}
                              />
                            </div>
                          )}
                        </InputAdornment>
                      ),
                    }}
                    onChange={(e) => setEditAdresse(e.target.value)}
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
          <DialogTitle
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
              borderRadius: "20px",
            }}
          >
            <ReportGmailerrorredIcon />
            <h3>Log-out Confirmation</h3>
          </DialogTitle>
          <DialogContent>
            <DialogContentText
            //   sx={{
            //     display: "flex",
            //     alignItems: "center",
            //     flexDirection: "column",
            //     justifyContent: "center",
            //     fontWeight: "bold",
            //   }}
            >
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
              Back
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

import React, { useEffect, useState } from "react";
import img1 from "../../assets/images/medications/profile.png";
import img4 from "../../assets/images/medications/pill.png";
import "./Medications.css";
import {
  Typography,
  ListItemAvatar,
  ListItemButton,
  Avatar,
  ListItemText,
  Checkbox,
} from "@mui/material";
import { CircleOutlined, CheckCircle } from "@mui/icons-material";

interface Dose {
  id: number;
  therapyName: string;
  time: string;
  date: string;
  taken: boolean;
  therapy: number;
  prescriptionTime: number;
}

function Medication() {
  const [medications, setMedications] = useState<Dose[]>([]);
  const [checked, setChecked] = useState<number[]>([]); // Utiliser un tableau d'IDs
  const [message, setMessage] = useState<string | null>(null);

  {
    /* la couleur du message change en fonction du contenu du message d'erreur */
  }
  {
    message && (
      <Typography
        color={message.includes("Successfully") ? "success.main" : "error"}
      >
        {message}
      </Typography>
    );
  }

  const handleToggle = async (medication: Dose) => {
    try {
      const dose: Dose = { ...medication };
      dose.taken = !dose.taken;

      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dose),
      };

      const response = await fetch(
        "http://localhost:3000/doses/" + dose.id,
        requestOptions
      );

      if (response.status === 404) {
        setMessage("Medication not found in the database.");
        return;
      }
      setMessage("");

      if (!response.ok) {
        throw new Error("Failed to update medication");
      } else {
        const result = await response.json();
        setMessage(`Successfully updated: ${result.therapyName}`);
        medication.taken = !medication.taken;
        const currentIndex = checked.findIndex((id) => id === medication.id);
        const newChecked = [...checked];
        if (currentIndex === -1) {
          newChecked.push(medication.id);
        } else {
          newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
      }
    } catch (error) {
      console.error(error);
      setMessage("An error occurred while updating the medication.");
    }
  };

  const getMedication = async (): Promise<void> => {
    try {
      const result = await fetch("http://localhost:3000/doses");
      if (!result.ok) {
        throw new Error("Erreur lors de la récupération des médications");
      }
      const datas: Dose[] = await result.json();
      setMedications(datas);
    } catch (error) {
      console.error("Erreur dans getMedication :", error);
      setMessage("Failed to fetch medications.");
    }
  };

  useEffect(() => {
    getMedication();
  }, []);

  const dates = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const formattedDate = dates.toLocaleDateString("en-US", options);

  return (
    <div className="background">
      <div className="head">
        <div className="profile">
          <img src={img1} alt="profile" />
        </div>
        <Typography>Hi, Francesca</Typography>
        <Typography>Your Medicine Reminders for Today!</Typography>
      </div>
      <div className="body">
        <Typography>{formattedDate}</Typography>
        {message && <Typography color="error">{message}</Typography>}
        <div className="element">
          {medications.length === 0 ? (
            <Typography>No medications available.</Typography>
          ) : (
            medications.map((item) => (
              <div className="element1" key={item.id}>
                <ListItemButton
                  sx={{
                    backgroundColor: !item.taken
                      ? "rgba(77, 216, 167, 0.1)"
                      : "transparent",
                  }}
                  onClick={() => handleToggle(item)}
                  dense
                >
                  <ListItemAvatar>
                    <Avatar alt="pill" src={img4} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography
                        component="span"
                        variant="body2"
                        sx={{ color: "text.primary", display: "inline", pb: 0 }}
                      >
                        {item.therapyName} {item.time}
                      </Typography>
                    }
                    secondary={
                      <Typography
                        component="span"
                        variant="body2"
                        sx={{ color: "text.primary", display: "inline" }}
                      >
                        CONJUNCTIVITIS
                      </Typography>
                    }
                  />
                  <Checkbox
                    icon={<CircleOutlined />}
                    checkedIcon={<CheckCircle />}
                    checked={checked.includes(item.id)}
                  />
                </ListItemButton>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Medication;

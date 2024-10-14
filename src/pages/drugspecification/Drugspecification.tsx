import { useState } from "react";
import "./Drugspecification.css";
import { Box, BoxClassKey, Typography } from "@mui/material";
import img2 from "../../assets/images/drug specification/file_save.png";
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemButton,
  List,
  Collapse,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Header from "../../components/header/Header";
import { useNavigate } from "react-router-dom";

interface Drug {
  dosage: string;
  methodOfAdministraion: string;
  contraindications: string;
  warning: string;
  sideEffects: string;
  interactions: string;
  storage: string;
}

const data: Drug = {
  dosage: "30 mg/tablet, 1 tablet daily",
  methodOfAdministraion: `- For ophtalmic use only
   - Shake the bottle well defore use
   - Tilt head back, pull down the lowed eyelid, and apply drops
   - Avoid touching the dropper tip to any surface, including the eye`,
  contraindications: "none",
  warning: "none",
  sideEffects: "none",
  interactions: "none",
  storage: "room temperature",
};

function DrugSpecification() {
  const navigate = useNavigate();

  const handlePrev = () => {
    navigate(-1);
  };

  const [open, setOpen] = useState<{ [key: string]: boolean }>({});

  const handleClick = (key: string) => {
    setOpen((prevState) => ({
      ...prevState,
      [key]: !open[key],
    }));
  };

  return (
    <div className="drug_container">
      <Header
        title="DROP sept"
        showBackButton={true}
        onBackButtonClick={handlePrev}
      />

      <div className="backgroung_drugs">
        <div className="specification_body">
          <div className="specification_head">
            <div className="file">
              <ListItem>
                <ListItemAvatar>
                  <img alt="file" src={img2} />
                </ListItemAvatar>
                <ListItemText
                  primary={<Typography>Information Leaflet</Typography>}
                />
              </ListItem>
            </div>
            <div className="text">
              <ListItemText
                primary=""
                secondary="Ophthalmic solution with anti-inflammatory activity suitable for cases for eyes burning  and conjunctivitis"
              />
            </div>
          </div>
          <div className="elements">
            <div className="element1">
              <List
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"
              >
                {Object.entries(data).map(([key, value]) => {
                  return (
                    <div className="elt">
                      <ListItemButton onClick={() => handleClick(key)}>
                        <ListItemText
                          disableTypography
                          primary={key}
                          sx={{ fontFamily: "sans-serif" }}
                        />
                        {open[key] ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                      <Collapse
                        in={open[key]}
                        key={key}
                        timeout="auto"
                        unmountOnExit
                        sx={{ p: "15px" }}
                      >
                        <div>{value}</div>
                      </Collapse>
                    </div>
                  );
                })}
              </List>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DrugSpecification;

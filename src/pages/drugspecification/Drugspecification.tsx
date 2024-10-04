import React, { useState } from "react";
import "./Drugspecification.css";
import { Typography } from "@mui/material";
import img1 from "../../assets/images/drug specification/arrow_left_alt.png";
import img2 from "../../assets/images/drug specification/file_save.png";
//import img2 from "../../assets/images/drug specification/Frame 2608538.png";
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemButton,
  List,
  ListItemIcon,
  Collapse,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ImageIcon from "@mui/icons-material/Image";
import StarBorder from "@mui/icons-material/StarBorder";

function DrugSpecification() {
  const [open, setOpen] = useState(false);

  const data1: any = {
    id: 1,
    name: "Dosage",
    description: "",
  };

  const data2: any = {
    id: 2,
    name: "Method of Administration",
    description: "",
  };

  const data3: any = {
    id: 3,
    name: "Contraindications",
    description: "",
  };

  const data4: any = {
    id: 4,
    name: "Warnings",
    description: "",
  };

  const data5: any = {
    id: 5,
    name: "Side Effects",
    description: "",
  };

  const data6: any = {
    id: 6,
    name: "Interactions",
    description: "",
  };

  const data7: any = {
    id: 7,
    name: "Storage",
    description: "",
  };

  const tab: any[] = [data1, data2, data3, data4, data5, data6, data7];

  const tabOpen: boolean[] = [];
  tab.forEach((element) => {
    tabOpen.push(false);
  });

  const getbool = (items: any): boolean => {
    const index: number = tab.findIndex(items);
    return tabOpen[tab[index]];
  };

  const handleClick = (items: any) => {
    const index: number = tab.findIndex(items);
    tabOpen[index] = !tabOpen[index];
  };

  return (
    <>
      <div className="backgroung">
        <div className="entete">
          <div className="fleche">
            <img src={img1} alt="fleche" />
          </div>
          <div className="titre">
            <Typography> DROP sept </Typography>
          </div>
        </div>

        <div className="body">
          <div className="head">
            <div className="file">
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt="file" src={img2} />
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
                {/* affichage des elements  */}
                {tab.map((items) => {
                  return (
                    <div>
                      <ListItemButton
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                        onClick={handleClick}
                      >
                        <Typography>{items.name}</Typography>
                        {open ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                      <Collapse
                        key={items}
                        // in={open}
                        timeout="auto"
                        unmountOnExit
                      >
                        <List component="div" disablePadding>
                          <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText primary="" />
                          </ListItemButton>
                        </List>
                      </Collapse>
                    </div>
                  );
                })}
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DrugSpecification;

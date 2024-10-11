import { useState } from "react";
import "./Drugspecification.css";
import { Typography } from "@mui/material";
import img2 from "../../assets/images/drug specification/file_save.png";
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemButton,
  List,
  Collapse,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Header from "../../components/header/Header";
import { ClassNames } from "@emotion/react";

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

  const handleClick = (items: any) => {
    setOpen;
  };

  return (
    <div className="drug_container">
      <Header title="DROP sept" showBackButton={true} />

      <div className="backgroung_drugs">
        <div className="specification_body"></div>
      </div>
    </div>
  );
}

export default DrugSpecification;

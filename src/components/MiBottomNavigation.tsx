import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Favorite, Home, Person } from "@mui/icons-material";
import { useState } from "react";
import { Navigate } from "react-router-dom";
// import MiCard from "./MiCard";
const MiBottomNavigation = () => {
  const [value, setValue] = useState("home");

  const handleChange = (event, newValue:string) => {
    setValue(newValue);
  };
  const movetoPage = (val:string) => {
switch (val) {
    case "home":
         <Navigate to="/home" replace/>
        break;

    default:
        break;
}
  };
  return (
    <BottomNavigation
      sx={{ position: "absolute", bottom: 0, width: "100%", color: "red" }}
      value={value}
      onChange={handleChange}
      showLabels
    >
      <BottomNavigationAction
        value="home"
        label="Home"
        icon={<Home />}
        onClick={() => movetoPage("home")}
      />
      <BottomNavigationAction
        value="favourite"
        label="Favorite"
        icon={<Favorite />}
        onClick={() => movetoPage("favourite")}
      />
      <BottomNavigationAction
        value="person"
        label="Person"
        icon={<Person />}
        onClick={() => movetoPage("person")}
      />
    </BottomNavigation>
  );
};

export default MiBottomNavigation;

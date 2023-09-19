import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  ListItemButton,
  Avatar,
  Typography,
  Divider,
  Collapse,
} from "@mui/material";
import { Mail, Info, ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState } from "react";
const MiList = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <Typography variant="h5">List Component</Typography>
      <Box sx={{ width: "400px", bgcolor: "#e9e89f" }} my={3}>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Info />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="List Item 3" />
          </ListItem>
          <Divider/>
          <ListItem disablePadding>
            <ListItemButton onClick={handleClick}>
              <ListItemAvatar>
                <Avatar>
                  <Mail />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="List Item 1" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          <Collapse in={open} unmountOnExit>
            <List sx={{ pl: 4 }}>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar src="https://randomuser.me/api/portraits/men/1.jpg" />
                </ListItemAvatar>
                <ListItemText primary="List Item 2" />
              </ListItemButton>
              <ListItem>
                <ListItemAvatar>
                  <Avatar src="https://randomuser.me/api/portraits/men/2.jpg" />
                </ListItemAvatar>
                <ListItemText primary="List Item 2" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Box>
      <Box sx={{ width: "400px", bgcolor: "#e0efef" }} my={3}>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar src="https://randomuser.me/api/portraits/men/1.jpg" />
            </ListItemAvatar>
            <ListItemText primary="List Item 2" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar src="https://randomuser.me/api/portraits/men/2.jpg" />
            </ListItemAvatar>
            <ListItemText primary="List Item 2" />
          </ListItem>
        </List>
      </Box>
      <Box sx={{ width: "400px", bgcolor: "#e0efef" }}>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar src="https://randomuser.me/api/portraits/men/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="List Item 2"
              secondary="Hu I am a MERN Stack Developer"
            />
          </ListItem>
          <Divider variant="inset" />
          <ListItem>
            <ListItemAvatar>
              <Avatar src="https://randomuser.me/api/portraits/men/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="List Item 2"
              secondary="Hu I am a MERN Stack Developer"
            />
          </ListItem>
        </List>
      </Box>
    </>
  );
};

export default MiList;

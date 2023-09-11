import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import { CatchingPokemon } from "@mui/icons-material";
import React, { useState } from "react";
const MiNavbar = () => {
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);
  const open = Boolean(anchor);
  const handleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchor(event.currentTarget);
  };
  const handleClose = () => {
    setAnchor(null);
  };
  return (
    <>
      <Typography>Navbar Component</Typography>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit">
            <CatchingPokemon />
          </IconButton>
          <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
            Pokemon App
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Service</Button>
            <Button
              color="inherit"
              id="resources-button"
              onClick={handleMenu}
              aria-controls={open ? "resources-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              Resources
            </Button>
            <Button color="inherit">About</Button>
          </Stack>
          <Menu
            id="resources-menu"
            anchorEl={anchor}
            open={open}
            MenuListProps={{
              "aria-labelledby": "resources-button",
            }}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical:"top",
              horizontal:"left"
            }}
          >
            <MenuItem>Blog</MenuItem>
            <MenuItem>Podcast</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default MiNavbar;

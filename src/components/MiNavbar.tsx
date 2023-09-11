import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from "@mui/material";
import { CatchingPokemon } from "@mui/icons-material";
const MiNavbar = () => {
  return (
    <>
      <Typography>Navbar Component</Typography>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit">
            <CatchingPokemon />
          </IconButton>
          <Typography variant="h6" component="h1" sx={{flexGrow:1}}>Pokemon App</Typography>
          <Stack direction="row" spacing={2}>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Service</Button>
            <Button color="inherit">Contact</Button>
            <Button color="inherit">About</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default MiNavbar;

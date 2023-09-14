import { Box, Drawer, Typography , IconButton} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { useState } from "react";

const MiDrawer = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  return (
    <>
    <IconButton color="primary" onClick={()=> setIsDrawerOpen(true)}>
        <Menu/>
    </IconButton>
    <Drawer anchor="left" open={isDrawerOpen} onClose={()=>setIsDrawerOpen(false)}>
      <Box width="250px" textAlign="center" p={2} role="presentation">
        <Typography variant="h6">Side Panel</Typography>
      </Box>
    </Drawer>
    </>
  );
};

export default MiDrawer;

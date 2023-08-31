import { Box } from "@mui/material";
const MiBox = () => {
  return (
    <Box>
      <Box
        component="section"
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          width: "200px",
          height: "200px",
          padding: "16px",
          transition: "all 1s",
          "&:hover": {
            backgroundColor: "primary.light",
            color: "green",
          },
        }}
      >
        MiBox
      </Box>
      <Box display="flex" width="200px" height="200px" bgcolor="success.main" p={2}>
        Hey I am Box
      </Box>
    </Box>
  );
};

export default MiBox;

import { Box, Stack, Divider, Grid, Paper } from "@mui/material";
const MiBox = () => {
  return (
    <Paper sx={{padding:"10px"}} elevation={4}>
      <Stack
        sx={{ border: "1px solid red" }}
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
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
        <Box
          display="flex"
          width="200px"
          height="200px"
          bgcolor="success.main"
          p={2}
        >
          Hey I am Box
        </Box>
      </Stack>
      <Grid container my={4} spacing={2}>
        <Grid item xs>
          <Box bgcolor="primary.light" p={2}>Item 1</Box>
        </Grid>
        <Grid item xs>
          <Box bgcolor="primary.light" p={2}>Item 1</Box>
        </Grid>
        <Grid item xs>
          <Box bgcolor="primary.light" p={2}>Item 1</Box>
        </Grid>
        <Grid item xs>
          <Box bgcolor="primary.light" p={2}>Item 1</Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MiBox;

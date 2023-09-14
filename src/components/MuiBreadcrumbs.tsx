import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import { NavigateNext } from "@mui/icons-material";
const MuiBreadcrumbs = () => {
  return (
    <Box m={2}>
      <Breadcrumbs separator={<NavigateNext  fontSize="small"/>}
      maxItems={3}
      itemsAfterCollapse={1}
      >
        <Link href="home" underline="hover">
          <Typography>Home</Typography>
        </Link>
        <Link href="about" underline="hover">
          <Typography>about</Typography>
        </Link>
        <Link href="contact" underline="hover">
          <Typography>contact</Typography>
        </Link>
        <Link href="contact" underline="hover">
          <Typography>contact</Typography>
        </Link>
        <Link href="contact" underline="hover">
          <Typography>contact</Typography>
        </Link>
          <Typography>Active</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default MuiBreadcrumbs;

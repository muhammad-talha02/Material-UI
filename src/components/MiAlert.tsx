import { Stack, Alert, AlertTitle, Button } from "@mui/material";
import { Check } from "@mui/icons-material";
const MiAlert = () => {
  return (
    <Stack spacing={2}>
      <h1>Alert component</h1>
      <Alert severity="error">This a Error Message</Alert>
      <Alert severity="info">This a info Message</Alert>
      <Alert severity="warning">This a warning Message</Alert>
      <Alert severity="success">This a success Message</Alert>
      <Alert variant="outlined" severity="error">
        This a Error Message
      </Alert>
      <Alert variant="outlined" severity="info">
        This a info Message
      </Alert>
      <Alert variant="outlined" severity="warning">
        This a warning Message
      </Alert>
      <Alert variant="outlined" severity="success">
        This a success Message
      </Alert>
      <Alert
        variant="filled"
        severity="error"
        onClose={() => alert("closing...")}
      >
        <AlertTitle>Error</AlertTitle>
        This a Error Message
      </Alert>
      <Alert
        variant="filled"
        severity="info"
        action={<Button color="inherit">UNDO</Button>}
      >
        <AlertTitle>Info</AlertTitle>
        This a info Message
      </Alert>
      <Alert variant="filled" severity="warning">
        <AlertTitle>Warning</AlertTitle>
        This a warning Message
      </Alert>
      <Alert
        variant="filled"
        severity="success"
        icon={<Check fontSize="inherit" />}
      >
        <AlertTitle>Success</AlertTitle>
        This a success Message
      </Alert>
    </Stack>
  );
};

export default MiAlert;

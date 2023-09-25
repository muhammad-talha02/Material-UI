import { Snackbar, Button, Alert, AlertProps } from "@mui/material";
import React, { useState, forwardRef } from "react";

const SnackBarAlert = forwardRef<HTMLDivElement, AlertProps>(
  function SnackBarAlert(props, ref) {
    return <Alert elevation={6} ref={ref} {...props} />;
  }
);
const SnackbarCom = () => {
  const [show, setShow] = useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setShow(false);
  };
  return (
    <>
      <Button variant="outlined" onClick={() => setShow(true)}>
        Submit
      </Button>
      {/* <Snackbar
        open={show}
        message="Form Submitted Successfuly!"
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      /> */}
      <Snackbar open={show} autoHideDuration={3000} onClose={handleClose}>
        <SnackBarAlert onClose={handleClose} severity="success">
          Form SUbmitted Successfully
        </SnackBarAlert>
      </Snackbar>
    </>
  );
};

export default SnackbarCom;

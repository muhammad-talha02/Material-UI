import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { useState } from "react";

const MiDialog = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={()=>setOpen(true)}>Open Dialog</Button>
      <Dialog
        open={open}
        aria-labelledby="dialog-title"
        aria-aria-describedby="dialog-description"
        onClick={()=>setOpen(false)}
      >
        <DialogTitle id="dialog-title">Verify Property</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            Are you sure want to submit?
          </DialogContentText>
          <DialogActions>
            <Button variant="contained" color="primary">Yes</Button>
            <Button variant="outlined" autoFocus color="error" onClick={()=>setOpen(false)}>No</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MiDialog;

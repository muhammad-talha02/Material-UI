import { Stack, TextField, InputAdornment } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from "react";

const MiTextField = () => {
    const [viewPassword, setViewPassword] = useState<boolean>(false);

    const handleVisibility = ()=>{
setViewPassword(!viewPassword)
    }
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <TextField label="name" variant="outlined" />
        <TextField label="name" variant="filled" />
        <TextField label="name" variant="standard" />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="Small Secondary"
          size="small"
          color="secondary"
          variant="outlined"
        />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="Required Input"
          size="small"
          required
          color="secondary"
        />
        <TextField
          label="Password"
          color="info"
          type="password"
          required
          disabled
          helperText="Dont share ith anyone"
        />
        <TextField
          label="Read only Password"
          color="info"
          type="password"
          required
          InputProps={{readOnly:true}}
          helperText="Dont share ith anyone"
        />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="Amount"
          color="secondary"
          InputProps={{startAdornment:<InputAdornment position="start">$</InputAdornment>}}
        />
        <TextField
          label="Weight"
          color="secondary"
          error={true}
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>
          }}
        />
        <TextField
          label="password"
          color="secondary"
         type={viewPassword ? "text": "password"}
         InputProps={{
            endAdornment: <InputAdornment position="end" onClick={handleVisibility} sx={{cursor:"pointer"}}>{
                viewPassword ? <VisibilityOffIcon/> : <VisibilityIcon/>
            }</InputAdornment>
         }}
        />
      </Stack>
    </Stack>
  );
};

export default MiTextField;

import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";
const MiSelect = () => {
  const [country, setCountry] = useState<String[]>([])

  console.log({ country });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setCountry(typeof value ==="string" ? value.split(",") : value);
  };
  return (
    <Box width="300px">
      <TextField
        label="select country"
        select
        value={country}
        onChange={handleChange}
        fullWidth
        SelectProps={{
            multiple:true
        }}
        color="secondary"
      >
        <MenuItem value="PK">Pakistan</MenuItem>
        <MenuItem value="USA">America</MenuItem>
        <MenuItem value="AUS">Australia</MenuItem>
      </TextField>
    </Box>
  );
};

export default MiSelect;

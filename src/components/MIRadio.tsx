import {
  Box,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  FormHelperText
} from "@mui/material";
import { useState } from "react";

const MIRadio = () => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <Box>
      <FormControl error>
        <FormLabel id="job-experince">Years of Experience</FormLabel>
        <RadioGroup
            name="job-experience"
          aria-labelledby="job-experince"
          value={value}
          id="job-experince"
          onChange={handleChange}
          row
        >
          <FormControlLabel control={<Radio color="error"/>} label="0-2" value="0-2" />
          <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
          <FormControlLabel control={<Radio />} label="6-10" value="6-10" />
        </RadioGroup>
        <FormHelperText>Invalid Selection</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default MIRadio;

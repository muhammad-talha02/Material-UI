import { Stack, Autocomplete, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
const MiAutocomplete = () => {
  type Skill = {
    id: number;
    label: string;
  };
  const skills = ["html, css", "js", "React", "TS"];

  const skillOptions = skills.map((skill, index) => ({
    id: index + 1,
    label: skill,
  }));
  const [value, setValue] = useState<string | null>(null);
  const [skill, setSkill] = useState<Skill | null>(null);
  console.log({skill});
  const handleChange = (_event: any, newValue: string | null) => {
    setValue(newValue);
  };
  return (
    <Stack spacing={2} width="300px">
      <Typography variant="h4" color="secondary">
        Autocomplete Components
      </Typography>
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="SKills" />}
        value={value}
        onChange={handleChange}
        freeSolo
      />
      <Autocomplete
        options={skillOptions}
        renderInput={(params) => <TextField {...params} label="SKills" />}
        value={skill}
        onChange={(_event: any, newValue: Skill | null) => setSkill(newValue)}
      />
    </Stack>
  );
};

export default MiAutocomplete;

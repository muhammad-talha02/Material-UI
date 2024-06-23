import { Typography, Chip, Stack , Avatar} from "@mui/material";
import { Face } from "@mui/icons-material";
import { useState } from "react";
const MiChip = () => {
    const [chips, setChips] = useState(['Chip 1','Chip 2', 'Chip 3']);
    const handleDelete = (value: string) =>{
        setChips(chips.filter(chip => chip !== value))
    }
  return (
    <>
      <Typography variant="h4" textAlign="center">
        Chip Component
      </Typography>
      <Stack direction="row" spacing={2}>
        <Chip label="Filled One" color="secondary" size="small" icon={<Face/>}/>
        <Chip
          label="Outlined One"
          color="secondary"
          size="medium"
          variant="outlined"
          avatar={<Avatar>MT</Avatar>}
        />
        <Chip
          label="Click One"
          onClick={()=>alert("Hey  I Click")}
          onDelete={()=>alert("Hey  I Delete")}
          color="secondary"
          size="medium"
          avatar={<Avatar>MT</Avatar>}
        />
        {
            chips.map((chip)=>(
                <Chip label={chip} key={chip} onDelete={()=>handleDelete(chip)}/>
            ))
        }
      </Stack>
    </>
  );
};

export default MiChip;

import {Box, FormControlLabel, Checkbox} from "@mui/material"
const MiCheckbox = () => {
  return (
    <Box>
      <Box>
        <FormControlLabel label="I Accept" control={<Checkbox/>}/>
      </Box>
    </Box>
  )
}

export default MiCheckbox

import { Box, FormControlLabel, Switch } from "@mui/material"
import { useState } from "react"
const MiSwitch = () => {
    const [mode, setMode] = useState(false)
console.log(mode)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
setMode(event.target.checked)
    }
    return (
        <Box>
            <FormControlLabel label="Dark Mode" control={<Switch checked={mode} onChange={handleChange}/>}/>
        </Box>
    )
}

export default MiSwitch
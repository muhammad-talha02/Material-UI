import { Delete } from "@mui/icons-material"
import { Tooltip , IconButton , Typography } from "@mui/material"
const MiTooltip = () => {
  return (
    <>
    <Typography variant="h5">Tooltip Component</Typography>
    <Tooltip title="Delete" placement="right-start" enterDelay={200} leaveDelay={300} arrow>
        <IconButton>
            <Delete/>
        </IconButton>
    </Tooltip>
    </>
  )
}

export default MiTooltip
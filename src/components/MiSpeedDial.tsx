import { SpeedDial, SpeedDialAction , Box } from "@mui/material"
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import  Editicon  from "@mui/icons-material/Edit";
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
const MiSpeedDial = () => {
    const actions = [
        { icon: <FileCopyIcon />, name: 'Copy' },
        { icon: <SaveIcon />, name: 'Save' },
        { icon: <PrintIcon />, name: 'Print' },
        { icon: <ShareIcon />, name: 'Share' },
      ];
  return (
    // <Box sx={{ flexGrow: 1 }}>
        <SpeedDial icon={<SpeedDialIcon  openIcon={<Editicon/>}/>} sx={{position:"absolute", bottom:50, right:50}}
        ariaLabel="SpeedDial">
            {
                actions.map((action)=>(
                    <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    tooltipOpen
                    color="error"
                    />
                ))
            }
        </SpeedDial>
    // </Box>
  )
}

export default MiSpeedDial
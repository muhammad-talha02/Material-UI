import { Box, FormControlLabel, Checkbox, FormLabel, FormControl, FormGroup } from "@mui/material"
import React, { useState } from "react"
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const MiCheckbox = () => {
  const [accept, setAccept] = useState(true)
  const [skills, setSkills] = useState<String[]>([])

  console.log(skills)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log({ accept })
    setAccept(event.target.checked)
  }
  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(event.target.value);
    if (index === -1) {
      setSkills([...skills, event.target.value])
    }
    else {
      setSkills(skills.filter(skill => skill !== event.target.value))
    }
  }

  return (
    <Box>
      <Box>
        <FormControlLabel label="I Accept" control={<Checkbox checked={accept} onChange={handleChange} />} />
      </Box>
      <Box>
        <Checkbox icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />} checked={accept} onChange={handleChange} />
      </Box>
      <Box>
        <FormControl>
          <FormLabel>CHoose your skills</FormLabel>
          <FormGroup row>
            <FormControlLabel label="HTML" value="html" checked={skills.includes("html")} control={<Checkbox onChange={handleSkillChange} />} />
            <FormControlLabel label="CSS" value="css" checked={skills.includes("css")} control={<Checkbox onChange={handleSkillChange} />} />
            <FormControlLabel label="JavaScript" value='JS' checked={skills.includes("js")} control={<Checkbox onChange={handleSkillChange} />} />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  )
}

export default MiCheckbox

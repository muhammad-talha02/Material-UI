import {
  Stack,
  Button,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import FormarBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import { useState } from "react";
const MiButtons = () => {
  const [formats, setFormats] = useState<String | null>(null);
  console.log({
      formats
  })

  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string | null
  ) => {
    setFormats(updatedFormats);
  };
  return (
    <>
      <Stack direction="row">
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          size="medium"
          color="secondary"
          aria-label="alignment button group"
        >
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>RIght</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row" spacing={4}>
        <ToggleButtonGroup
          aria-label="text formatting"
          value={formats}
          onChange={handleFormatChange}
          size="medium"
          color="secondary"
          orientation="vertical"
          exclusive
        >
          <ToggleButton value="Bold" aria-label="bold">
            <FormarBoldIcon />
          </ToggleButton>
          <ToggleButton value="Italic" aria-label="Italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="Underline" aria-label="Underline">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </>
  );
};

export default MiButtons;

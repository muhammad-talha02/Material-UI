import { Stack, Badge, IconButton } from "@mui/material";
import { Mail } from "@mui/icons-material";
const Mibadge = () => {
  return (
    <Stack spacing={3} direction="row">
      <IconButton>
        <Badge
          badgeContent={5}
          color="secondary"
          anchorOrigin={{
            horizontal: "right",
            vertical: "top",
          }}
        >
          <Mail />
        </Badge>
      </IconButton>
      <IconButton>
        <Badge
          badgeContent={0}
          showZero
          color="success"
          anchorOrigin={{
            horizontal: "right",
            vertical: "top",
          }}
        >
          <Mail />
        </Badge>
      </IconButton>
      <IconButton>
        <Badge
          badgeContent={1000}
          max={800}
          showZero
          color="success"
          anchorOrigin={{
            horizontal: "right",
            vertical: "top",
          }}
        >
          <Mail />
        </Badge>
      </IconButton>
      <IconButton>
        <Badge
          variant="dot"
          color="success"
          anchorOrigin={{
            horizontal: "right",
            vertical: "top",
          }}
        >
          <Mail />
        </Badge>
      </IconButton>
    </Stack>
  );
};

export default Mibadge;

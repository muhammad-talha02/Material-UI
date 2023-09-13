import { Stack, Link, Typography } from "@mui/material"

const MiLink = () => {
  return (
    <Stack direction="row" m={4}>
        <Typography variant="h6">
        </Typography>
        <Link href="#" color="secondary" underline="hover" variant="h2">GO to Home</Link>
    </Stack>
  )
}

export default MiLink
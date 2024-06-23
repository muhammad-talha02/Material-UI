import { Autocomplete, TextField } from '@mui/material'
import styles from "./autocomplete.module.scss"
type Props = {}

const MiAutocomplete = (props: Props) => {
  return (
    <Autocomplete
  disablePortal
  id="combo-box-demo"
  options={[]}
  classes={{
    root: styles.root,
    inputRoot: styles.inputRoot,
    input: styles.input,
    option: styles.option,
    popupIndicator: styles.popupIndicator,
  }}
  sx={{ width: 300 }}
  className={styles.customAutocomplete}
  renderInput={(params) => <TextField {...params} label="Movie" />}
/>
  )
}

export default MiAutocomplete
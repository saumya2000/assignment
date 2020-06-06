import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 120,
    // top: '132px',
    // left: '414px',
    width: "220px",
    height: "44px",
    opacity: 1,
    "& .MuiInputBase-input": {
      padding: "2px 0px 5.5px 10px ",
      fontSize: "14px",
      lineHeight: "19px",
      fontWeight: "500",
    },
    "& .MuiSelect-icon": {
      color: "#8782D9",
    },
  },
}));

export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel
          style={{ fontSize: "16px" }}
          shrink
          id="demo-simple-select-placeholder-label-label"
        >
          Select Categories
        </InputLabel>
        <Select
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          value={age}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
        >
          <MenuItem value="">Please Select</MenuItem>
          <MenuItem>Category 1</MenuItem>
          <MenuItem>Category 2</MenuItem>
          <MenuItem>Category 3</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

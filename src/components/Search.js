import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";

import InputAdornment from "@material-ui/core/InputAdornment";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      // margin: theme.spacing(1),
      // width: "95%",
      padding: "7px 4px 4px 10px",
    },
    "& .MuiInputBase-input": {
      color: "#000",
    },
    "& .MuiInput-underline:before": {
      borderBottom: "none",
    },
    "& .MuiInput-underline:after": {
      borderBottom: "none",
    },
    "& .MuiOutlinedInput-root:hover": {
      // "&:hover": {
      borderBottom: "none",
      // },
      "&:focus": {
        borderBottom: "none",
      },
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} autoComplete="off">
      <TextField
        style={{ backgroundColor: "white" ,width: "265px"}}
        placeholder="Search here.."
        InputProps={{
          startAdornment: (
            <InputAdornment>
              {/* <IconButton> */}
              <SearchSharpIcon style={{ fill: "#8782D9" }} />
              {/* </IconButton> */}
            </InputAdornment>
          ),
        }}
      />
      {/* <SearchSharpIcon/>
     <TextField style={{ backgroundColor: "white"}} variant="outlined" value="Search Here" /> */}
      {/* <TextField id="outlined-basic"  variant="outlined" value="Search Here" /> */}
    </form>
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import image from "../../images/Screenshot (76).png";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  root: {
    maxWidth: "280px",
    "& .MuiPaper-elevation1": {
      boxShadow: "none",
    },
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card style={{ height: "186px", padding: "14px 12px 16px 13px" }}>
        <CardActionArea>
          <CardMedia
            style={{ borderRadius: "4px", backgroundSize: "cover" }}
            component="img"
            height="128px"
            image={image}
          />
        </CardActionArea>
        <div
          style={{ fontSize: "14px", marginTop: "12px", marginBottom: "8px",opacity: 1,fontWeight: "500" }}
        >
          Template 001
        </div>
        <button
          // size="small"
          style={{
            backgroundColor: "#F1F1F1",
            padding: "2px 7px ",
            fontSize: "12px",
            lineHeight: "16px",
            border: "none",
            fontWeight: "500",
            color: "#404040",
            fontFamily: "'Roboto', sans-serif",
          }}
        >
          FOOD
        </button>
        <button
          // size="small"
          style={{
            backgroundColor: "#F1F1F1",
            padding: "2px 7px ",
            fontSize: "12px",
            lineHeight: "16px",
            border: "none",
            fontWeight: "500",
            marginLeft: "4.67px",
            color: "#404040",
            fontFamily: "'Roboto', sans-serif",
          }}
        >
          CHICKEN
        </button>
        <button
          // size="small"
          style={{
            backgroundColor: "#F1F1F1",
            padding: "2px 7px ",
            fontSize: "12px",
            lineHeight: "16px",
            border: "none",
            fontWeight: "500",
            color: "#404040",
            marginLeft: "4.67px",
            fontFamily: "'Roboto', sans-serif",
          }}
        >
          DRINK
        </button>
      </Card>
    </div>
  );
}

import React from "react";
import Card from "./components/Cards/Card";
import SelectMenu from "./components/SelectMenu";
import Search from "./components/Search";
import Grid from "@material-ui/core/Grid";
import Sidebar from "./components/SideBar/SideBar";
import { Button, Container } from "@material-ui/core";
import Color from "./images/color.png";
import { withStyles } from "@material-ui/core/styles";
import Slider from "react-slick";
var settings = {
  dots: false,
  speed: 500,

  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1350,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1186,
      settings: {
        slidesToShow: 3.5,
      },
    },
    {
      breakpoint: 860,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2.5,
      },
    },

    {
      breakpoint: 599,
      settings: {
        slidesToShow: 6,
      },
    },
    {
      breakpoint: 495,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 380,
      settings: {
        slidesToShow: 2.5,
      },
    },
  ],
};
const styles = () => ({
  appBar: {
    width: `calc(100% - 66px)`,
    paddingLeft: "66px",
    paddingRight: "0px",
    paddingTop: "85px",
  },
  slider: {
    "& .slick-prev": {
      left: "8.33px",
    },
    "& .slick-next": {
      right: "8.33px",
    },
    "& .slick-next:before": {
      border: "solid #8782D9",
      borderWidth: "0 2px 2px 0",
      display: "inline-block",
      padding: "3px",
      content: "",
      fontSize: "0px",
      transform: "rotate(-45deg)",
      webkitTransform: "rotate(-45deg)",
      opacity: 1,
    },
    "& .slick-prev:before": {
      border: "1px solid #DADADA",
      borderWidth: "0 2px 2px 0",
      display: "inline-block",
      padding: "3px",
      content: "",
      fontSize: "0px",
      transform: "rotate(135deg)",
      webkitTransform: "rotate(135deg)",
      opacity: 1,
    },
  },
});
class App extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Sidebar />
        <Container className={classes.appBar}>
          <Grid alignItems="center" style={{ fontFamily: "Roboto" }}>
            <div
              style={{
                paddingBottom: "15.5px",
                borderBottom: "1px solid #D5D5D5",
                marginBottom: "14.5px",
                color: "#404040",
                fontSize: "16px",
                lineHeight: "21px",
                fontWeight: "500",
              }}
            >
              All Templates
            </div>
          </Grid>

          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <div className={classes.search}>
                <Search />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <SelectMenu />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div
                style={{
                  backgroundColor: "#F7F7F7",
                  width: "24px",
                  padding: "10px 12px 7px 8px",
                  float: "left",
                }}
              >
                <img
                  style={{
                    width: "28px",
                    height: "25px",
                    // marginLeft: "4px",
                  }}
                  src={Color}
                ></img>
              </div>
              <Slider
                className={classes.slider}
                style={{
                  // width: "339px",
                  marginLeft: "55px",
                  border: "1px solid #D5D5D5C4",
                  padding: "10px 20px 7px 26px",
                }}
                {...settings}
              >
                <div>
                  <div
                    style={{
                      width: "40px",
                      height: "22px",
                      borderRadius: "2px",
                      // marginLeft: "16px",
                      backgroundColor: "#516FFB",
                      // marginTop: "8px",
                    }}
                  ></div>
                </div>
                <div>
                  <div
                    style={{
                      width: "40px",
                      height: "22px",
                      borderRadius: "2px",
                      backgroundColor: "#38B5FE",
                      // marginTop: "8px",
                    }}
                  ></div>
                </div>
                <div>
                  <div
                    style={{
                      width: "40px",
                      height: "22px",
                      borderRadius: "2px",
                      backgroundColor: "#5BDFE4",
                      // marginTop: "8px",
                    }}
                  ></div>
                </div>
                <div>
                  <div
                    style={{
                      width: "40px",
                      height: "22px",
                      borderRadius: "2px",
                      backgroundColor: "#7ED857",
                      // marginTop: "8px",
                    }}
                  ></div>
                </div>
                <div>
                  <div
                    style={{
                      width: "40px",
                      height: "22px",
                      borderRadius: "2px",
                      backgroundColor: "#FCDC58",
                      // marginTop: "8px",
                    }}
                  ></div>
                </div>
                <div>
                  <div
                    style={{
                      width: "40px",
                      height: "22px",
                      borderRadius: "2px",
                      backgroundColor: "#FEBC59",
                      // marginTop: "8px",
                    }}
                  ></div>
                </div>
                <div>
                  <div
                    style={{
                      width: "40px",
                      height: "22px",
                      borderRadius: "2px",
                      backgroundColor: "#516FFB",
                      // marginTop: "8px",
                    }}
                  ></div>
                </div>
              </Slider>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <div className="create-new-button">
                <Button
                  style={{
                    backgroundColor: "#8782D9",
                    color: "white",
                    fontSize: "14px",
                    lineHeight: "19px",
                    fontWeight: "400",
                    textTransform: "none",
                    padding: "9px 18px",
                    marginTop: "3px",
                  }}
                >
                  Create New
                </Button>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card />
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}
export default withStyles(styles)(App);

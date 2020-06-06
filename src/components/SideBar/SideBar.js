import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { Container } from "@material-ui/core";
import Notifications from '../images/notifications-button.png';
import DashBoard from '../images/dashboard.png';
import Signs from '../images/signs.png';
import Interface from '../images/interface.png';
import Logo from '../images/Prographer-Small-Logo.svg';


const styles = (theme) => ({
  grow: {
    flexGrow: 1,
  },

  appBar: {
    width: `calc(100% - 66px)`,
    marginLeft: "66px",
  },
  drawer: {
    width: "66px",
    flexShrink: 0,
  },
  drawerPaper: {
    width: "66px",
  },
  root: {
    "& .MuiDrawer-paperAnchorDockedLeft": {
      backgroundColor: "#282461",
    },
    "& .MuiAppBar-colorPrimary": {
      backgroundColor: "#FFFFFF",
    },
    "& .MuiPaper-elevation4": {
      boxShadow: "none",
    },
    "& .MuiAppBar-root": {
      borderBottom: "1px solid #D8D8D8",
    },
  },
  subtitle: {
    color: "#8D8D8D",
    fontSize: "13px",
    lineHeight: "18px",
  },
  title: {
    color: "#000",
    fontSize: "20px",
    lineHeight: "26px",
    fontWeight: "500",
  },
  container: {
    paddingLeft: "20px",
    paddingRight: "30px",
    paddingTop: "8px",
    paddingBottom: "8px",
  },
});

class Sidebar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Container className={classes.container}>
            <div style={{ float: "left" }}>
              <div className={classes.title}>Templates</div>
              <div className={classes.subtitle}>Dashboard > Templates</div>
            </div>
            <div style={{ float: "right" }}>
                <button style={{
                  // maxWidth:"40px",
                     width: "39px",
                     height: "39px",
                     background: "#F1F1F1",
                     size:"small",
                     borderRadius: "50%",
                     MozBorderRadius:"50%",
                     WebkitBorderRadius:"50%",
                     border:"none",
                     marginRight:"20px",
                     textAlign:"center"
                    //  marginTop:"8px",
                    //  paddingTop:"8px"
                   
                }}>
                  <img
                  // style={{paddingTop:"8px"}} 
                  src={Notifications}></img>
                </button>
                

              <span style={{ fontSize: "14px", color: "#404040" }}>Satyajit</span>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="black"
              >
                <AccountCircle />
              </IconButton>
            </div>
          </Container>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <List>
            <ListItem button style={{height:"61px" }}>
              <img src={Logo}></img>
            </ListItem>
            <ListItem button style={{height:"66px" }}>
              <img src={DashBoard}></img>
            </ListItem>
            <ListItem button style={{height:"66px" }}>
              <img src={Signs}></img>
            </ListItem>
            <ListItem button style={{height:"66px" }}>
              <img src={Interface}></img>
            </ListItem>
            <ListItem button>
              <ViewModuleIcon style={{ fill: "#7B77AA", marginTop: "15px" }} />
            </ListItem>
          </List>
        </Drawer>
      </div>
    );
  }
}
export default withStyles(styles)(Sidebar);

import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import { AppBar, ListItem, ListItemText, Button } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth.actions";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`
  }
}));

const HeaderComponent = ({ signOut }) => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            EXPENSIFY
          </Typography>
          <NavLink
            to={"/dashboard"}
            activeClassName="is-active"
            exact
            className={classes.linkText}
          >
            <ListItem button activeClassName="is-active">
              <ListItemText
                primary={"Dashboard"}
                activeClassName="is-active"
              />
            </ListItem>
          </NavLink>
          <Button onClick={signOut} color="inherit">
            LogOut
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(HeaderComponent);

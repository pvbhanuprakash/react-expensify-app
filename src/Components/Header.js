import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import { AppBar, List, ListItem, ListItemText } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
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
  const navLinks = [
    { title: `Dashboard`, path: `/dashboard` },
    { title: `Create Expense`, path: `/create` },
    { title: `Help`, path: `/help` }
  ];
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Expensify
          </Typography>
          <List
            component="nav"
            aria-labelledby="main navigation"
            className={classes.navDisplayFlex}
          >
            {navLinks.map(({ title, path }) => (
              <NavLink
                to={path}
                activeClassName="is-active"
                exact
                className={classes.linkText}
              >
                <ListItem button activeClassName="is-active">
                  <ListItemText primary={title} activeClassName="is-active" />
                </ListItem>
              </NavLink>
            ))}
          </List>
        </Toolbar>
      </AppBar>
      <button onClick={signOut}>LogOut</button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(HeaderComponent);

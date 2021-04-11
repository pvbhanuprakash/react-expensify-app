import React from "react";
import { connect } from "react-redux";
import { Button, Typography } from "@material-ui/core";
import { startLogin } from "../actions/auth.actions";

const LoginPage = ({ startLogin }) => (
  <div
    style={{
      background: `url('/wallpaper.jpg')`,
      "background-size": "cover",
      height: "100vh",
      width: "100vw",
      display: "flex",
      "align-items": "center",
      "justify-content": "center",
      color: "DarkSlateGray"
    }}
  >
    <div
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        "border-radius": "5px",
        padding: "3rem",
        "text-align": "center"
      }}
    >
      <Typography variant="h5" component="h5">
        EXPENSIFY
      </Typography>
      <Typography variant="h6" component="h6">
        Time to get your expenses under control.
      </Typography>
      <Button onClick={startLogin} variant="contained" color="primary">
        Login
      </Button>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);

import React from "react";
import { getFullYear, getFooterCopy } from "../utils/utils";
import { StyleSheet, css } from "aphrodite";
import { connect } from "react-redux";

const Footer = ({ user }) => {
  return (
    <footer className={css(styles.footerStyle)}>
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
      {user.email && user.password && (
        <p>
          <a>Contact Us</a>
        </p>
      )}
    </footer>
  );
};

const styles = StyleSheet.create({
  footerStyle: {
    maxHeight: "10vh",
    textAlign: "center",
    fontStyle: "italic",
  },
});

const mapStateToProps = (state) => ({
  user: state.toJS().user,
  isLoggedIn: state.toJS().isUserLoggedIn,
});
const ConnectedFooter = connect(mapStateToProps)(Footer);
export default Footer;
export { ConnectedFooter };

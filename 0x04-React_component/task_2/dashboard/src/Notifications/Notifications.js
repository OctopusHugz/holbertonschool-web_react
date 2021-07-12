import React, { Component } from 'react'
import "./Notifications.css";
import NotificationItem from "./NotificationItem";
import icon from "../assets/close-icon.png";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";


export default class Notifications extends Component {
  constructor(props) {
    super(props);
    this.displayDrawer = this.props.displayDrawer;
    this.listNotifications = this.props.listNotifications;
  }

  static propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
  }

  static defaultProps = {
    displayDrawer: false,
    listNotifications: [],
  };

  clickClose() {
    console.log("Close button has been clicked");
  }

  render() {
    return (
      <>
        <div className="menuItem">Your notifications</div>
        {this.displayDrawer && (
          <div className="Notifications">
            {this.listNotifications.length > 0 ? (
              <>
                <p style={{ display: "inline" }}>
                  Here is the list of notifications
                </p>
                <button
                  style={{ float: "right" }}
                  aria-label="Close"
                  onClick={this.clickClose}
                >
                  <img src={icon} alt="" style={{ height: "3vh" }} />
                </button>
                <ul>
                  {this.listNotifications.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      type={notification.type}
                      value={notification.value}
                      html={notification.html}
                    />
                  ))}
                </ul>
              </>
            ) : <p>No new notification for now</p>}
          </div>
        )}
      </>
    )
  }
}

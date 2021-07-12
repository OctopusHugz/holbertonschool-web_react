import React, { Component } from 'react';
import "../App/App.css";
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import CourseList from "../CourseList/CourseList";
import PropTypes from 'prop-types';
import { getLatestNotification } from "../utils/utils";

export default class App extends Component {
  constructor(props) { super(props); }

  static propTypes = {
    isLoggedIn: PropTypes.bool
  }

  static defaultProps = {
    isLoggedIn: false
  };

  render() {
    const listCourses = [
      {id: 1, name: 'ES6', credit: 60},
      {id: 2, name: 'Webpack', credit: 20},
      {id: 3, name: 'React', credit: 40},
    ];
    const htmlObj = {
      __html: getLatestNotification(),
    };
    const listNotifications = [
      {id: 1, type: 'default', value: 'New course available'},
      {id: 2, type: 'urgent', value: 'New resume available'},
      {id: 3, type: 'urgent', html: htmlObj},
    ];

    return (
      <>
      <Notifications listNotifications={listNotifications} />
      <div className="App">
        <Header />
        <hr />
        {this.props.isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
        <hr />
        <Footer />
      </div>
    </>
    )
  }
}

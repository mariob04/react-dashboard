import React from "react";
import "./Sidebar.css";
import LineStyleIcon from "@material-ui/icons/LineStyle";
import TimelineIcon from "@material-ui/icons/Timeline";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import PersonIcon from "@material-ui/icons/Person";
import BorderAllIcon from "@material-ui/icons/BorderAll";
import EuroIcon from "@material-ui/icons/Euro";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import DynamicFeedIcon from "@material-ui/icons/DynamicFeed";
import MessageIcon from "@material-ui/icons/Message";
import WorkIcon from "@material-ui/icons/Work";
import ReportIcon from "@material-ui/icons/Report";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        <div className="sidebar__menu">
          <h3 className="sidebar__title">Dashboard</h3>
          <ul className="sidebar__list">
            <Link to="/" className="link">
              <li className="list__item">
                <LineStyleIcon className="sidebar__icon" />
                Home
              </li>
            </Link>
            <li className="list__item">
              <TimelineIcon className="sidebar__icon" />
              Analytics
            </li>
            <li className="list__item">
              <TrendingUpIcon className="sidebar__icon" />
              Sales
            </li>
          </ul>
          <h3 className="sidebar__title">Quick Menu</h3>
          <ul className="sidebar__list">
            <Link to="/users" className="link">
              <li className="list__item">
                <PersonIcon className="sidebar__icon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="list__item">
                <BorderAllIcon className="sidebar__icon" />
                Products
              </li>
            </Link>
            <li className="list__item">
              <EuroIcon className="sidebar__icon" />
              Transactions
            </li>
            <li className="list__item">
              <EqualizerIcon className="sidebar__icon" />
              Reports
            </li>
          </ul>
          <h3 className="sidebar__title">Notifications</h3>
          <ul className="sidebar__list">
            <li className="list__item">
              <MailOutlineIcon className="sidebar__icon" />
              Mail
            </li>
            <li className="list__item">
              <DynamicFeedIcon className="sidebar__icon" />
              Feedback
            </li>
            <li className="list__item">
              <MessageIcon className="sidebar__icon" />
              Messages
            </li>
          </ul>
          <h3 className="sidebar__title">Staff</h3>
          <ul className="sidebar__list">
            <li className="list__item">
              <WorkIcon className="sidebar__icon" />
              Manage
            </li>
            <li className="list__item">
              <TimelineIcon className="sidebar__icon" />
              Analytics
            </li>
            <li className="list__item">
              <ReportIcon className="sidebar__icon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

import React from "react";
import "./UserPage.css";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PublishIcon from "@mui/icons-material/Publish";
import { Link } from "react-router-dom";

function UserPage() {
  return (
    <div className="user">
      <div className="user__titleContainer">
        <h1 className="user__title">Edit User</h1>
        <Link to="/newUser">
          <button className="user__addBtn">Create</button>
        </Link>
      </div>
      <div className="user__container">
        <div className="user__display">
          <div className="user__displayTop">
            <img
              className="user__img"
              src="https://static01.nyt.com/images/2019/11/17/books/review/17Salam/Salam1-superJumbo.jpg"
              alt=""
            />
            <div className="user__topTitle">
              <span className="user__un">Anna Kendrick</span>
              <span className="user__ut">Software Engineer</span>
            </div>
          </div>
          <div className="user__displayBottom">
            <span className="user__bottomTitle"></span>
            <div className="user__bottomInfo">
              <PermIdentityIcon className="user__icon" />
              <span className="user__bottomHandle">anna_k89</span>
            </div>

            <div className="user__bottomInfo">
              <CalendarTodayIcon className="user__icon" />
              <span className="user__bottomHandle">12.5.1989</span>
            </div>

            <div className="user__bottomInfo">
              <LocalPhoneIcon className="user__icon" />
              <span className="user__bottomHandle">+38591 458 444</span>
            </div>

            <div className="user__bottomInfo">
              <AlternateEmailIcon className="user__icon" />
              <span className="user__bottomHandle">anna_k89@company.com</span>
            </div>
          </div>
        </div>
        <div className="user__update">
          <span className="user__updateTitle">Edit</span>
          <form action="" className="user__updateForm">
            <div className="user__updateLeft">
              <div className="user__updateItem">
                <label htmlFor="">Username</label>
                <input
                  type="text"
                  placeholder="ana_k89"
                  className="user__updateInput"
                />
              </div>
              <div className="user__updateItem">
                <label htmlFor="">Birthday</label>
                <input
                  type="date"
                  placeholder=""
                  className="user__updateInput"
                />
              </div>
              <div className="user__updateItem">
                <label htmlFor="">Phone</label>
                <input
                  type="text"
                  placeholder=""
                  className="user__updateInput"
                />
              </div>
              <div className="user__updateItem">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  placeholder=""
                  className="user__updateInput"
                />
              </div>
            </div>
            <div className="user__updateRight">
              <div className="user__updateUpload">
                <img
                  src="https://static01.nyt.com/images/2019/11/17/books/review/17Salam/Salam1-superJumbo.jpg"
                  alt=""
                  className="user__updateImg"
                />
                <label htmlFor="file">
                  <PublishIcon className="user__updateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="user__updateBtn">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserPage;

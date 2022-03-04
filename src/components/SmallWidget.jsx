import React from "react";
import "./SmallWidget.css";
import VisibilityIcon from "@material-ui/icons/Visibility";

function SmallWidget() {
  return (
    <div className="widget__s">
      <div className="widgets__title">New Members</div>
      <ul className="widgets__list">
        <li className="widgets__listitem">
          <img
            src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg"
            alt=""
            className="widgets__img"
          />
          <div className="widgets__user">
            <span className="widgets__un">Anna Keller</span>
            <span className="widgets__ut">Web Developer</span>
          </div>
          <button className="widgets__btn">
            <VisibilityIcon />
            Display
          </button>
        </li>
        <li className="widgets__listitem">
          <img
            src="https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo="
            alt=""
            className="widgets__img"
          />
          <div className="widgets__user">
            <span className="widgets__un">Mark Webber</span>
            <span className="widgets__ut">Web Developer</span>
          </div>
          <button className="widgets__btn">
            <VisibilityIcon />
            Display
          </button>
        </li>
        <li className="widgets__listitem">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4xfSX3IL1qQPoIQ6LH3XKbDaNB7zWzy7K6a4mBMxc3SPSrFms2pm2FMNN99MrN4-fkoY&usqp=CAU"
            alt=""
            className="widgets__img"
          />
          <div className="widgets__user">
            <span className="widgets__un">John Devins</span>
            <span className="widgets__ut">Web Developer</span>
          </div>
          <button className="widgets__btn">
            <VisibilityIcon className="widgets__icon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}

export default SmallWidget;

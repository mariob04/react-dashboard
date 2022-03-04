import React from "react";
import "./NewUser.css";

function NewUser() {
  return (
    <div className="newuser">
      <h1 className="newuser__title">New User</h1>
      <form action="" className="newuser__form">
        <div className="newuser__item">
          <label htmlFor="">Username</label>
          <input type="text" placeholder="username" />
        </div>
        <div className="newuser__item">
          <label htmlFor="">Full Name</label>
          <input type="text" placeholder="full name" />
        </div>
        <div className="newuser__item">
          <label htmlFor="">Birthday</label>
          <input type="date" placeholder="birthday" />
        </div>
        <div className="newuser__item">
          <label htmlFor="">Email</label>
          <input type="email" placeholder="e-mail" />
        </div>
        <div className="newuser__item">
          <label htmlFor="">Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newuser__item">
          <label htmlFor="">Phone</label>
          <input type="text" placeholder="phone number" />
        </div>
        <button className="newuser__btn">Create</button>
      </form>
    </div>
  );
}

export default NewUser;

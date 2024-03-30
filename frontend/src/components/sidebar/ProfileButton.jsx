import React, { useState } from "react";

const ProfileButton = (req) => {
  const User = JSON.parse(localStorage.getItem("chat-user"));

  return (
    <div className="avatar p-2">
      <div className="w-12 rounded-full">
          <img src={User.profilePicture} onClick={() => {<></>}} />
      </div>
    </div>
  );
};

export default ProfileButton;

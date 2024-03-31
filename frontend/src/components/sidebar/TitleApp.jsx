import React from "react";
import MyProfileModal from "./MyProfileModal.jsx";
import ProfileButton from "./ProfileButton.jsx";

const TitleApp = () => {
  return (
    <div className="flex flex-row items-center">
      <ProfileButton />
      <MyProfileModal />
      <h1 className="text-lime-700 font-montserrat font-light text-center mb-3 text-2xl">
        Talk
      </h1>
    </div>
  );
};

export default TitleApp;

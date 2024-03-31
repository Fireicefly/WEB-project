import React from "react";
import { useAuthContext } from '../../context/AuthContext.jsx';


const ProfileButton = () => {
  const {authUser} = useAuthContext();

  return (
    <div className="avatar p-2">
      <div className="w-12 rounded-full">
          <img src={authUser.profilePicture} onClick={()=>document.getElementById('MyProfileModal').showModal()}/>
      </div>
    </div>
  );
};

export default ProfileButton;

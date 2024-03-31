import React from "react";
import { useAuthContext } from "../../context/AuthContext";

const MyProfileModal = () => {
  const {authUser} = useAuthContext();
  
  return (
    <dialog id="MyProfileModal" className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div className="avatar p-2">
          <div className="w-12 rounded-full">
            <img
              src={authUser.profilePicture}
              onClick={() =>
                document.getElementById("MyProfileModal").showModal()
              }
            />
          </div>
        </div>
        <h3 className="font-bold text-lg mb-2">{authUser.username}</h3>
        <p className="text-gray-500 mb-2">Full name : {authUser.fullName}</p>
        <p className="text-gray-500 mb-4"> email : {authUser.email} </p>
        <textarea placeholder={authUser.description} className="textarea textarea-bordered textarea-s w-full max-w-xs" ></textarea>
      </div>
    </dialog>
  );
};

export default MyProfileModal;

import React from "react";

export default function ProfileModal ({ open, onClose, children }) {
  return (
    <div
      onClick={onClose}
      className='fixed inset-0 flex justify-center iteùs-center transition-colors ${ open ? "visible bg-black/20" : "invisible"}'
    >
      {children}
      profileModal{" "}
    </div>
  );
};


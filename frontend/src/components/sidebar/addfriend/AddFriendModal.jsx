import React from 'react'
import AddFriendSearch from './AddFriendSearch.jsx'
import UserList from './UserList.jsx'


const AddFriendModal = () => {
  return (
    <dialog id="modal_add_friend" className="modal">
      <div className="flex flex-col modal-box w-11/12 h-4/5 max-h-xl max-w-xl">
      <AddFriendSearch />
      <UserList />
      </div>
      <form method="dialog" className="modal-backdrop">
      <button>close</button>
      </form>
    </dialog>
  )
}

export default AddFriendModal
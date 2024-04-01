import { IoPersonAdd } from "react-icons/io5";
import AddFriendModal from "./AddFriendModal.jsx";
const AddFriend = () => {
  return (
    <>
    <button className="absolute inset-y-0 end-0 pe-5" onClick={()=>document.getElementById('modal_add_friend').showModal()}><IoPersonAdd className="text-xl text-zinc-300 hover:text-zinc-500" /></button>
    <AddFriendModal />
    </>
  )
}

export default AddFriend
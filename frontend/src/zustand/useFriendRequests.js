import {create} from 'zustand';

const useFriendRequests = create((set) => ({
    friendRequests: [],
    setFriendRequests: (friendRequests) => set({friendRequests})
}));

export default useFriendRequests;
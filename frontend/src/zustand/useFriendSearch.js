import {create} from 'zustand';

const useFriendSearch = create((set) => ({
    requestUsersList: [],
    setRequestUsersList: (requestUsersList) => set({requestUsersList})
}));

export default useFriendSearch;
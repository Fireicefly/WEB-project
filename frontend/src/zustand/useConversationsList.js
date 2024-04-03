import {create} from 'zustand';

const useConversationsList = create((set) => ({
    conversations: [],
    setConversations: (conversations) => set({conversations})
}));

export default useConversationsList;
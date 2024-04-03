import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { AuthContext, useAuthContext } from '../context/AuthContext.jsx';

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();
    const signup = async ({fullName, username, password, confirmPassword, gender}) => {
        const success = handleInputErrors({fullName, username, password, confirmPassword, gender});
        if (!success) return;
        setLoading(true);

        try {
            const response = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({fullName, username, password, confirmPassword, gender})
            });

            const data = await response.json();
            if (data.error) {
                throw new Error(data.error);
            }

            localStorage.setItem('chat-user', JSON.stringify(data));
            setAuthUser(data);

        } catch (error) {
            toast.error(error.message || 'An error occurred');
        } finally {
            setLoading(false);
        }
    
    };
    return { loading, signup }
};

export default useSignup;


function handleInputErrors({fullName, username, password, confirmPassword, gender}) {
    
    


    
    const fullNameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
    const usernameRegex = /^[A-Za-z0-9À-ÖØ-öø-ÿ]+$/;

    if (!fullNameRegex.test(fullName)) {
        toast.error('Please enter a valid full name (only letters)');
        return false;
    }
    if (!usernameRegex.test(username)) {
        toast.error('Please enter a valid username (only letters and numbers)');
        return false;
    }
    
    if (!fullName || !username || !password || !confirmPassword || !gender) {
        toast.error('Please fill in all fields');
        return false;
    }
    if (password.length < 6) {
        toast.error('Password must be at least 6 characters long');
        return false;
    }
    if (password !== confirmPassword) {
        toast.error('Passwords do not match');
        return false;
    }
    return true;
}
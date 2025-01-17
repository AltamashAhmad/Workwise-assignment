import { createContext, useState, useContext, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        // Check if user is logged in
        const token = localStorage.getItem('token');
        if (token) {
            setUser({ token });
        }
        setLoading(false);
    }, []);

    const logout = useCallback(async () => {
        setUser(null);
        localStorage.clear();
        window.location.href = '/login'; // Force a full redirect
    }, []);

    const login = async (email, password) => {
        try {
            const res = await fetch('http://localhost:5001/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await res.json();
            if (data.error) throw new Error(data.error);
            
            localStorage.setItem('token', data.token);
            setUser({ token: data.token });
            router.push('/booking');
            return { success: true };
        } catch (error) {
            return { error: error.message };
        }
    };

    const register = async (name, email, password) => {
        try {
            const res = await fetch('http://localhost:5001/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });
            const data = await res.json();
            if (data.error) throw new Error(data.error);
            
            localStorage.setItem('token', data.token);
            setUser({ token: data.token });
            router.push('/booking');
            return { success: true };
        } catch (error) {
            return { error: error.message };
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export function useAuth() {
    return useContext(AuthContext);
} 
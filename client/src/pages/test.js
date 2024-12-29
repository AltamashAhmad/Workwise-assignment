import { useState, useEffect } from 'react';

export default function TestPage() {
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const testConnection = async () => {
            try {
                const response = await fetch('https://train-booking-backend-azu3.onrender.com/test');
                const data = await response.json();
                setMessage(data.message);
            } catch (err) {
                setError(err.message);
                console.error('Connection error:', err);
            }
        };

        testConnection();
    }, []);

    return (
        <div>
            {message && <p>Success: {message}</p>}
            {error && <p>Error: {error}</p>}
            <p>API URL: {process.env.NEXT_PUBLIC_API_URL}</p>
        </div>
    );
} 
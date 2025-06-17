import React, { useEffect } from 'react';
import { isAuthenticated, logout } from './services/authService';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

const App = () => {
    useEffect(() => {
        const checkSession = () => {
            if (!isAuthenticated()) {
                logout();
                window.location.href = '/';
            }
        };

        const interval = setInterval(checkSession, 60000); // Check every minute
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            {isAuthenticated() ? <Dashboard /> : <Login />}
        </div>
    );
};

export default App;
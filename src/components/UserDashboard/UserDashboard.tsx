import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

const UserDashboard = () => {
    const [user, setUser] = useState<User | null>(null);
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setUser(user);
        });
        return () => unsubscribe();
    }, [auth]);

    return (
        <div className="services-container">
            {user ? (
                <div className="service-section">
                    <div className="service-header">
                        <h2>Welcome, {user.displayName}</h2>
                    </div>
                </div>
            ) : (
                <div className="service-section">
                    <div className="service-header">
                        <h2>Please log in</h2>
                    </div>
                </div>
            )}
            <div className="service-section">
                <div className="service-content">
                    {/* Content goes here */}
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;

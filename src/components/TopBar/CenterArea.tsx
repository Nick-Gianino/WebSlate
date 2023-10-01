import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';

const CenterArea = () => {
  const [user, setUser] = useState<User | null>(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [auth]);

  return (
    <div className='centerarea'  >
        {user ? <p>Hello, {user.displayName}</p> : <p style={{ fontSize: '50pt' }}>Welcome To Webslate!</p>}
    </div>
  );
};

export default CenterArea;
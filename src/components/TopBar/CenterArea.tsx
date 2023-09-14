import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';

const CenterArea: React.FC = () => {
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
        {user ? <p>Hello, {user.displayName}</p> : <p>Please Sign in</p>}
    </div>
  );
};

export default CenterArea;
import React, { useEffect, useState } from 'react';

const Header = (props) => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Get user from props or localStorage
    const userData = JSON.parse(localStorage.getItem('loggedInUser'));
    
    if (!userData) {
      setUsername('Admin');
    } else {
      setUsername(userData.firstName || 'User');
    }
  }, []);

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    props.changeUser('');
    // Optionally redirect or reload
    // window.location.reload();
  };

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>
        Hello <br />
        <span className='text-3xl font-semibold'>{username} 👋</span>
      </h1>
      <button 
        onClick={logOutUser} 
        className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm'>
        Log Out
      </button>
    </div>
  );
};

export default Header;

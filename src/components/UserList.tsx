import React, { useState, useEffect } from 'react';
import User from './User'; // Assuming you have a User component

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('https://dummyjson.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data.users);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="p-4">
      {loading && (
        <div className="flex justify-center items-center min-h-screen">
          {/* Spinner for loading */}
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        </div>
      )}

      {error && <p className="text-red-500 text-center">{`Error: ${error}`}</p>}

      {!loading && !error && (
        <div className="flex flex-wrap gap-8 justify-center">
          {users.map((user, id) => (
            <div key={id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
              <User user={user} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UsersList;

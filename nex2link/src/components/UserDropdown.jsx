import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store/userSlice';

const UserDropdown = ({ onUserSelect }) => {
  const dispatch = useDispatch();
  const { list: userList, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    if (userList.length === 0 && !loading && !error) {
      dispatch(fetchUsers());
    }
  }, [dispatch, userList, loading, error]);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <select onChange={(e) => onUserSelect(e.target.value)}>
      <option value="">Select a user</option>
      {userList.map((user) => (
        <option key={user.$id} value={user.$id}>
          {user.name || user.email}
        </option>
      ))}
    </select>
  );
};

export default UserDropdown;
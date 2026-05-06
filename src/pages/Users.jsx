import { Link } from 'react-router-dom';
import './Users.css';

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Alice Johnson', email: 'alice@example.com' },
  { id: 4, name: 'Bob Brown', email: 'bob@example.com' },
];

const Users = () => {
  return (
    <div className="users">
      <div className="users-container">
        <h1>Users</h1>
        <ul className="users-list">
          {users.map(user => (
            <li key={user.id} className="user-item">
              <Link to={`/users/${user.id}`} className="user-link">
                <h3>{user.name}</h3>
                <p>{user.email}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Users;
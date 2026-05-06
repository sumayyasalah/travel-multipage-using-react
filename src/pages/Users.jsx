import { Link } from 'react-router-dom';
import './Users.css';

const users = [
  { id: 1, name: 'sumayya', email: 'sumayyasalah123@gmail.com' },
  { id: 2, name: 'anvar', email: 'anvarrashhed786@gmail.com' },
  { id: 3, name: 'bismi', email: 'bismisalah1995@gmail.com' },
  { id: 4, name: 'surumi', email: 'sarahsalahudeen@gmail.com' },
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
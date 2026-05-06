import { useParams, Link } from 'react-router-dom';
import './UserDetail.css';

const users = [
  { id: 1, name: 'sumayya', email: 'sumayyasalah123@gmail.com' },
  { id: 2, name: 'anvar', email: 'anvarrashhed786@gmail.com' },
  { id: 3, name: 'bismi', email: 'bismisalah1995@gmail.com' },
  { id: 4, name: 'surumi', email: 'sarahsalahudeen@gmail.com' },
];

const UserDetail = () => {
  const { id } = useParams();
  const user = users.find(u => u.id === parseInt(id));

  if (!user) {
    return (
      <div className="user-detail">
        <div className="user-detail-container">
          <h1>User not found</h1>
          <Link to="/users" className="btn">Back to Users</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="user-detail">
      <div className="user-detail-container">
        <h1>User Details</h1>
        <div className="user-info">
          <h2>{user.name}</h2>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>ID:</strong> {user.id}</p>
        </div>
        <Link to="/users" className="btn">Back to Users</Link>
      </div>
    </div>
  );
};

export default UserDetail;
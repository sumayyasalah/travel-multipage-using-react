import { useParams, Link } from 'react-router-dom';
import './UserDetail.css';

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Alice Johnson', email: 'alice@example.com' },
  { id: 4, name: 'Bob Brown', email: 'bob@example.com' },
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
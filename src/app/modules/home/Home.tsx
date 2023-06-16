import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div>
      Home
      <Link to="/private/dashboard">Go to Dashboard</Link>
    </div>
  );
}

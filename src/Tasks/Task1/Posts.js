import { Link, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


function Posts() {
  const { name } = useParams(); 

  return (
    <div>
      <h2>Posts</h2>
      <p>Here are the {name} posts.</p>
      {/* Link to navigate back to the profile page */}
      <Link to={`/profile/${name}`}>Back to Profile</Link>
    </div>
  );
}

export default Posts;

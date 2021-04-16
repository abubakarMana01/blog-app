import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div>
			<p>Page not found</p>
			<Link to="/">Back to homepage</Link>
		</div>
	);
};

export default NotFound;

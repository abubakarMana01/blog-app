import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<div className="navbar">
			<h2>Manas Blog</h2>
			<div>
				<Link to="/">Home</Link>
				<Link to="/create">New Blog</Link>
			</div>
		</div>
	);
};

export default NavBar;

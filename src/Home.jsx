import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
	const { data: blogs, isLoading, error } = useFetch('http://localhost:8080/blogs');

	return (
		<div>
			{error && <p>{error}</p>}
			{isLoading && <p>Loading...</p>}
			{blogs && <BlogList blogs={blogs} title="All blogs!" />}
		</div>
	);
};

export default Home;

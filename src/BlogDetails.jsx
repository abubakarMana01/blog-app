import { useHistory, useParams } from 'react-router';
import useFetch from './useFetch';

const BlogDetails = () => {
	const { id } = useParams();
	const { data, isLoading, error } = useFetch('http://localhost:8080/blogs/' + id);
	const history = useHistory();

	const handleDelete = () => {
		fetch('http://localhost:8080/blogs/' + id, {
			method: 'DELETE',
		}).then(() => {
			history.push('/');
		});
	};

	return (
		<div>
			{isLoading && <p>Loading...</p>}
			{error && <p>{error}</p>}
			{data && (
				<div className="blog-details">
					<h2>{data.title}</h2>
					<h4>Written by {data.author}</h4>
					<p>{data.body}</p>
					<button onClick={handleDelete}>Delete</button>
				</div>
			)}
		</div>
	);
};

export default BlogDetails;

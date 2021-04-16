import { useState } from 'react';
import { useHistory } from 'react-router';

const Create = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [author, setAuthor] = useState('luigi');
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const history = useHistory();

	const handleSubmit = e => {
		e.preventDefault();
		const blog = { title, body, author };
		setAuthor('luigi');
		setBody('');
		setTitle('');

		setIsLoading(true);

		fetch('http://localhost:8080/blogs', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(blog),
		})
			.then(response => {
				setIsLoading(false);
				if (!response.ok) throw new Error('An error was encountered');
				history.push('/');
			})
			.catch(err => {
				setError(err.message);
			});
	};

	return (
		<div className="create">
			<h2>Add new Blog</h2>
			<form onSubmit={handleSubmit}>
				<label id="blog-title-label">Blog title:</label>
				<input
					type="text"
					value={title}
					required
					onChange={e => setTitle(e.target.value)}
				/>

				<label id="body-label">Blog body:</label>
				<textarea
					id="blog-body-text"
					value={body}
					required
					onChange={e => setBody(e.target.value)}
				></textarea>

				<label id="author-label">Blog author:</label>
				<select id="author" value={author} onChange={e => setAuthor(e.target.value)}>
					<option value="mario">Mario</option>
					<option value="luigi">Luigi</option>
				</select>

				{!isLoading && <button>Add Blog</button>}
				{isLoading && <button disabled>Adding new blog...</button>}
				{error && <p>{error}</p>}
			</form>
		</div>
	);
};

export default Create;

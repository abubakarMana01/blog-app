import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = ({ blogs, title }) => {
	return (
		<div className="bloglists">
			<h1>{title}</h1>
			{blogs.map(blog => {
				return (
					<div className="bloglist" key={blog.id}>
						<Link to={'/blogs/' + blog.id}>
							<h2>{blog.title}</h2>
							<h3>Written by {blog.author}</h3>
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default BlogList;

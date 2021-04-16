import { useEffect, useState } from 'react';

const useFetch = url => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		setIsLoading(true);
		fetch(url)
			.then(response => {
				if (!response.ok) {
					throw new Error('Could not fetch resource from location');
				}
				return response.json();
			})
			.then(data => {
				setIsLoading(false);
				setData(data);
			})
			.catch(err => {
				setError(err.message);
				setIsLoading(false);
			});
	}, [url]);

	return { data, isLoading, error };
};

export default useFetch;

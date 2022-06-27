import React from "react";

const useFetch = (url) => {
    const [data, setData] = React.useState(null);

		const [isLoading, setIsLoading] = React.useState(true);

		const [error, setError] = React.useState(null);

		React.useEffect(() => {
			setTimeout(() => {
				fetch(url)
					.then((res) => {
						if (!res.ok) {
							throw Error("Could not fetch data for that resource!");
						}
						return res.json();
					})
					.then((data) => {
						setData(data);
						setIsLoading(false);
						setError(null);
					})
					.catch((err) => {
						setError(err.message);
						setIsLoading(false);
					});
			}, 1000);
        }, [url]);
    
    return {data, isLoading, error}
}

export default useFetch;
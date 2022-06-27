/** @format */

import React, { useEffect } from "react";
import { BlogList } from "./BlogList";
import ErrorIcon from "@mui/icons-material/Error";

export function Home() {
	const [blogs, setBlogs] = React.useState(null);

	const [isLoading, setIsLoading] = React.useState(true)

	const [error, setError] = React.useState(null);

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter((blog) => blog.id !== id);
    //     setBlogs(newBlogs);
	// }
	
	useEffect(() => {
		setTimeout(() => {
			fetch("http://localhost:8000/blogs")
				.then((res) => {
					if (!res.ok) {
					throw Error("Could not fetch data for that resource!")
				}
				return res.json();
			})
			.then((data) => {
				setBlogs(data)
				setIsLoading(false)
				setError(null);
			})
				.catch(err => {
					setError(err.message);
					setIsLoading(false);
			})
		}, 1000);
	}, [])

	return (
		<>
			<div className="mx-25 px-8 mt-10">
				{error && (
					<div className="text-red-500 flex  gap-1">
						<div>
							<ErrorIcon />
						</div>
						<div>{error}</div>
					</div>
				)}
				{isLoading && <div>Loading...</div>}
				{blogs && <BlogList blogs={blogs} title={"All Blogs!"} />}
			</div>
		</>
	);
}

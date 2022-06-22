/** @format */

import React, { useEffect } from "react";
import { BlogList } from "./BlogList";

export function Home() {
	const [blogs, setBlogs] = React.useState(null);

	const [isLoading, setIsLoading] = React.useState(true)

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter((blog) => blog.id !== id);
    //     setBlogs(newBlogs);
	// }
	
	useEffect(() => {
		setTimeout(() => {
			fetch("http://localhost:8000/blogs")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setBlogs(data)
				setIsLoading(false)
			})
		}, 1000)
	}, [])

	return (
		<>
			<div className="mx-25 px-8 mt-10">
				{isLoading && <div>Loading...</div>}
				{blogs && <BlogList blogs={blogs} title={"All Blogs!"}  />}
			</div>
		</>
	);
}

/** @format */

import React from "react";
import { BlogList } from "./BlogList";

export function Home() {
	const [blogs, setBlogs] = React.useState([
		{
			title: "Welcome Party!",
			body: "lorem ipsum...",
			author: "John Doe",
			id: 1,
		},
		{
			title: "Birthday Girl",
			body: "lorem ipsum...",
			author: "Joseph Bright",
			id: 2,
		},
		{
			title: "The Dev",
			body: "lorem ipsum...",
			author: "Jonthan Saxton",
			id: 3,
		},
	]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);

        // console.log("delete wworking")
    }

	return (
		<>
			<div className="mx-25 px-8 mt-10">
				<BlogList blogs={blogs} title={"All Blogs!"} handleDelete={handleDelete} />
			</div>
		</>
	);
}

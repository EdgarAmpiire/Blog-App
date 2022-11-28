/** @format */

import React, {useState, useEffect} from "react";
import { BlogList } from "./BlogList";
import ErrorIcon from "@mui/icons-material/Error";
// import useFetch from "./useFetch";

export function Home() {
	// const {data:blogs, isLoading, error } = useFetch("http://localhost:4000/api/blogs");
	// const [blogs, setBlogs] = useState(null)

	// useEffect(() => {
	// 	const fetchBlogs = async () => {
	// 		const response = await fetch('/api/blogs')
	// 		const json = await response.json()

	// 		if(response.ok) {
	// 			setBlogs(json)
	// 		}
	// 	}

	// 	fetchBlogs()
	// }, [])
	const [blogs, setBlogs] = useState(null) 

	useEffect(() => {
		const fetchBlogs = async () => {
			const response = await fetch("http://localhost:4000/api/blogs/")
			const json = await response.json()

			if(response.ok) {
				setBlogs(json)
			}

		}

		fetchBlogs()

	}, [])

 
	return (
		<>
			<div className="mx-25 px-8 mt-10">
				{/* {error && (
					<div className="text-red-500 flex  gap-1">
						<div>
							<ErrorIcon />
						</div>
						<div>{error}</div>
					</div>
				)}  */}
				{/* {isLoading && <div>Loading...</div>} */}
				{blogs && <BlogList blogs={blogs} title={"All Blogs!"} />}
			</div>
		</>
	);
}

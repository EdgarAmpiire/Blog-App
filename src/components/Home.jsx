/** @format */

import React from "react";
import { BlogList } from "./BlogList";
import ErrorIcon from "@mui/icons-material/Error";
import useFetch from "./useFetch";

export function Home() {
	const {data:blogs, isLoading, error } = useFetch("http://localhost:8000/blogs");

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

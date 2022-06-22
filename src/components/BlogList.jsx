/** @format */

import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export function BlogList({ blogs, title,  }) {
	return (
		<>
			<h1 className="text-2xl text-black">{title}</h1>

			{blogs.map((blog) => (
				<div
					key={blog.id}
					className="p-5 mt-5  mb-3  flex flex-row items-center justify-between hover:bg-emerald-100 cursor-pointer hover:transition ">
					<div className=" ">
						<div className="text-xl text-emerald-500 font-semibold ">
							{blog.title}
						</div>
						<div className="text-gray-700 mt-2 text-lg">{blog.author}</div>
					</div>
					<div
						// onClick={() => handleDelete(blog.id)}
						className="text-red-500 rounded-full hover:bg-green-200 transition cursor-pointer p-2">
						<DeleteIcon className="h-16 w-16" />
					</div>
				</div>
			))}
		</>
	);
}

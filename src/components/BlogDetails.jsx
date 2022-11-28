import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

export function BlogDetails() {

	const [blog, setBlog] = useState(null)

	useEffect(() => {
		const fetchBlog = async () => {
			const response = await fetch("/api/blogs/:id")
			const json = await response.json()

			if (response.ok){
				setBlog(json)
			}
		}

		fetchBlog()
	}, [])

    const { id } = useParams();

    return (
			<>
				<div className="mx-25 px-8 mt-10">
                <h1 className="text-xl text-black">Blog Details - {id} </h1>
				
				</div>
			</>
		);
}
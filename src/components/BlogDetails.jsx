import React, { useEffect } from 'react';
import { useParams } from 'react-router';

export function BlogDetails() {

	useEffect(() => {
		const fetchBlog = async () => {
			const response = await fetch("/api/blogs/:id")
			const json = await response.json()

			
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
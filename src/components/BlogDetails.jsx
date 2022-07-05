import React from 'react';
import { useParams } from 'react-router';

export function BlogDetails() {

    const { id } = useParams();

    return (
			<>
				<div className="mx-25 px-8 mt-10">
                <h1 className="text-xl text-black">Blog Details - {id} </h1>
				</div>
			</>
		);
}
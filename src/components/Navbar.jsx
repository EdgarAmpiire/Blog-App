import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
    return (
			<>
				<div className="flex mx-25 p-8 items-center justify-between ">
					<div className="text-emerald-500 font-bold text-2xl">
						<Link to="/" >The Blog App </Link>
					</div>
					<div className="flex gap-5 text-gray-500 text-lg">
						<Link to="/">Home</Link>
						<Link to="new-blog">New Blog</Link>
					</div>
				</div>
			</>
		);
}
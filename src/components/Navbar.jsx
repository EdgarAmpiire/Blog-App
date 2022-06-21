import React from "react";

export function Navbar() {
    return (
			<>
				<div className="flex mx-25 p-8 items-center justify-between ">
					<div className="text-emerald-500 font-bold text-2xl">
						<a href="/" >The Blog App </a>
					</div>
					<div className="flex gap-5 text-gray-500 text-xl">
						<a href="/">Home</a>
						<a href="/new-blog">New Blog</a>
					</div>
				</div>
			</>
		);
}
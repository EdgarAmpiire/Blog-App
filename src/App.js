import "./App.css"
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import {  Routes, Route } from "react-router-dom";
import { NewBlog } from "./components/NewBlog";
import { BlogDetails } from "./components/BlogDetails";


function App() {
  return (
		<div className="flex justify-center">
			<div className="w-8/12">
				<Navbar />
					<Routes>
						<Route path="/" element={<Home />}/> 
							<Route path="new-blog" index element={<NewBlog />} />
							<Route path="blogs/:id" element={<BlogDetails />} />
					</Routes>
 				
			</div>
		</div>
	);
}

export default App;

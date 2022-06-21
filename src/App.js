import "./App.css"
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="flex justify-center">
    <div className="w-8/12">
        <Navbar />
        <Home />
    </div>
    </div>
  );
}

export default App;

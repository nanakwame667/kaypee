import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Homepage } from "./screens/Homepage";
import { Projects } from "./screens/Projects";
import { About } from "./screens/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
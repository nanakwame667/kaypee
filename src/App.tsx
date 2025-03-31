import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Homepage } from "./screens/Homepage";
import { Projects } from "./screens/Projects";
import { ProjectDetail } from "./screens/Projects/ProjectDetails";
import { About } from "./screens/About";
import { Footer } from "./components/Footer";
import { Header } from "./components/Navigation";

function App() {
  return (
    <Router>
      <div className="flex flex-col items-center gap-6 md:gap-12 px-4 md:px-12 lg:px-[120px] xl:px-[300px] max-w-[1440px] mx-auto py-6 md:py-12 relative bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

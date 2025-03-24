import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Residential from "./pages/Residential";
import Commercial from "./pages/Commercial";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Residential" element={<Residential />} />
          <Route path="Commercial" element={<Commercial />} />
          <Route path="Contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
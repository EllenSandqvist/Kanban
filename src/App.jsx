import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

//Pages
import Home from "./pages/Home";
import TodoPage from "./pages/TodoPage";
import DoingPage from "./pages/DoingPage";
import DonePage from "./pages/DonePage";
import MissingPage from "./pages/MissingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/doing" element={<DoingPage />} />
          <Route path="/done" element={<DonePage />} />
          <Route path="*" element={<MissingPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

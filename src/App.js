import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import TopPage from "./pages/TopPage";
import ThreadPage from "./pages/ThreadPage";
import CreateThreadPage from "./pages/CreateThreadPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<TopPage />} exact />
        <Route path="/thread/:id" element={<ThreadPage />} exact />
        <Route path="/create-thread" element={<CreateThreadPage />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

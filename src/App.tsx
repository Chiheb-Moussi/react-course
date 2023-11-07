import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/About";
import NewsPage from "./pages/News";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path="about" element={<AboutPage />}></Route>
            <Route path="news" element={<NewsPage />}></Route>
          </Route>
          <Route path="/contact/:id" element={<ContactPage />} />
          <Route path="*" element={<div>404 not found</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

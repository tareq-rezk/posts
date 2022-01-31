import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditPost from "./components/posts/edit-post";
import NotFound from "./components/not-found";
import Posts from "./components/posts/posts-list";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='*' element={<NotFound />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/edit/:id" element={<EditPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

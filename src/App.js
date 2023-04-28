import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./Home";
import Post from "./components/Post";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/hi/:id" element={<Post />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

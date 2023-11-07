import { RouterProvider } from "react-router-dom";
import Root from "./Root";

const App = () => {
  return (
    <>
      <RouterProvider router={Root} />
    </>
  );
};

export default App;

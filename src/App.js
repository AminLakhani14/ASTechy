import { RouterProvider } from "react-router-dom";
import { router } from "./BasePage";
import Navbar from "./Component/NavBar/NavBar";


function App() {
  return (
    <div className="App">
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

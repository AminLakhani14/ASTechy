import { RouterProvider } from "react-router-dom";
import { router } from "./BasePage";
import Navbar from "./Component/NavBar/Navbar";
import Service from "./Component/Home/Services/Service";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Service />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

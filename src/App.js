import { RouterProvider } from "react-router-dom";
import { router } from "./BasePage";
import Navbar from "./Component/NavBar/NavBar";
import Footer from "./Component/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;

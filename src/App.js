import AdminRoutes from "./routes/AdminRoutes";
import UserRoutes from "./routes/UserRoutes";
import Aos from "aos";
import 'aos/dist/aos.css';
import './App.css';
import { useEffect } from "react";
import { Routes } from "react-router-dom";

function App() {
  useEffect(() => {
    Aos.init()
  }, [])
  
  return (
    <>
      <Routes>
        {AdminRoutes}
        {UserRoutes}
      </Routes>
    </>
  );
}

export default App;

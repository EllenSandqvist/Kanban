import { Outlet } from "react-router-dom";
import { TaskProvider } from "./context/TaskContext";

//import of components
import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <TaskProvider>
        <Outlet />
      </TaskProvider>
      <Footer />
    </>
  );
};

export default Layout;

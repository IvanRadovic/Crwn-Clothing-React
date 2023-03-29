import Directory from "../../components/directory/directory.component";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/footer.component";

const Home = () => {
  return (
    <div>
        <Outlet />
        <Directory />
        <Footer />
    </div>
  );
}

export default Home;

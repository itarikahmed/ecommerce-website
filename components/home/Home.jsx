import Cart from "../Cart";
import Navbar from "../Navbar";
import Filters from "../Filters";
import Products from "../Products";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="flex mt-20">
        <div className="w-1/4">
          <Filters />
        </div>
        <div className="w-3/4">
          <Products />
        </div>
      </div>
    </div>
  );
};

export default Home;

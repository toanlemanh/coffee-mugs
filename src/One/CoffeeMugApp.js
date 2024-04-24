import Header from "./_layout/Header";
import Footer from "./_layout/Footer";
import Slider from "./components/Slider";
import Subscription from "./components/Subscription";
import Story from "./components/Story";
const CoffeeMugApp = () => {
  return (
    <div id="root">
      <div
        id="content-wrapper "
        className="max-w-screen-2xl text-base font-Karla mx-auto bg-slate-200"
      >
        <header className="py-6 mx-auto max-md:py-0">
          <Header />
        </header>
        {/* End header */}
        <main>
          <div id="slider">
            <Slider />
          </div>
          <div id="story">
            <Story />
          </div>
          <div id="featured-mugs"></div>
          <div id="more-product"></div>
          <div id="coffee-magazine"></div>
          <div id="lifestyle-stories"></div>
          <div id="subscribe-us"></div>
        </main>
        {/* End main */}
        <footer>
          <Footer />
        </footer>
        {/* End footer */}
      </div>
    </div>
  );
};
export default CoffeeMugApp;

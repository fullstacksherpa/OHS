
import {
  Contact,
  Hero,
  Navbar,
  Authors,
  StarsCanvas,
  Footer,
} from "../components";
import BlogPage from "../components/BlogPage";

const HomePage = () => {
  return (
      <div className="relative z-0 bg-primary"  id="home">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <BlogPage/>
        <Authors />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
  );
};

export default HomePage;

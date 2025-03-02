import Navbar from "../ui/HomePage/Navbar.jsx";
import HeroSection from "../ui/HomePage/HeroSection.jsx";
import Footer from "../ui/HomePage/Footer.jsx";
import ContentSection from "../ui/HomePage/ContentSection.jsx";
// Import styles
import "../../css/HeroSection.scss";
import "../../css/footer.scss";

function Home() {
  return (
    <>
      <Navbar />
        <HeroSection />
        <ContentSection />
      <Footer />
    </>
  );
}

export default Home;

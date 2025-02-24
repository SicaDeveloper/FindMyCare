import { useEffect } from "react";
import Navbar from "../ui/Navbar";
import IsLoggedIn from "../utils/IsLoggedIn.js";
import UserDashboard from "./UserDashboard";
import HeroSection from "../ui/HeroSection";
import Footer from "../ui/Footer";
import ContentSection from "../ui/ContentSection";

// Import styles
import "../../css/HeroSection.scss";
import "../../css/footer.scss";

function Home() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-container">
      {renderDashboard()}
    </div>
  );
}

function renderDashboard() {
  if (IsLoggedIn === null || IsLoggedIn === undefined) {
    throw new Error("IsLoggedIn is null or undefined");
  }

  if (IsLoggedIn()) {
    return <UserDashboard />;
  } 

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

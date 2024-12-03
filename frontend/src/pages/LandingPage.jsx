import HeroSection from "../components/HeroSection";
import Ads from "../components/Ads";
import AnalyticsSection from "../components/AnalyticsSection";
import OurVision from "../components/OurVision";
import TestimonialSection from "../components/TestimonialSection";
import AboutUsSection from "../components/AboutUs";
import ContactUsSection from "../components/ContactUs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LandingPage = () => {
  const sections = [
    { Component: HeroSection, id: "hero" },
    { Component: Ads, id: "ads" },
    { Component: AnalyticsSection, id: "analytics" },
    { Component: OurVision, id: "ourVision" },
    { Component: TestimonialSection, id: "testimonial" },
    { Component: AboutUsSection, id: "aboutUs" },
    { Component: ContactUsSection, id: "contactUs" },
  ];

  return (
    <>
      <Navbar />
      <div>
        {sections.map(({ Component, id }) => (
          <div key={id}>
            <Component />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;

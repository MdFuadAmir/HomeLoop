import Banner from "../Banner/Banner";
import BlogSection from "../BlogSection/BlogSection";
import CTASection from "../CTASection/CTASection";
import HowItWorks from "../HowItWorks/HowItWorks";
import Testimonials from "../Testimonials/Testimonials";
import WhyChoosUs from "../WhyChoosUs/WhyChoosUs";
const Home = () => {
  return (
    <div className="p-4 space-y-12">
      <Banner/>
      <HowItWorks/>
      <WhyChoosUs/>
      <BlogSection/>
      <Testimonials/>
      <CTASection/>
    </div>
  );
};

export default Home;

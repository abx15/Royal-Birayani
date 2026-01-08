import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSlider from '@/components/HeroSlider';
import TodaysSpecial from '@/components/TodaysSpecial';
import WhyOurBiryani from '@/components/WhyOurBiryani';
import PopularMenu from '@/components/PopularMenu';
import CustomerReviews from '@/components/CustomerReviews';
import CallToAction from '@/components/CallToAction';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

const Index = () => {
  useSmoothScroll();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSlider />
        <TodaysSpecial />
        <WhyOurBiryani />
        <PopularMenu />
        <CustomerReviews />
        <CallToAction />
      </main>
      <Footer />

      {/* Mobile Order Button */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="lg:hidden fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-secondary shadow-gold flex items-center justify-center text-secondary-foreground hover:scale-110 transition-transform"
      >
        <i className="fab fa-whatsapp text-2xl"></i>
      </a>
    </div>
  );
};

export default Index;

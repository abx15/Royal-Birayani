import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import heroBiryani1 from "@/assets/hero-biryani-1.jpg";
import heroBiryani2 from "@/assets/hero-biryani-2.jpg";
import heroBiryani3 from "@/assets/hero-biryani-3.jpg";

const slides = [
  {
    image: heroBiryani1,
    title: "Authentic Hyderabadi",
    subtitle: "Chicken Biryani",
    description:
      "Slow-cooked in traditional dum style with aromatic spices and premium basmati rice",
  },
  {
    image: heroBiryani2,
    title: "Royal Flavors",
    subtitle: "Mutton Biryani",
    description:
      "Tender mutton pieces layered with fragrant rice and our secret blend of spices",
  },
  {
    image: heroBiryani3,
    title: "Garden Fresh",
    subtitle: "Vegetable Biryani",
    description:
      "A colorful medley of seasonal vegetables with paneer in saffron-infused rice",
  },
];

const HeroSlider = () => {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px]">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation
        loop
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-hero" />
              </div>

              {/* Content */}
              <div className="relative h-full flex items-center">
                <div className="w-full px-4 sm:px-8">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-2xl"
                  >
                    {/* Ornament */}
                    <div className="flex items-center gap-4 mb-6">
                      <span className="ornament" />
                      <span className="text-secondary font-body text-sm tracking-widest uppercase">
                        Since 1985
                      </span>
                      <span className="ornament" />
                    </div>

                    {/* Title */}
                    <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-2 leading-tight">
                      {slide.title}
                    </h1>
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6 italic">
                      {slide.subtitle}
                    </h2>

                    {/* Description */}
                    <p className="text-primary-foreground/80 text-lg md:text-xl mb-10 max-w-lg">
                      {slide.description}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4">
                      <Link
                        to="/menu"
                        className="btn-royal bg-primary hover:bg-red-700"
                      >
                        <i className="fas fa-utensils mr-2"></i>
                        View Menu
                      </Link>
                      <a
                        href="https://wa.me/1234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-gold bg-secondary hover:bg-orange-600 text-foreground"
                      >
                        <i className="fab fa-whatsapp mr-2"></i>
                        Order on WhatsApp
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2 text-primary-foreground/60">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <i className="fas fa-chevron-down"></i>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSlider;

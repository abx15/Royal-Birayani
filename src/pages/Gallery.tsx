import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Thumbs, FreeMode } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

import heroBiryani1 from "@/assets/hero-biryani-1.jpg";
import heroBiryani2 from "@/assets/hero-biryani-2.jpg";
import heroBiryani3 from "@/assets/hero-biryani-3.jpg";
import restaurantInterior from "@/assets/restaurant-interior.jpg";
import chickenBiryani from "@/assets/menu-chicken-biryani.jpg";
import muttonBiryani from "@/assets/menu-mutton-biryani.jpg";
import vegBiryani from "@/assets/menu-veg-biryani.jpg";
import chickenTikka from "@/assets/menu-chicken-tikka.jpg";
import seekhKebab from "@/assets/menu-seekh-kebab.jpg";
import combo from "@/assets/menu-combo.jpg";

const galleryImages = [
  { src: heroBiryani1, title: "Hyderabadi Chicken Biryani", category: "Food" },
  {
    src: restaurantInterior,
    title: "Our Royal Dining Hall",
    category: "Restaurant",
  },
  { src: heroBiryani2, title: "Premium Mutton Biryani", category: "Food" },
  { src: chickenBiryani, title: "Classic Chicken Dum", category: "Food" },
  { src: heroBiryani3, title: "Vegetable Biryani Feast", category: "Food" },
  { src: muttonBiryani, title: "Gosht Biryani Special", category: "Food" },
  { src: vegBiryani, title: "Paneer Dum Biryani", category: "Food" },
  { src: chickenTikka, title: "Tandoori Chicken Tikka", category: "Food" },
  { src: seekhKebab, title: "Fresh Seekh Kebabs", category: "Food" },
  { src: combo, title: "Royal Combo Meal", category: "Food" },
];

const Gallery = () => {
  useSmoothScroll();
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="w-full px-4 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-secondary font-body text-sm tracking-widest uppercase mb-4 block">
              Visual Journey
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              Our <span className="text-secondary italic">Gallery</span>
            </h1>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto">
              Explore our delicious creations and beautiful restaurant through
              our collection of photos
            </p>
            <div className="flex items-center justify-center gap-4 mt-6">
              <span className="ornament-lg" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Gallery Slider */}
      <section className="py-12 bg-background">
        <div className="w-full px-4 sm:px-8">
          <Swiper
            modules={[Autoplay, Navigation, Thumbs]}
            spaceBetween={20}
            navigation
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            className="rounded-lg overflow-hidden shadow-elevated mb-4"
          >
            {galleryImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div
                  className="relative aspect-[16/9] cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <span className="text-secondary text-sm font-medium mb-1 block">
                      {image.category}
                    </span>
                    <h3 className="text-primary-foreground text-2xl font-display font-semibold">
                      {image.title}
                    </h3>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-secondary/80 flex items-center justify-center">
                      <i className="fas fa-expand text-secondary-foreground text-2xl"></i>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Thumbnail Slider */}
          <Swiper
            modules={[FreeMode, Thumbs]}
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode
            watchSlidesProgress
            breakpoints={{
              640: { slidesPerView: 5 },
              768: { slidesPerView: 6 },
              1024: { slidesPerView: 8 },
            }}
            className="thumbs-slider"
          >
            {galleryImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="aspect-square rounded-lg overflow-hidden cursor-pointer opacity-50 hover:opacity-100 transition-opacity [.swiper-slide-thumb-active_&]:opacity-100 [.swiper-slide-thumb-active_&]:ring-2 [.swiper-slide-thumb-active_&]:ring-secondary">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Grid Gallery */}
      <section className="section-padding bg-background">
        <div className="w-full px-4 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              More <span className="text-secondary italic">Moments</span>
            </h2>
            <div className="flex items-center justify-center gap-4">
              <span className="ornament-lg" />
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`relative overflow-hidden rounded-lg cursor-pointer group ${
                  index === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
                onClick={() => openLightbox(index)}
              >
                <div
                  className={`aspect-square ${
                    index === 0 ? "md:aspect-auto md:h-full" : ""
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-center">
                    <i className="fas fa-search-plus text-secondary text-2xl mb-2"></i>
                    <p className="text-primary-foreground font-medium">
                      {image.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <i className="fas fa-times text-2xl"></i>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(
                  (prev) =>
                    (prev - 1 + galleryImages.length) % galleryImages.length
                );
              }}
              className="absolute left-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <i className="fas fa-chevron-left text-xl"></i>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
              }}
              className="absolute right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <i className="fas fa-chevron-right text-xl"></i>
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-5xl max-h-[85vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].title}
                className="w-full h-full object-contain rounded-lg"
              />
              <div className="text-center mt-4">
                <p className="text-secondary text-sm">
                  {galleryImages[lightboxIndex].category}
                </p>
                <h3 className="text-white text-xl font-display">
                  {galleryImages[lightboxIndex].title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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

export default Gallery;

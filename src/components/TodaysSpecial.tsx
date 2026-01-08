import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";

import chickenBiryani from "@/assets/menu-chicken-biryani.jpg";
import muttonBiryani from "@/assets/menu-mutton-biryani.jpg";
import vegBiryani from "@/assets/menu-veg-biryani.jpg";
import chickenTikka from "@/assets/menu-chicken-tikka.jpg";

const specials = [
  {
    id: 1,
    name: "Hyderabadi Chicken Biryani",
    price: "₹349",
    image: chickenBiryani,
    badge: "Best Seller",
    isVeg: false,
  },
  {
    id: 2,
    name: "Royal Mutton Biryani",
    price: "₹449",
    image: muttonBiryani,
    badge: "Chef Special",
    isVeg: false,
  },
  {
    id: 3,
    name: "Paneer Dum Biryani",
    price: "₹299",
    image: vegBiryani,
    badge: "Popular",
    isVeg: true,
  },
  {
    id: 4,
    name: "Tandoori Chicken Tikka",
    price: "₹279",
    image: chickenTikka,
    badge: "Spicy",
    isVeg: false,
  },
];

const TodaysSpecial = () => {
  return (
    <section className="section-padding bg-background">
      <div className="w-full px-4 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-secondary font-body text-sm tracking-widest uppercase mb-4 block">
            Fresh & Delicious
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Our <span className="text-secondary italic">Biryani</span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <span className="ornament-lg" />
          </div>
        </motion.div>

        {/* Specials Slider */}
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="!pb-4"
        >
          {specials.map((item, index) => (
            <SwiperSlide key={item.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-menu group cursor-pointer"
              >
                {/* Image */}
                <div className="w-full px-4 sm:px-8 relative aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Badge */}
                  <div className="w-full px-4 sm:px-8 relative">
                    <span className="badge-bestseller">{item.badge}</span>
                  </div>
                  {/* Veg/Non-Veg Indicator */}
                  <div className="absolute top-4 right-4">
                    <div
                      className={item.isVeg ? "badge-veg" : "badge-nonveg"}
                    ></div>
                  </div>
                  {/* Overlay */}
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    {/* Note: `feature.icon` is not defined in this context. Assuming it should be a static icon or removed. */}
                    {/* For now, I'll comment it out or replace with a placeholder if it causes an error. */}
                    {/* <i className={`fas ${feature.icon} text-3xl text-primary`}></i> */}
                    <i className="fas fa-star text-3xl text-primary"></i>{" "}
                    {/* Placeholder */}
                  </div>
                  <div className="absolute inset-0 w-20 h-20 rounded-full bg-primary/10 blur-xl mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-bold text-xl">
                      {item.price}
                    </span>
                    <button className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-red-700 transition-all duration-300 hover:scale-110">
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TodaysSpecial;

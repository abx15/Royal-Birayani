import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

import chickenBiryani from "@/assets/menu-chicken-biryani.jpg";
import muttonBiryani from "@/assets/menu-mutton-biryani.jpg";
import vegBiryani from "@/assets/menu-veg-biryani.jpg";
import chickenTikka from "@/assets/menu-chicken-tikka.jpg";
import seekhKebab from "@/assets/menu-seekh-kebab.jpg";
import combo from "@/assets/menu-combo.jpg";

const categories = [
  { id: "chicken", name: "Chicken Biryani", icon: "fa-drumstick-bite" },
  { id: "mutton", name: "Mutton Biryani", icon: "fa-bone" },
  { id: "veg", name: "Veg Biryani", icon: "fa-leaf" },
  { id: "starters", name: "Starters", icon: "fa-utensils" },
  { id: "combos", name: "Combos", icon: "fa-box" },
];

const menuItems = {
  chicken: [
    {
      id: 1,
      name: "Hyderabadi Chicken Biryani",
      description: "Classic dum-cooked chicken biryani with aromatic spices",
      price: "₹349",
      image: chickenBiryani,
      isVeg: false,
      spiceLevel: 2,
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Chicken Dum Biryani",
      description: "Slow-cooked chicken pieces layered with fragrant rice",
      price: "₹329",
      image: chickenBiryani,
      isVeg: false,
      spiceLevel: 2,
    },
    {
      id: 3,
      name: "Spicy Chicken Biryani",
      description: "Extra spicy version for heat lovers",
      price: "₹369",
      image: chickenBiryani,
      isVeg: false,
      spiceLevel: 3,
      badge: "Spicy",
    },
    {
      id: 4,
      name: "Boneless Chicken Biryani",
      description: "Premium boneless chicken pieces with basmati",
      price: "₹399",
      image: chickenBiryani,
      isVeg: false,
      spiceLevel: 2,
    },
  ],
  mutton: [
    {
      id: 5,
      name: "Royal Mutton Biryani",
      description: "Tender mutton slow-cooked in traditional style",
      price: "₹449",
      image: muttonBiryani,
      isVeg: false,
      spiceLevel: 2,
      badge: "Chef Special",
    },
    {
      id: 6,
      name: "Gosht Biryani",
      description: "Succulent goat meat with aromatic rice",
      price: "₹479",
      image: muttonBiryani,
      isVeg: false,
      spiceLevel: 3,
    },
    {
      id: 7,
      name: "Kacchi Mutton Biryani",
      description: "Authentic raw meat dum biryani",
      price: "₹499",
      image: muttonBiryani,
      isVeg: false,
      spiceLevel: 2,
      badge: "Premium",
    },
  ],
  veg: [
    {
      id: 8,
      name: "Paneer Dum Biryani",
      description: "Creamy paneer cubes with saffron rice",
      price: "₹299",
      image: vegBiryani,
      isVeg: true,
      spiceLevel: 1,
      badge: "Popular",
    },
    {
      id: 9,
      name: "Vegetable Biryani",
      description: "Fresh seasonal vegetables with fragrant rice",
      price: "₹249",
      image: vegBiryani,
      isVeg: true,
      spiceLevel: 1,
    },
    {
      id: 10,
      name: "Mushroom Biryani",
      description: "Earthy mushrooms with aromatic basmati",
      price: "₹279",
      image: vegBiryani,
      isVeg: true,
      spiceLevel: 2,
    },
  ],
  starters: [
    {
      id: 11,
      name: "Chicken Tikka",
      description: "Tender chicken marinated in yogurt and spices",
      price: "₹279",
      image: chickenTikka,
      isVeg: false,
      spiceLevel: 2,
      badge: "Popular",
    },
    {
      id: 12,
      name: "Seekh Kebab",
      description: "Minced lamb kebabs with aromatic herbs",
      price: "₹299",
      image: seekhKebab,
      isVeg: false,
      spiceLevel: 2,
    },
    {
      id: 13,
      name: "Chicken 65",
      description: "Crispy fried chicken with South Indian spices",
      price: "₹249",
      image: chickenTikka,
      isVeg: false,
      spiceLevel: 3,
      badge: "Spicy",
    },
    {
      id: 14,
      name: "Paneer Tikka",
      description: "Grilled cottage cheese with bell peppers",
      price: "₹239",
      image: vegBiryani,
      isVeg: true,
      spiceLevel: 1,
    },
  ],
  combos: [
    {
      id: 15,
      name: "Royal Combo",
      description: "Chicken Biryani + Raita + Salan + Gulab Jamun",
      price: "₹499",
      image: combo,
      isVeg: false,
      spiceLevel: 2,
      badge: "Value",
    },
    {
      id: 16,
      name: "Family Pack",
      description: "Full Mutton Biryani (serves 4) + 2 Raita + 2 Salan",
      price: "₹1299",
      image: combo,
      isVeg: false,
      spiceLevel: 2,
    },
    {
      id: 17,
      name: "Veg Combo",
      description: "Paneer Biryani + Raita + Veg Salan + Kheer",
      price: "₹399",
      image: combo,
      isVeg: true,
      spiceLevel: 1,
    },
  ],
};

const SpiceIndicator = ({ level }: { level: number }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3].map((i) => (
        <i
          key={i}
          className={`fas fa-pepper-hot text-xs ${
            i <= level ? "text-primary" : "text-muted-foreground/30"
          }`}
        ></i>
      ))}
    </div>
  );
};

const Menu = () => {
  useSmoothScroll();
  const [activeCategory, setActiveCategory] = useState("chicken");

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
              Explore Our
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              Royal <span className="text-secondary italic">Menu</span>
            </h1>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto">
              Discover our carefully crafted dishes, each prepared with love and
              authentic recipes
            </p>
            <div className="flex items-center justify-center gap-4 mt-6">
              <span className="ornament-lg" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-16 z-40 bg-background border-b border-border py-4">
        <div className="w-full px-4 sm:px-8">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-secondary/20"
                }`}
              >
                <i className={`fas ${category.icon}`}></i>
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="section-padding bg-background">
        <div className="w-full px-4 sm:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {menuItems[activeCategory as keyof typeof menuItems].map(
                (item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="card-menu group"
                  >
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Badge */}
                      {item.badge && (
                        <div className="absolute top-4 left-4">
                          <span className="badge-bestseller">{item.badge}</span>
                        </div>
                      )}
                      {/* Veg/Non-Veg Indicator */}
                      <div className="absolute top-4 right-4">
                        <div
                          className={item.isVeg ? "badge-veg" : "badge-nonveg"}
                        ></div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {item.name}
                        </h3>
                        <span className="text-primary font-bold text-xl whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <SpiceIndicator level={item.spiceLevel} />
                        <a
                          href="https://wa.me/1234567890"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-royal py-2 px-4 text-sm"
                        >
                          <i className="fab fa-whatsapp mr-2"></i>
                          Order
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

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

export default Menu;

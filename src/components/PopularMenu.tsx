import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import chickenBiryani from "@/assets/menu-chicken-biryani.jpg";
import muttonBiryani from "@/assets/menu-mutton-biryani.jpg";
import vegBiryani from "@/assets/menu-veg-biryani.jpg";
import chickenTikka from "@/assets/menu-chicken-tikka.jpg";
import seekhKebab from "@/assets/menu-seekh-kebab.jpg";
import combo from "@/assets/menu-combo.jpg";

const menuItems = [
  {
    id: 1,
    name: "Hyderabadi Chicken Biryani",
    description: "Tender chicken pieces with aromatic basmati rice",
    price: "₹349",
    image: chickenBiryani,
    isVeg: false,
    spiceLevel: 2,
  },
  {
    id: 2,
    name: "Royal Mutton Biryani",
    description: "Succulent mutton slow-cooked to perfection",
    price: "₹449",
    image: muttonBiryani,
    isVeg: false,
    spiceLevel: 3,
  },
  {
    id: 3,
    name: "Paneer Dum Biryani",
    description: "Creamy paneer with garden fresh vegetables",
    price: "₹299",
    image: vegBiryani,
    isVeg: true,
    spiceLevel: 1,
  },
  {
    id: 4,
    name: "Chicken Tikka",
    description: "Grilled chicken marinated in yogurt and spices",
    price: "₹279",
    image: chickenTikka,
    isVeg: false,
    spiceLevel: 2,
  },
  {
    id: 5,
    name: "Seekh Kebab",
    description: "Minced lamb kebabs with aromatic herbs",
    price: "₹299",
    image: seekhKebab,
    isVeg: false,
    spiceLevel: 2,
  },
  {
    id: 6,
    name: "Royal Combo",
    description: "Biryani with raita, salan, and dessert",
    price: "₹499",
    image: combo,
    isVeg: false,
    spiceLevel: 2,
  },
];

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

const PopularMenu = () => {
  return (
    <section className="section-padding bg-background/50">
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
            Discover Our Flavors
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Popular <span className="text-secondary italic">Menu</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our most loved dishes, prepared with authentic recipes and premium
            ingredients
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <span className="ornament-lg" />
          </div>
        </motion.div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-menu group cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Veg/Non-Veg Indicator */}
                <div className="absolute top-4 right-4">
                  <div
                    className={item.isVeg ? "badge-veg" : "badge-nonveg"}
                  ></div>
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Link
                    to="/menu"
                    className="btn-royal bg-primary transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
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
                    className="text-sm text-primary font-medium hover:text-secondary transition-colors"
                  >
                    Order Now <i className="fas fa-arrow-right ml-1"></i>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Full Menu Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link to="/menu" className="btn-royal">
            View Full Menu
            <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PopularMenu;

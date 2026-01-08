import { motion } from "framer-motion";

const features = [
  {
    icon: "fa-wheat-awn",
    title: "Long Grain Basmati",
    description:
      "Premium aged basmati rice for that perfect fluffy texture and aromatic experience.",
  },
  {
    icon: "fa-mortar-pestle",
    title: "Authentic Spices",
    description:
      "Hand-ground spice blends passed down through generations of master chefs.",
  },
  {
    icon: "fa-fire-burner",
    title: "Traditional Dum Cooking",
    description:
      "Slow-cooked over charcoal using the ancient dum pukht method for rich flavors.",
  },
  {
    icon: "fa-hand-sparkles",
    title: "Hygienic Kitchen",
    description:
      "FSSAI certified kitchen with highest standards of cleanliness and food safety.",
  },
];

const WhyOurBiryani = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="w-full px-4 sm:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-body text-sm tracking-widest uppercase mb-4 block">
            Our Promise
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Our <span className="text-secondary italic">Biryani</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every grain tells a story of tradition, passion, and the pursuit of
            culinary perfection.
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <span className="ornament-lg" />
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group text-center"
            >
              {/* Icon */}
              <div className="relative mb-6 inline-block">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <i
                    className={`fas ${feature.icon} text-3xl text-primary`}
                  ></i>
                </div>
                <div className="absolute inset-0 w-20 h-20 rounded-full bg-primary/10 blur-xl mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyOurBiryani;

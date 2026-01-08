import { motion } from "framer-motion";
import restaurantInterior from "@/assets/restaurant-interior.jpg";

const CallToAction = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${restaurantInterior})` }}
      >
        <div className="absolute inset-0 bg-primary/85" />
      </div>

      <div className="w-full px-4 sm:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Ornament */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="ornament" />
            <i className="fas fa-utensils text-secondary"></i>
            <span className="ornament" />
          </div>

          {/* Title */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Experience{" "}
            <span className="text-secondary italic">Royal Flavors?</span>
          </h2>

          {/* Description */}
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Whether you prefer dining in our elegant restaurant or enjoying our
            delicacies at home, we're here to serve you the finest biryani
            experience.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-royal bg-secondary hover:bg-orange-600 text-foreground text-lg"
            >
              <i className="fab fa-whatsapp mr-2"></i>
              Order on WhatsApp
            </a>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg"
            >
              <i className="fas fa-location-dot mr-2"></i>
              Visit Our Store
            </a>
          </div>

          {/* Contact Info */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-primary-foreground/70">
            <div className="flex items-center gap-2">
              <i className="fas fa-phone text-secondary"></i>
              <span>+91 123 456 7890</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-clock text-secondary"></i>
              <span>Open 11 AM - 11 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-truck text-secondary"></i>
              <span>Free Delivery (5km)</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;

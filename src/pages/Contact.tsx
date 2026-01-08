import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReservationForm from "@/components/ReservationForm";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const contactInfo = [
  {
    icon: "fa-location-dot",
    title: "Visit Us",
    details: ["123 Royal Street, Food District", "Hyderabad, India 500001"],
  },
  {
    icon: "fa-phone",
    title: "Call Us",
    details: ["+91 123 456 7890", "+91 987 654 3210"],
  },
  {
    icon: "fa-envelope",
    title: "Email Us",
    details: ["info@royalbiryani.com", "orders@royalbiryani.com"],
  },
  {
    icon: "fa-clock",
    title: "Opening Hours",
    details: ["Mon - Sat: 11AM - 11PM", "Sunday: 10AM - 11PM"],
  },
];

const Contact = () => {
  useSmoothScroll();

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
              Get In Touch
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              Contact <span className="text-secondary italic">Us</span>
            </h1>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto">
              Have questions or want to make a reservation? We'd love to hear
              from you!
            </p>
            <div className="flex items-center justify-center gap-4 mt-6">
              <span className="ornament-lg" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-background">
        <div className="w-full px-4 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-lg p-6 text-center shadow-soft hover:shadow-card transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <i className={`fas ${info.icon} text-2xl text-primary`}></i>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  {info.title}
                </h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-muted-foreground text-sm">
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation Form Section */}
      <section className="section-padding bg-background">
        <div className="w-full px-4 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Reservation Form */}
            <ReservationForm />

            {/* Map & Quick Order */}
            <div className="space-y-8">
              {/* Map */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Find <span className="text-secondary italic">Us</span>
                </h2>
                <div className="rounded-lg overflow-hidden shadow-card h-[300px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.546675510451!2d78.47438687516855!3d17.385044483504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sCharminar!5e0!3m2!1sen!2sin!4v1703849621134!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Royal Biryani House Location"
                  ></iframe>
                </div>
                <p className="text-muted-foreground text-sm mt-4">
                  <i className="fas fa-info-circle text-primary mr-2"></i>
                  Located near Charminar, in the heart of Hyderabad's historic
                  old city
                </p>
              </motion.div>

              {/* WhatsApp Order */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-card rounded-lg p-8 shadow-card"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
                    <i className="fab fa-whatsapp text-3xl text-white"></i>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      Quick Order
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Order via WhatsApp instantly
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">
                  Skip the wait! Order directly via WhatsApp for quick service.
                  Send us your order and get confirmation within minutes.
                </p>
                <a
                  href="https://wa.me/1234567890?text=Hi! I'd like to place an order from Royal Biryani House."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-royal bg-primary w-full justify-center text-lg"
                >
                  <i className="fab fa-whatsapp mr-2"></i>
                  Order on WhatsApp
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 bg-primary">
        <div className="w-full px-4 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Follow Us on{" "}
              <span className="text-secondary italic">Social Media</span>
            </h2>
            <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
              Stay updated with our latest dishes, offers, and behind-the-scenes
              moments
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="#"
                className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover:scale-110"
              >
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a
                href="#"
                className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover:scale-110"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a
                href="#"
                className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover:scale-110"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a
                href="#"
                className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover:scale-110"
              >
                <i className="fab fa-youtube text-xl"></i>
              </a>
              <a
                href="#"
                className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover:scale-110"
              >
                <i className="fab fa-tiktok text-xl"></i>
              </a>
            </div>
          </motion.div>
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

export default Contact;

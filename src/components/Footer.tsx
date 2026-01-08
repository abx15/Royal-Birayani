import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border mt-auto">
      {/* Main Footer */}
      <div className="w-full px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shadow-gold">
                <i className="fas fa-crown text-primary text-xl"></i>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-foreground tracking-wide">
                  Royal Biryani
                </h3>
                <span className="text-xs text-muted-foreground tracking-widest uppercase">
                  House
                </span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Experience the authentic taste of Hyderabadi Biryani, crafted with
              love, tradition, and the finest ingredients.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-primary mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "Menu", "About Us", "Gallery", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      to={`/${link.toLowerCase().replace(" ", "-")}`}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-primary mb-6">
              Opening Hours
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between text-muted-foreground">
                <span>Monday - Friday</span>
                <span>11:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between text-muted-foreground">
                <span>Saturday</span>
                <span>10:00 AM - 12:00 AM</span>
              </li>
              <li className="flex justify-between text-muted-foreground">
                <span>Sunday</span>
                <span>10:00 AM - 11:00 PM</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-primary/5 rounded-lg">
              <p className="text-xs text-muted-foreground">
                <i className="fas fa-info-circle text-primary mr-2"></i>
                Home delivery available within 10km radius
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-primary mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt text-primary mt-1"></i>
                <span className="text-muted-foreground">
                  123 Royal Street, Food District
                  <br />
                  Hyderabad, India 500001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-phone text-primary"></i>
                <a
                  href="tel:+911234567890"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-envelope text-primary"></i>
                <a
                  href="mailto:info@royalbiryani.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@royalbiryani.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <i className="fab fa-whatsapp text-primary"></i>
                <a
                  href="https://wa.me/1234567890"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  WhatsApp Order
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="w-full px-4 sm:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © 2024 Royal Biryani House. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

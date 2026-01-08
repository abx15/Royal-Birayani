import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

import restaurantInterior from "@/assets/restaurant-interior.jpg";
import chefPortrait from "@/assets/chef-portrait.jpg";

const timeline = [
  {
    year: "1985",
    title: "The Beginning",
    description:
      "Started as a small family kitchen serving authentic Hyderabadi biryani to neighbors",
  },
  {
    year: "1995",
    title: "First Restaurant",
    description:
      "Opened our first restaurant in the heart of Hyderabad's old city",
  },
  {
    year: "2005",
    title: "Recognition",
    description:
      "Won the Best Biryani Restaurant award for 5 consecutive years",
  },
  {
    year: "2015",
    title: "Expansion",
    description:
      "Expanded to multiple cities while maintaining our authentic recipes",
  },
  {
    year: "2024",
    title: "Royal Legacy",
    description:
      "Continuing the tradition with the 4th generation of master chefs",
  },
];

const About = () => {
  useSmoothScroll();

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${restaurantInterior})` }}
          />
        </div>
        <div className="w-full px-4 sm:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-secondary font-body text-sm tracking-widest uppercase mb-4 block">
              Our Story
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              About{" "}
              <span className="text-secondary italic">Royal Biryani House</span>
            </h1>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
              A legacy of flavors, tradition, and culinary excellence since 1985
            </p>
            <div className="flex items-center justify-center gap-4 mt-6">
              <span className="ornament-lg" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="w-full px-4 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-secondary font-body text-sm tracking-widest uppercase mb-4 block">
                Since 1985
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                A <span className="text-secondary italic">Royal Legacy</span> of
                Taste
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Royal Biryani House was born from a passion for authentic
                  Hyderabadi cuisine. What started as a humble family kitchen in
                  1985 has now grown into one of the most beloved biryani
                  destinations in the city.
                </p>
                <p>
                  Our secret? We've stayed true to our roots. Every biryani is
                  still prepared using the same traditional dum cooking method
                  that our founder, Chef Mohammed Hussain, learned from his
                  grandmother in the royal kitchens of Hyderabad.
                </p>
                <p>
                  We source the finest basmati rice from the foothills of the
                  Himalayas, blend our spices fresh every morning, and slow-cook
                  every pot of biryani over wood-fired stoves to achieve that
                  distinctive smoky aroma.
                </p>
              </div>
              <div className="mt-8 flex gap-8">
                <div>
                  <span className="text-4xl font-display font-bold text-secondary">
                    39+
                  </span>
                  <p className="text-muted-foreground text-sm">
                    Years of Excellence
                  </p>
                </div>
                <div>
                  <span className="text-4xl font-display font-bold text-secondary">
                    1M+
                  </span>
                  <p className="text-muted-foreground text-sm">
                    Happy Customers
                  </p>
                </div>
                <div>
                  <span className="text-4xl font-display font-bold text-secondary">
                    50+
                  </span>
                  <p className="text-muted-foreground text-sm">Secret Spices</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-lg overflow-hidden shadow-elevated">
                <img
                  src={restaurantInterior}
                  alt="Royal Biryani House Interior"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground p-6 rounded-lg shadow-gold">
                <p className="font-display text-lg font-semibold">
                  Authentic Recipes
                </p>
                <p className="text-sm opacity-80">Passed down 4 generations</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="section-padding bg-background">
        <div className="w-full px-4 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="relative">
                <img
                  src={chefPortrait}
                  alt="Chef Mohammed Ali"
                  className="w-full max-w-md mx-auto rounded-lg shadow-elevated"
                />
                <div className="absolute -bottom-4 -right-4 lg:right-auto lg:-left-4 bg-primary text-primary-foreground p-4 rounded-lg">
                  <p className="font-display font-semibold">Master Chef</p>
                  <p className="text-xs opacity-80">25+ Years Experience</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <span className="text-secondary font-body text-sm tracking-widest uppercase mb-4 block">
                Meet Our Chef
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Chef <span className="text-secondary italic">Mohammed Ali</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  With over 25 years of experience in traditional Indian
                  cuisine, Chef Mohammed Ali is the heart and soul of Royal
                  Biryani House. He trained under his father and grandfather,
                  learning the intricate art of biryani making from an early
                  age.
                </p>
                <p>
                  His philosophy is simple: "Good biryani requires three things
                  – quality ingredients, time, and love. You cannot rush
                  perfection." This dedication to craft has earned him numerous
                  accolades and a devoted following of food enthusiasts.
                </p>
                <p>
                  Today, Chef Ali continues to innovate while respecting
                  tradition, creating new flavor profiles that delight our
                  customers while staying true to our authentic roots.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex items-center gap-1 text-secondary">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
                <span className="text-muted-foreground text-sm">
                  Award-Winning Chef
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-primary">
        <div className="w-full px-4 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-secondary font-body text-sm tracking-widest uppercase mb-4 block">
              Our Journey
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              The <span className="text-secondary italic">Royal Timeline</span>
            </h2>
            <div className="flex items-center justify-center gap-4 mt-6">
              <span className="ornament-lg" />
            </div>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-secondary/30 hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <span className="text-secondary font-display text-2xl font-bold">
                      {item.year}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-primary-foreground mt-2">
                      {item.title}
                    </h3>
                    <p className="text-primary-foreground/70 mt-2">
                      {item.description}
                    </p>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-secondary shadow-gold relative z-10" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-background">
        <div className="w-full px-4 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-secondary font-body text-sm tracking-widest uppercase mb-4 block">
              Our Philosophy
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
              "Food is not just sustenance, <br />
              <span className="text-secondary italic">
                it's an experience."
              </span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At Royal Biryani House, we believe that every meal should be a
              celebration. We don't just serve food – we serve memories,
              traditions, and the warmth of home. Every pot of biryani that
              leaves our kitchen carries with it decades of expertise, love, and
              the promise of an unforgettable culinary journey.
            </p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <span className="ornament-lg" />
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

export default About;

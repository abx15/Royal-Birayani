import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "The best biryani I've ever had outside of Hyderabad! The flavors are so authentic, and the meat is incredibly tender. Will definitely order again!",
    avatar: "P",
  },
  {
    id: 2,
    name: "Rahul Verma",
    location: "Delhi",
    rating: 5,
    text: "Royal Biryani House truly lives up to its name. The presentation is beautiful, and every bite is a burst of flavor. Highly recommended!",
    avatar: "R",
  },
  {
    id: 3,
    name: "Anjali Patel",
    location: "Bangalore",
    rating: 5,
    text: "I ordered the mutton biryani for a family gathering, and everyone was impressed! The portion sizes are generous, and the quality is top-notch.",
    avatar: "A",
  },
  {
    id: 4,
    name: "Mohammed Khan",
    location: "Hyderabad",
    rating: 4,
    text: "Being from Hyderabad, I'm very particular about my biryani. This one comes very close to the original. The dum cooking method really makes a difference.",
    avatar: "M",
  },
  {
    id: 5,
    name: "Sneha Reddy",
    location: "Chennai",
    rating: 5,
    text: "The veg biryani here is exceptional! Finally found a place that doesn't compromise on flavor for vegetarian options. Absolutely delicious!",
    avatar: "S",
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <i
          key={star}
          className={`fas fa-star text-sm ${
            star <= rating ? "text-secondary" : "text-muted-foreground/30"
          }`}
        ></i>
      ))}
    </div>
  );
};

const CustomerReviews = () => {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-9xl text-secondary/20 font-display">
          "
        </div>
        <div className="absolute bottom-20 right-10 text-9xl text-secondary/20 font-display rotate-180">
          "
        </div>
      </div>

      <div className="w-full px-4 sm:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-secondary font-body text-sm tracking-widest uppercase mb-4 block">
            What People Say
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Customer <span className="text-secondary italic">Reviews</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <span className="ornament-lg" />
          </div>
        </motion.div>

        {/* Reviews Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-14"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-primary-foreground/5 backdrop-blur-sm rounded-lg p-6 h-full border border-primary-foreground/10"
              >
                {/* Stars */}
                <div className="mb-4">
                  <StarRating rating={review.rating} />
                </div>

                {/* Review Text */}
                <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
                  "{review.text}"
                </p>

                {/* Reviewer */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary-foreground font-bold text-lg">
                    {review.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-foreground">
                      {review.name}
                    </h4>
                    <p className="text-primary-foreground/60 text-sm">
                      {review.location}
                    </p>
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

export default CustomerReviews;

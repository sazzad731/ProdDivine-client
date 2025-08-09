// src/components/HeroSlider.jsx
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { Link } from 'react-router';

const slides = [
  {
    id: 1,
    title: "Find Better Products",
    desc: "Explore alternative recommendations shared by real users.",
    image: "https://www.rebuyengine.com/hubfs/Amazing%20PPX-1.png",
  },
  {
    id: 2,
    title: "Ask & Be Heard",
    desc: "Post queries about the products you use and get community insights.",
    image:
      "https://plus.unsplash.com/premium_photo-1738894549244-cb88c55f7784?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Smart Shopping Starts Here",
    desc: "Join a platform that values your experience and opinion.",
    image:
      "https://images.unsplash.com/photo-1727407209320-1fa6ae60ee05?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const HeroSlider = () => {
  return (
    <section className="w-full my-20 py-10">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        loop={true}
        className="rounded-2xl shadow-xl"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="hero min-h-[60vh]"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="hero-overlay bg-black/60"></div>
              <div className="hero-content text-center text-white">
                <div className="flex flex-col items-center">
                  <h1 className="mb-5 text-5xl font-bold">{slide.title}</h1>
                  <p className="mb-10 text-lg max-w-md">{slide.desc}</p>
                  <Link
                    to="/login"
                    className="btn btn-primary text-xl text-white"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default HeroSlider


'use client'
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const About = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Section Container */}
      <section className="max-w-7xl mx-auto p-20">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-blue-900 mb-6">
          Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur
          Developing Billion-Dollar Valued Developers and Solopreneurs
        </h1>

        {/* Content */}
        <p className="text-2xl sm:tracking-wider tracking-normal text-justify leading-relaxed mb-10">
          The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing
          infrastructure, large AI foundation models, frameworks, 3D Metaverse
          experiences, and massive distribution networks. Solopreneurs trained
          in this program will win by automating work typically outsourced to
          employees, by directly connecting to customers by eliminating the
          middleman, and by developing vertical metaverses, thus paving the way
          for the first billion-dollar valued solopreneur businesses. This
          program has the objective to train this new breed of billion-dollar
          solopreneurs. These solopreneurs will adopt the ultra-lean business
          model and work independently and will not need to hire employees or
          other team members.
        </p>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Image 1 */}
          <div className="relative">
            <img
              src="/moneyman.png" // Replace with your image path
              alt="Solopreneur Success"
              className="rounded-lg shadow-lg w-full h-[300px]"
            />
          </div>

          {/* Image 2 */}
          <div className="relative">
            <img
              src="/mindmap.png" // Replace with your image path
              alt="Solopreneur Mindset"
              className="rounded-lg shadow-lg w-full h-[300px]"
            />
          </div>

          {/* Image 3 */}
          <div className="relative">
            <img
              src="/developer.png" // Replace with your image path
              alt="Class of Developers"
              className="rounded-lg shadow-lg w-full h-[300px]"
            />
          </div>
        </div>

         {/* Image Slider */}
         <div className="my-8 bg-white">
          <Swiper 
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/slider1-1.png"
                  alt="Slide 1 - Image 1"
                  className="rounded-lg w-full h-[600px] object-cover"
                />
                <img
                  src="/slider1-2.png"
                  alt="Slide 1 - Image 2"
                  className="rounded-lg w-full h-[600px] object-cover"
                />
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/slider2-1.png"
                  alt="Slide 2 - Image 1"
                  className="rounded-lg w-full h-[600px] object-cover"
                />
                <img
                  src="/slider2-2.png"
                  alt="Slide 2 - Image 2"
                  className="rounded-lg w-full h-[600px] object-cover"
                />
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/slider3-1.png"
                  alt="Slide 3 - Image 1"
                  className="rounded-lg w-full h-[600px] object-cover"
                />
                <img
                  src="/slider3-2.png"
                  alt="Slide 3 - Image 2"
                  className="rounded-lg w-full h-[600px] object-cover"
                />
              </div>
            </SwiperSlide>

            {/* Slide 4 */}
            <SwiperSlide>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/slider4-1.png"
                  alt="Slide 4 - Image 1"
                  className="rounded-lg w-full h-[600px] object-cover"
                />
                <img
                  src="/slider4-2.png"
                  alt="Slide 4 - Image 2"
                  className="rounded-lg w-full h-[600px] object-cover"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      
      </section>
    </div>
  );
};

export default About;

import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ScrollAnimation, AnimatedText } from './ScrollAnimations';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import your local PNG image
import firstImage from '../assets/first.png';

// Type definitions
interface SlideContent {
  id: number;
  title: string;
  description: string;
  badgeText: string;
  bgImage: string;
  mainImage: string;
}

const IntelliTechSection: React.FC = () => {

  const slideContent: SlideContent[] = [
    {
      id: 1,
      title: "Get started with CXO MAP Tool",
      description:
        "A web/native platform that automates security audits with AI-driven precision—boosting efficiency by up to 90% and supporting real-time oversight through a dynamic CISO dashboard.",
      badgeText: "Get started",
      bgImage: firstImage,
      mainImage: firstImage,
    },
    {
      id: 2,
      title: "Get started with CXO MAP Tool",
      description:
        "A web/native platform that automates security audits with AI-driven precision—boosting efficiency by up to 90% and supporting real-time oversight through a dynamic CISO dashboard.",
      badgeText: "Get started",
      bgImage: firstImage,
      mainImage: firstImage,
    },
  ];

  return (
    <div className="intellitech-section">
      {/* Our Product Section with Title and Subtitle */}
      <section id="our-product" className="section">
        <div className="w-layout-blockcontainer container-default w-container">
          <ScrollAnimation animation="fadeInUp" delay={0.2}>
            <div className="text-center mb-8">
              <ScrollAnimation animation="fadeInUp" delay={0.4}>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Our <span className="text-primary">Products</span>
                </h2>
              </ScrollAnimation>
              <ScrollAnimation animation="fadeInUp" delay={0.6}>
                <AnimatedText 
                  className="text-lg md:text-xl text-white-600 max-w-3xl mx-auto leading-relaxed"
                  delay={0.8}
                  stagger={0.1}
                >
                  Discover innovative solutions that empower your business with cutting-edge technology and intelligent automation designed for tomorrow's challenges.
                </AnimatedText>
              </ScrollAnimation>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Swiper Carousel Section */}
      <section id="watch-video" className="section">
        <div className="w-layout-blockcontainer container-default w-container">
          <ScrollAnimation animation="scaleIn" delay={0.3}>
            <div className="position-relative z-index-1">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={0}
              slidesPerView={1}
              autoHeight={true}
              autoplay={{
                delay: 9000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              loop={true}
              speed={1000}
              className="intellitech-swiper"
            >
              {slideContent.map((slide: SlideContent) => (
                <SwiperSlide key={slide.id}>
                  <div className="image-wrapper cta-bg-image z-0">
                    <img
                      src={slide.bgImage}
                      loading="eager"
                      sizes="(max-width: 991px) 80vw, 100vw"
                      alt=""
                      className="image cover-image"
                    />
                  </div>
                  <div className="card-image-wrapper card-large">
                                         <div className="card cta-wrapper v1">
                      <div className="w-layout-grid grid-2-columns cta v1">
                        <div className="z-index-1">
                          <div className="center-content---tablet">
                            <div className="badge-container center-mbp">
                              <div className="badge-wrapper">
                                                                 <div className="badge mid">
                                  <div className="item-icon">
                                    <img
                                      src="https://cdn.prod.website-files.com/6684839a47fd287b7d32dafd/6684839a47fd287b7d32dddc_stars-icon-intellitech-x-webflow-template.svg"
                                      loading="eager"
                                      alt="Stars Icon - IntelliTech X Webflow Template"
                                    />
                                  </div>
                                  <div>{slide.badgeText}</div>
                                </div>
                              </div>
                            </div>
                            <div className="mg-top-small">
                              <h2 className="display-9 text-3xl sm:text-4xl md:text-5xl leading-tight">{slide.title}</h2>
                            </div>
                            <div className="mg-top-small mg-bottom-large mg-bottom-default-tablet">
                              <p className="text-base sm:text-lg leading-relaxed">{slide.description}</p>
                            </div>
                            <div className="buttons-row left">
                                                             <a
                                 href="/company-pages/contact-v1"
                                 className="primary-button w-inline-block"
                               >
                                <div>Get started</div>
                              </a>
                                                             <a
                                 href="/company-pages/pricing"
                                 className="link mid w-inline-block"
                               >
                                <div>View pricing</div>
                                <div className="link-icon-right">
                                                                     <div className="icon-font-rounded">
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M5 12H19M19 12L12 5M19 12L12 19"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="image-wrapper cta-v1-main-image">
                          <img
                            src={slide.mainImage}
                            loading="eager"
                            sizes="(max-width: 479px) 100vw, (max-width: 767px) 80vw, (max-width: 991px) 55vw, (max-width: 1439px) 38vw, 448px"
                            alt={`${slide.title} - IntelliTech X Webflow Template`}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="card-border-container">
                      <div className="card-corner---top-left card-large"></div>
                      <div className="card-corner---top-right card-large"></div>
                      <div className="card-corner---bottom-left card-large"></div>
                      <div className="card-corner---bottom-right card-large"></div>
                      <div className="card-border---top"></div>
                      <div className="card-border---left"></div>
                      <div className="card-border---right"></div>
                      <div className="card-border---bottom"></div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Custom styles with reduced gap and fixed z-index */}
      <style>{`
        /* Component container with controlled z-index */
        .intellitech-section {
          position: relative;
          z-index: 1;
        }

        .intellitech-swiper {
          width: 100%;
          height: auto;
        }
        .intellitech-swiper .swiper-pagination {
          bottom: 20px;
        }
        .intellitech-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
        }
        .intellitech-swiper .swiper-pagination-bullet-active {
          background: #fff;
        }
        
        /* Custom Arrow Design */
        .intellitech-swiper .swiper-button-next,
        .intellitech-swiper .swiper-button-prev {
          color: #fff;
          background: rgba(0, 0, 0, 0.3);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          margin-top: -22px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
          border: 2px solid rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        
        .intellitech-swiper .swiper-button-next:hover,
        .intellitech-swiper .swiper-button-prev:hover {
          background: rgba(0, 0, 0, 0.5);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
          transform: scale(1.05);
        }
        
        .intellitech-swiper .swiper-button-next:after,
        .intellitech-swiper .swiper-button-prev:after {
          font-size: 18px;
          font-weight: bold;
          color: #fff;
        }
        
        /* Custom Link Icon Arrow Styling */
        .link-icon-right {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 8px;
        }
        
        .icon-font-rounded {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        
        .link.mid:hover .icon-font-rounded {
          background: rgba(255, 255, 255, 0.2);
          transform: translateX(4px);
        }
        
        .icon-font-rounded svg {
          width: 16px;
          height: 16px;
          color: currentColor;
        }

        /* Title and Subtitle Styling */
        .text-primary {
          color: #dc2626; /* Red color for primary text */
        }

        

        /* Reduced gap between sections */
        #our-product {
          padding: 2rem 0 1rem 0;
        }

        #watch-video {
          padding-top: 0;
        }

        /* Additional responsive styling */
        @media (max-width: 768px) {
          /* Stack grid into one column on small screens */
          .grid-2-columns.cta.v1 {
            display: grid;
            grid-template-columns: 1fr;
            row-gap: 12px;
          }
          .center-content---tablet { text-align: center; }
          .buttons-row.left { justify-content: center; }

          .intellitech-swiper .swiper-button-next,
          .intellitech-swiper .swiper-button-prev {
            display: none;
          }
          .intellitech-swiper {
            height: auto;
            padding-bottom: 16px;
          }
          .image-wrapper.cta-v1-main-image img { max-width: 60%; height: auto; margin: 0 auto; }
          
          /* Reduce gap on mobile too */
          #our-product {
            padding: 1.5rem 0 0.5rem 0;
          }
        }
        
        .intellitech-swiper .swiper-slide {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          height: auto;
        }
        .card-image-wrapper.card-large,
        .image-wrapper.cta-bg-image.z-0 {
          height: auto;
        }
        .image.cover-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .section,
        .container-default {
          margin-top: 0;
          margin-bottom: 0;
        }
        .image-wrapper.cta-v1-main-image {
          display: block;
          align-items: center;
          justify-content: flex-end;
          overflow: hidden;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default IntelliTechSection;

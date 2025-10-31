import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import final from '../assets/final.svg';
import { UserRound, Headphones, Lock, Shirt, ShoppingCart, Gem, Baby } from 'lucide-react';
// Logos for scrolling marquee
import ibmColor from '../assets/IBM_Color.png';
import vmwareColor from '../assets/VMware_color.png';
import splunkLogo from '../assets/Splunk.png';
import kasperskyLogo from '../assets/kaspersky.png';
import oceColor from '../assets/OCE-color.jpeg';
import orionColor from '../assets/orion-color.jpeg';
import flippColor from '../assets/flipp-color.png';
import zartekLogo from '../assets/zartek.jpeg';
import uplLogo from '../assets/uplcolor.jpg';
import FAQSection from '../components/FAQSection';

const TestPage: React.FC = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const [featuresVisible, setFeaturesVisible] = useState(false);
  const [promoVisible, setPromoVisible] = useState(false);
  const [testimonialVisible, setTestimonialVisible] = useState(false);
  const [newsletterVisible, setNewsletterVisible] = useState(false);
  
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const promoRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);
  const newsletterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === heroRef.current) setHeroVisible(true);
            if (entry.target === featuresRef.current) setFeaturesVisible(true);
            if (entry.target === promoRef.current) setPromoVisible(true);
            if (entry.target === testimonialRef.current) setTestimonialVisible(true);
            if (entry.target === newsletterRef.current) setNewsletterVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (featuresRef.current) observer.observe(featuresRef.current);
    if (promoRef.current) observer.observe(promoRef.current);
    if (testimonialRef.current) observer.observe(testimonialRef.current);
    if (newsletterRef.current) observer.observe(newsletterRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section ref={heroRef} className="relative overflow-hidden">
          {/* background gradient blobs with floating animation */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute -top-32 -right-16 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-indigo-700/60 to-purple-700/50 blur-3xl animate-[float_6s_ease-in-out_infinite]" />
            <div className="absolute -bottom-24 -left-24 h-[360px] w-[360px] rounded-full bg-gradient-to-tr from-purple-700/40 to-indigo-700/40 blur-3xl animate-[float_8s_ease-in-out_infinite_reverse]" />
          </div>

          <div className="container mx-auto px-6 py-20 md:py-28">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left copy */}
              <div className={`md:pl-4 lg:pl-8 xl:pl-12 transform transition-all duration-1000 ${heroVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight text-white">
                  <span className="text-red-700 animate-pulse">EASIEST</span> PAYMENT
                  <br /> METHOD EVER
                </h1>
                <p className="mt-6 text-gray-300 max-w-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>

                <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-4 md:gap-5">
                  <button className="px-8 py-4 rounded-xl bg-red-700 text-white font-semibold shadow-lg shadow-indigo-900/30 hover:bg-red-600 hover:scale-105 hover:shadow-xl transition-all duration-300 transform">Get Started</button>
                  <button className="px-8 py-4 rounded-xl bg-white/10 text-white font-semibold border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 transform">Contact Us</button>
                </div>
              </div>

              {/* Right visuals */}
              <div className={`relative flex justify-center md:justify-end items-center transform transition-all duration-1000 delay-300 ${heroVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                {/* Device image */}
                <img
                  src={final}
                  alt="device"
                  className="relative z-10 block w-full max-w-[480px] md:max-w-[440px] lg:max-w-[600px] mx-auto md:mx-0 object-contain drop-shadow-[0_40px_120px_rgba(0,0,0,0.6)] hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Scrolling Logos (black theme) */}
        <section className="bg-black">
          <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-center text-center">
            <h2 className="my-6 text-2xl font-bold text-white lg:text-4xl">
              Trusted by leading organizations
            </h2>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto">
              Partnering with industry leaders to deliver cutting-edge cybersecurity solutions
            </p>
          </div>
          <div className="pt-8 md:pt-16 lg:pt-16">
            <div className="relative mx-auto flex items-center justify-center lg:max-w-6xl overflow-hidden">
              <div
                className="flex items-center space-x-12 md:space-x-16 lg:space-x-20 animate-[logos-scroll_30s_linear_infinite]"
              >
                {[
                  ibmColor,
                  vmwareColor,
                  splunkLogo,
                  kasperskyLogo,
                  oceColor,
                  orionColor,
                  flippColor,
                  zartekLogo,
                  uplLogo,
                  // duplicate for seamless loop
                  ibmColor,
                  vmwareColor,
                  splunkLogo,
                  kasperskyLogo,
                  oceColor,
                  orionColor,
                  flippColor,
                  zartekLogo,
                  uplLogo,
                ].map((src, index) => (
                  <div key={index} className="flex-shrink-0 flex items-center justify-center p-4">
                    <img
                      src={src}
                      className="h-10 sm:h-12 w-auto grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent pointer-events-none z-10"></div>
              <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>
            </div>
          </div>

          <style>{`
            @keyframes logos-scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            @keyframes float {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(-20px) rotate(2deg); }
            }
            @keyframes bounce {
              0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
              40% { transform: translateY(-10px); }
              60% { transform: translateY(-5px); }
            }
          `}</style>
        </section>
      </main>
      
      {/* Feature Section: Manage Everything in Your Hand */}
      <section ref={featuresRef} className="relative bg-black py-20 md:py-28 overflow-hidden">
        {/* Gradient circle background with floating animation */}
        <div className="absolute -left-24 top-10 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-red-700/40 to-purple-700/30 blur-3xl animate-[float_10s_ease-in-out_infinite]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left visuals */}
              <div className={`relative mx-auto md:mx-auto w-full max-w-sm sm:max-w-md md:translate-x-6 lg:translate-x-10 transform transition-all duration-1000 ${featuresVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {/* back card */}
              <img src={final} alt="card" className="absolute -left-20 top-16 w-[70%] rotate-[-18deg] opacity-80 drop-shadow-[0_30px_100px_rgba(0,0,0,0.6)] hover:rotate-[-15deg] transition-transform duration-500" />
              {/* main phone */}
              <img src={final} alt="phone" className="relative z-10 w-full drop-shadow-[0_50px_140px_rgba(0,0,0,0.8)] hover:scale-105 transition-transform duration-500" />
            </div>

            {/* Right copy */}
            <div className={`transform transition-all duration-1000 delay-200 ${featuresVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-white text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
                Manage Everything in Your Hand
              </h2>
              <p className="text-gray-300 mb-10 max-w-xl">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>

              <div className="space-y-8">
                {/* Feature 1 */}
                <div className="flex items-start gap-5 group hover:scale-105 transition-transform duration-300">
                  <div className="shrink-0 h-16 w-16 rounded-2xl bg-gradient-to-br from-red-600 to-red-500 p-4 shadow-lg shadow-red-900/30 group-hover:shadow-red-900/50 transition-all duration-300">
                    <UserRound className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">User Friendly</h3>
                    <p className="text-gray-400 text-sm md:text-base mt-1 max-w-md">
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                      doloremque laudantium.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start gap-5 group hover:scale-105 transition-transform duration-300">
                  <div className="shrink-0 h-16 w-16 rounded-2xl bg-gradient-to-br from-red-600 to-red-500 p-4 shadow-lg shadow-red-900/30 group-hover:shadow-red-900/50 transition-all duration-300">
                    <Headphones className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Best Support</h3>
                    <p className="text-gray-400 text-sm md:text-base mt-1 max-w-md">
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                      doloremque laudantium.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-start gap-5 group hover:scale-105 transition-transform duration-300">
                  <div className="shrink-0 h-16 w-16 rounded-2xl bg-gradient-to-br from-red-600 to-red-500 p-4 shadow-lg shadow-red-900/30 group-hover:shadow-red-900/50 transition-all duration-300">
                    <Lock className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Secure</h3>
                    <p className="text-gray-400 text-sm md:text-base mt-1 max-w-md">
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                      doloremque laudantium.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Promos Section */}
      <section ref={promoRef} className="relative bg-black py-24 overflow-hidden">
        <div className="container mx-auto px-6 md:px-10 lg:px-24 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left copy */}
          <div className={`transform transition-all duration-1000 ${promoVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <h2 className="text-white text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
              Enjoy Various Merchant's
              <br /> Promos
            </h2>
            <p className="text-white/80 max-w-2xl mb-10">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <button className="px-8 py-4 rounded-full bg-red-600 hover:bg-red-500 hover:scale-105 text-white font-semibold transition-all duration-300 transform shadow-lg hover:shadow-xl">
              Get Started
            </button>
          </div>

          {/* Right visual card with icons */}
          <div className={`relative transform transition-all duration-1000 delay-300 ${promoVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            {/* slanted image container */}
            <div className="relative bg-white/5 rounded-2xl border border-white/10 overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.6)] rotate-[-8deg] max-w-[520px] mx-auto hover:rotate-[-5deg] transition-transform duration-500">
              <img src={final} alt="promo" className="w-full h-auto opacity-95 hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* floating badges with animations */}
            <div className="hidden md:block">
              <div className="absolute -top-10 -right-6 h-28 w-28 rounded-full bg-gradient-to-br from-red-600 to-red-500 shadow-xl grid place-items-center animate-[bounce_2s_infinite] hover:scale-110 transition-transform duration-300">
                <Shirt className="h-10 w-10 text-white" />
              </div>
              <div className="absolute top-24 -right-4 h-28 w-28 rounded-full bg-gradient-to-br from-red-600 to-red-500 shadow-xl grid place-items-center animate-[bounce_2s_infinite_0.5s] hover:scale-110 transition-transform duration-300">
                <ShoppingCart className="h-10 w-10 text-white" />
              </div>
              <div className="absolute -bottom-6 right-12 h-24 w-24 rounded-full bg-gradient-to-br from-red-600 to-red-500 shadow-xl grid place-items-center animate-[bounce_2s_infinite_1s] hover:scale-110 transition-transform duration-300">
                <Baby className="h-8 w-8 text-white" />
              </div>
              <div className="absolute bottom-24 right-44 h-24 w-24 rounded-full bg-gradient-to-br from-red-600 to-red-500 shadow-xl grid place-items-center animate-[bounce_2s_infinite_1.5s] hover:scale-110 transition-transform duration-300">
                <Gem className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section ref={testimonialRef} className="relative bg-black py-6 md:py-10">
        <div className="container mx-auto px-6">
          {/* quote badge */}
          <div className={`mx-auto h-28 w-28 rounded-full bg-white/5 border border-white/10 grid place-items-center mb-10 transform transition-all duration-1000 ${testimonialVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
            <span className="text-5xl leading-none text-white/70">""</span>
          </div>

          <p className={`text-center text-white text-xl md:text-2xl lg:text-3xl max-w-5xl mx-auto leading-relaxed transform transition-all duration-1000 delay-200 ${testimonialVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo.
          </p>

          <div className={`mt-8 md:mt-10 flex items-center justify-center gap-3 md:gap-4 transform transition-all duration-1000 delay-400 ${testimonialVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* avatar placeholder */}
            <div className="h-20 w-20 rounded-full overflow-hidden ring-2 ring-white/20 hover:ring-white/40 transition-all duration-300 hover:scale-105">
              <div className="h-full w-full bg-white/10 grid place-items-center">
                <UserRound className="h-10 w-10 text-white/80" />
              </div>
            </div>
            <div className="text-left">
              <div className="text-white font-medium">Customer</div>
              <div className="text-white/50 text-sm">Verified User</div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <FAQSection />

      {/* Newsletter CTA */}
      <section ref={newsletterRef} className="relative py-12 md:py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className={`relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-red-700 via-red-600 to-red-400 p-6 md:p-10 transform transition-all duration-1000 ${newsletterVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
            {/* subtle dots pattern */}
            <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:24px_24px]" />

            <div className="relative grid items-center gap-6 md:gap-8 md:grid-cols-2">
              <h3 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight transform transition-all duration-1000 delay-200 ${newsletterVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                Keep Updated About Our Product
              </h3>

              <form
                onSubmit={(e) => e.preventDefault()}
                className={`w-full rounded-2xl sm:rounded-full bg-white/95 p-2 sm:pl-6 sm:pr-2 sm:py-2 shadow-lg ring-1 ring-black/5 flex flex-col sm:flex-row gap-2 sm:gap-0 transform transition-all duration-1000 delay-400 hover:scale-105 transition-transform duration-300 ${newsletterVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
              >
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  className="w-full bg-transparent text-black placeholder-black/50 outline-none py-3 px-4 focus:ring-2 focus:ring-white/20 rounded-lg transition-all duration-300"
                />
                <button
                  type="submit"
                  className="sm:ml-2 whitespace-nowrap rounded-xl sm:rounded-full bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-gray-900 hover:scale-105 transition-all duration-300 transform"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default TestPage;



import { Button } from "@/components/ui/button";
import { Mail, Phone, Instagram, ArrowRight, MapPin } from "lucide-react";
import { useState } from "react";
import CircularGallery from "@/components/ui/CircularGallery";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/**
 * Design Philosophy: Modern Elegance with Depth
 * - Alternating dark/light sections for visual rhythm
 * - Navy (#0F2B4D), Gold (#D4A574), White palette
 * - Layered depth with subtle shadows and hover effects
 * - Smooth micro-interactions throughout
 */

export default function Home() {
  const [hoveredPortfolio, setHoveredPortfolio] = useState<number | null>(null);

  const services = [
    {
      title: "Portrait Photography",
      description: "Professional headshots, family portraits, and personal branding sessions with studio lighting and outdoor options.",
    },
    {
      title: "Event Photography",
      description: "Capture your special moments with artistic eye and professional expertise for weddings, celebrations, and corporate events.",
    },
    {
      title: "Commercial Photography",
      description: "Product photography, architectural shoots, and commercial content creation for businesses and brands.",
    },
    {
      title: "Photo Editing",
      description: "Professional color grading, retouching, and post-processing to enhance your photographs.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-navy-900">
  
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 bg-linear-to-br from-white via-white to-gray-50 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl">

          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Left: Text */}

            {/*}
            <div className="inline-block">
              <span className="text-gold font-semibold text-sm tracking-widest">PROFESSIONAL PHOTOGRAPHY</span>
            </div> */}

            <div className="gap-8 flex flex-col">
              <h1 className="text-3xl md:text-5xl font-bold text-navy-900 leading-tight">
                Capturing Moments,
                <span className="text-gold"> Creating Memories</span>
              </h1>
              <p className="text-sm md:text-lg text-gray-600 leading-relaxed max-w-lg">
                Experienced photographer specializing in portraits, events, and commercial photography. Every shot tells a story with artistic excellence and professional precision.
              </p>
              <div className="flex gap-4 pt-4">
                <a href="#contact">
                  <Button className="bg-primary hover:bg-navy-800 text-white px-8 py-6 text-sm">
                    Book a Session
                  </Button>
                </a>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="relative h-96 md:h-full min-h-96 rounded-lg overflow-hidden shadow-2xl">
              <img
                src= "/DisplayPhotos/1.jpeg"  //"https://d2xsxph8kpxj0f.cloudfront.net/310519663404165549/g2PERz93dS2dzhGYUi7bTo/hero-bg-WWz3JyB88vZPmtXsZT3cLU.webp"
                alt="Hero Background"
                className="w-full h-full object-right object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy-900/20 to-transparent"></div>
            </div>

          </div>
        </div>

        {/* Decorative gold line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-gold to-transparent"></div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-primary overflow-hidden">

        <ScrollReveal className="container mx-auto px-4 text-center mb-16">
          <span className="text-gold font-semibold text-sm tracking-widest">PORTFOLIO</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">Featured Work</h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-sm md:text-lg">
            Explore a selection of my finest photography work across different genres and styles.
          </p>
        </ScrollReveal>

        <ScrollReveal className="h-80 w-full relative">
          <CircularGallery bend={0.1} textColor="#ffffff" borderRadius={0.05} scrollEase={0.1} scrollSpeed={2}/>
        </ScrollReveal>

      </section> 


      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">

        <div className="container mx-auto max-w-6xl">

          <ScrollReveal className="text-center mb-16">
            <span className="text-gold font-semibold text-sm tracking-widest">SERVICES</span>
            <h2 className="text-3xl md:text-5xl font-bold text-navy-900 mt-4">What We Offer</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm md:text-lg">
              Comprehensive photography services tailored to your needs with professional expertise and artistic vision.
            </p>
          </ScrollReveal>

          <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-lg bg-white border border-gray-500 hover:border-gold hover:shadow-lg transition-all duration-300 group shadow-lg"
              >
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold group-hover:text-white transition-all duration-300">
                  <span className="text-gold group-hover:text-primary text-xl font-bold transition-colors duration-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-primary">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <ScrollReveal className="space-y-6 text-white">
              <span className="text-gold font-semibold text-sm tracking-widest">ABOUT ME</span>
              <h2 className="text-3xl md:text-5xl font-bold">Nabil Karawni</h2>
              <p className="text-gray-300 leading-relaxed text-sm md:text-lg">
                With over 3 decades of experience in professional photography, I've had the privilege of capturing moments for individuals, families, and businesses across the region. My passion lies in creating images that transcend the ordinary, photographs that tell stories, evoke emotions, and preserve memories.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm md:text-lg">
                Every project is approached with meticulous attention to detail, from composition and lighting to post-processing. I believe that great photography is the intersection of technical excellence and artistic vision.
              </p>
              <div className="flex gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-gray-300 text-sm">Professional Studio Equipment</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-gray-300 text-sm">Expert Post-Processing</span>
                </div>
              </div>
            </ScrollReveal>

            <div className="relative">
              <div className="bg-linear-to-br from-gold/20 to-transparent p-8 rounded-lg">

                <ScrollReveal className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-gold/30">
                    <div className="text-4xl font-bold text-gold mb-2">30+</div>
                    <p className="text-gray-300">Years of Experience</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-gold/30">
                    <div className="text-4xl font-bold text-gold mb-2">5000+</div>
                    <p className="text-gray-300">Satisfied Clients</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-gold/30">
                    <div className="text-4xl font-bold text-gold mb-2">1000+</div>
                    <p className="text-gray-300">Projects Completed</p>
                  </div>
                </ScrollReveal>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="pt-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">

          <ScrollReveal className="text-center mb-12">
            <span className="text-gold font-semibold text-sm tracking-widest">GET IN TOUCH</span>
            <h2 className="text-3xl md:text-5xl font-bold text-navy-900 mt-4">Let's Create Something Beautiful</h2>
            <p className="text-gray-600 mt-4 text-sm md:text-lg">
              Ready to book your session or discuss your photography needs? We'd love to hear from you.
            </p>
          </ScrollReveal>

          <ScrollReveal className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

            <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gold/5 transition-colors duration-300 shadow-lg">
              <a href="https://wa.me/03888703" target="_blank" rel="noopener noreferrer">
                <Phone className="w-8 h-8 text-gold mx-auto mb-4" />
                <h3 className="font-bold text-navy-900 mb-2">Phone</h3>
                <p className="text-gray-600">+961 03 888 703<br />Click to Contact on WhatsApp</p>
              </a>
            </div>

            <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gold/5 transition-colors duration-300 shadow-lg">
              <a href="https://www.google.com/maps/place/RJ52%2BCH3,+Aley" target="_blank" rel="noopener noreferrer">
                <MapPin className="w-8 h-8 text-gold mx-auto mb-4" />
                <h3 className="font-bold text-navy-900 mb-2">Location</h3>
                <p className="text-gray-600">Aley, Piscine Street. <br />Click to View Location</p>
              </a>
            </div>

            <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gold/5 transition-colors duration-300 shadow-lg">
              <a href="https://www.instagram.com/nabilkarawni" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-8 h-8 text-gold mx-auto mb-4" />
                <h3 className="font-bold text-navy-900 mb-2">Instagram</h3>
                <p className="text-gray-600">@nabilkarawni <br />Click to View Instagram</p>
              </a>
            </div>

          </ScrollReveal>

          {/* Contact Form 
          <div className="bg-navy-900 rounded-lg p-8 md:p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gold/30 text-white placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gold/30 text-white placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gold/30 text-white placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gold/30 text-white placeholder-gray-400 focus:outline-none focus:border-gold transition-colors resize-none"
              ></textarea>
              <Button className="w-full bg-gold hover:bg-gold/90 text-navy-900 py-3 text-base font-semibold">
                Send Message
              </Button>
            </form>
          </div> */}
        </div> 
      </section>

      {/* Footer */}
      <footer className="bg-primary border-t border-gold/20 py-8 px-4">
        <div className="w-full text-center">
          <p className="text-sm md:text-lg text-gray-400">&copy; {new Date().getFullYear()} Nabil Karawni Photography. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

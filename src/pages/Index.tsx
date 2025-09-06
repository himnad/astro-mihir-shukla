import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { seoConfig } from "@/config/seo";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>{seoConfig.title}</title>
        <meta name="description" content={seoConfig.description} />
        <meta name="keywords" content={seoConfig.keywords} />
        <meta name="author" content={seoConfig.author} />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={seoConfig.canonicalUrl} />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={seoConfig.title} />
        <meta property="og:description" content={seoConfig.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoConfig.canonicalUrl} />
        <meta property="og:image" content={seoConfig.ogImage} />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Astro Mihir Shukla" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoConfig.title} />
        <meta name="twitter:description" content={seoConfig.description} />
        <meta name="twitter:image" content={seoConfig.ogImage} />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Astro Mihir Shukla",
            "description": seoConfig.description,
            "url": seoConfig.canonicalUrl,
            "telephone": seoConfig.phone,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Prayagraj",
              "addressRegion": "Uttar Pradesh",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "25.4358",
              "longitude": "81.8463"
            },
            "openingHours": "Mo-Su 09:00-21:00",
            "serviceArea": {
              "@type": "Place",
              "name": "Prayagraj, Uttar Pradesh, India"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Astrology Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Horoscope Reading"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Palmistry"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Spiritual Guidance"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        <HeroSection />
        <ContactSection />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;

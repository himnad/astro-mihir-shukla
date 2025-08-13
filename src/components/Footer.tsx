import { Heart, Star, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-2xl font-bold mb-4">
              Mihir Shukla
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Dedicated astrologer and spiritual guide from Prayagraj, bringing ancient wisdom 
              to modern life. With 8+ years of experience and 2000+ successful consultations, 
              I help people find clarity, prosperity, and peace of mind.
            </p>
            <div className="flex items-center gap-2 text-accent">
              <Star className="h-5 w-5" />
              <span className="font-semibold">Trusted by thousands across India</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Horoscope Creation</li>
              <li>Marriage Muhurat</li>
              <li>Business Muhurat</li>
              <li>Palmistry & Face Reading</li>
              <li>Kundali Matching</li>
              <li>Gemstone Consultation</li>
              <li>Spiritual Guidance</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent" />
                <span>+91 9519822580</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent" />
                <span>mihir.astrology@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Prayagraj, UP, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-primary-foreground/60 text-sm">
              © {currentYear} Mihir Shukla. All rights reserved.
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/60 text-sm">
              Made with <Heart className="h-4 w-4 text-accent" /> for spiritual seekers
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-primary-foreground/10 rounded-lg">
          <p className="text-xs text-primary-foreground/60 text-center leading-relaxed">
            <strong>Disclaimer:</strong> Astrological consultations are based on traditional 
            Vedic astrology principles and are intended for guidance purposes only. 
            Results may vary based on individual circumstances and cosmic influences.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
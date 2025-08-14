import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Instagram } from "lucide-react";
import emailjs from '@emailjs/browser';
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const {
    toast
  } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        to_name: "Mihir Shukla"
      };

      await emailjs.send(
        'service_cf319dh',
        'template_bhxxcmp',
        templateParams,
        'qZxzoeGkdE8dhqX3r'
      );

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. Mihir will get back to you within 24 hours."
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Message Failed to Send",
        description: "There was an error sending your message. Please try contacting directly via WhatsApp or email.",
        variant: "destructive"
      });
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <section id="contact" className="py-20 serenity-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to begin your journey toward clarity and wisdom? 
            Reach out for a personalized consultation or spiritual guidance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-accent/30 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-primary">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-divine rounded-lg">
                    <Phone className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary">Phone / WhatsApp</div>
                    <div className="text-foreground/70">+91 9519822580</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-wisdom rounded-lg">
                    <Mail className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary">Email</div>
                    <div className="text-foreground/70">agnimihir202@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent rounded-lg">
                    <MapPin className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary">Location</div>
                    <div className="text-foreground/70">Prayagraj, Uttar Pradesh, India</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-divine rounded-lg">
                    <Instagram className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary">Instagram</div>
                    <div className="text-foreground/70">@astromihir_prayagraj</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-secondary rounded-lg">
                    <Clock className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary">Consultation Hours</div>
                    <div className="text-foreground/70">9:00 AM - 8:00 PM (IST)</div>
                    <div className="text-sm text-muted-foreground">Saturday & Sunday</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-accent/30 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-primary">
                  Quick Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="divine" size="lg" className="w-full justify-start" onClick={() => window.open('https://wa.me/919519822580', '_blank')}>
                  <MessageCircle className="h-5 w-5 mr-3" />
                  Message on WhatsApp
                </Button>
                
                <Button variant="wisdom" size="lg" className="w-full justify-start" onClick={() => window.open('tel:+919519822580', '_blank')}>
                  <Phone className="h-5 w-5 mr-3" />
                  Call Now
                </Button>
                
                <Button variant="sacred" size="lg" className="w-full justify-start" onClick={() => window.open('mailto:agnimihir202@gmail.com', '_blank')}>
                  <Mail className="h-5 w-5 mr-3" />
                  Send Email
                </Button>
                
                <Button variant="outline" size="lg" className="w-full justify-start" onClick={() => window.open('https://instagram.com/astromihir_prayagraj', '_blank')}>
                  <Instagram className="h-5 w-5 mr-3" />
                  Follow on Instagram
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-accent/30 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-primary">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="e.g., Horoscope Reading, Marriage Muhurat, etc." required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} placeholder="Please describe your requirements or questions..." required />
                </div>

                <Button type="submit" variant="divine" size="lg" className="w-full">
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>

              <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                <p className="text-sm text-foreground/70 text-center">
                  <strong>Note:</strong> All consultations are completely confidential. 
                  I'll respond to your inquiry within 24 hours.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default ContactSection;
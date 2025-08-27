import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Instagram } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const ContactSection = () => {
  const { t } = useTranslation();
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
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message with form data
    const whatsappMessage = `
*New Contact Form Submission*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Subject:* ${formData.subject}

*Message:*
${formData.message}

_Sent from your website contact form_
    `.trim();
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/919519822580?text=${encodedMessage}`;
    
    // Open WhatsApp with the message
    window.open(whatsappURL, '_blank');
    
    toast({
      title: "Redirecting to WhatsApp!",
      description: "Your message has been prepared and WhatsApp is opening. Send the message to complete your inquiry."
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
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
            {t('contact.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-accent/30 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-primary">
                  {t('footer.contact.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-divine rounded-lg">
                    <Phone className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary">{t('whatsapp')}</div>
                    <div className="text-foreground/70">{t('contact.phone')}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-wisdom rounded-lg">
                    <Mail className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary">{t('email')}</div>
                    <div className="text-foreground/70">{t('contact.email')}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent rounded-lg">
                    <MapPin className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary">Location</div>
                    <div className="text-foreground/70">{t('contact.location')}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-divine rounded-lg">
                    <Instagram className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary">{t('instagram')}</div>
                    <div className="text-foreground/70">{t('contact.instagram')}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-secondary rounded-lg">
                    <Clock className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary">Hours</div>
                    <div className="text-foreground/70">{t('contact.hours')}</div>
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
                  {t('whatsapp')}
                </Button>
                
                <Button variant="wisdom" size="lg" className="w-full justify-start" onClick={() => window.open('tel:+919519822580', '_blank')}>
                  <Phone className="h-5 w-5 mr-3" />
                  {t('call')}
                </Button>
                
                <Button variant="sacred" size="lg" className="w-full justify-start" onClick={() => window.open('mailto:agnimihir202@gmail.com', '_blank')}>
                  <Mail className="h-5 w-5 mr-3" />
                  {t('email')}
                </Button>
                
                <Button variant="outline" size="lg" className="w-full justify-start" onClick={() => window.open('https://instagram.com/astromihir_prayagraj', '_blank')}>
                  <Instagram className="h-5 w-5 mr-3" />
                  {t('instagram')}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-accent/30 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-primary">Book a Slot / Send a Message </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t('contact.form.name')}</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t('contact.form.phone')}</Label>
                    <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">{t('contact.form.email')}</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">{t('contact.form.subject')}</Label>
                  <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="e.g., Horoscope Reading, Marriage Muhurat, etc." required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t('contact.form.message')}</Label>
                  <Textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} placeholder="Please describe your requirements or questions..." required />
                </div>

                <Button type="submit" variant="divine" size="lg" className="w-full">
                  <Send className="h-5 w-5 mr-2" />
                  {t('contact.form.submit')}
                </Button>
              </form>

              <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                <p className="text-sm text-foreground/70 text-center">
                  <strong>Note:</strong> {t('contact.form.note')}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default ContactSection;
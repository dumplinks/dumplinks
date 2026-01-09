import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare } from "lucide-react";
// import { toast } from "sonner";
import heroImage from "@/assets/hero-logistics.jpg";
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify';


const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["10 Aighimien street, OFF Ekhator Street Off Ogiemwenken, Benin City,Edo State."],
    color: "bg-accent",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+49 (179) 513-4962", "+2348103117158"],
    color: "bg-primary",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@dumplinklogisticsltd.com"],
    color: "bg-accent",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"],
    color: "bg-primary",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });



  const templateParams={
    from_name:formData.name,
    from_email:formData.email,
    to_name:"Dumplink Logistics",
    subject:"Qoutes",
    message:formData.message,

  }
  const form = useRef();
  const sendEmail = (e) => {
    const public_key="LP_gdQVqVkKCNgmI"
    e.preventDefault();

    emailjs
      .send('service_zyc03ik', 'template_fva1ypj', 
        templateParams,
        public_key
      )
      .then(
        () => {
          toast.success("Qoutes Sent to Dumplinks logistics")
      
        },
        (error) => {
          toast.error("Qoutes Not Sent to Dumplink logistics")
          console.log('FAILED...', error);
        },
      );
  };

  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.success("Message sent successfully! We'll get back to you soon.", {
      icon: <CheckCircle className="h-5 w-5 text-accent" />,
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <div className="overflow-hidden">
      <ToastContainer/>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Contact us" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-hero opacity-90" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-6 opacity-0 animate-fade-in backdrop-blur-sm border border-accent/30">
              <MessageSquare className="h-4 w-4 animate-bounce-gentle" />
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Let's Start a <span className="text-accent">Conversation</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                className="group flex items-start gap-4 p-6 rounded-2xl bg-background border border-border hover:border-accent/50 transition-all duration-300 hover-lift opacity-0 animate-zoom-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className={`p-4 rounded-xl ${info.color} text-primary-foreground group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                  <info.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2 group-hover:text-accent transition-colors">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="opacity-0 animate-slide-in-left">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Contact Form</span>
              <h2 className="text-3xl font-bold text-foreground mt-2 mb-2">
                Send Us a <span className="text-accent">Message</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form onSubmit={sendEmail} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label 
                      htmlFor="name" 
                      className={`absolute left-4 transition-all duration-300 ${
                        focusedField === 'name' || formData.name 
                          ? '-top-2 text-xs bg-background px-2 text-accent' 
                          : 'top-3 text-muted-foreground'
                      }`}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-border bg-card focus:outline-none focus:border-accent transition-all duration-300"
                    />
                  </div>
                  <div className="relative">
                    <label 
                      htmlFor="email" 
                      className={`absolute left-4 transition-all duration-300 ${
                        focusedField === 'email' || formData.email 
                          ? '-top-2 text-xs bg-background px-2 text-accent' 
                          : 'top-3 text-muted-foreground'
                      }`}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-border bg-card focus:outline-none focus:border-accent transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label 
                      htmlFor="phone" 
                      className={`absolute left-4 transition-all duration-300 ${
                        focusedField === 'phone' || formData.phone 
                          ? '-top-2 text-xs bg-background px-2 text-accent' 
                          : 'top-3 text-muted-foreground'
                      }`}
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-border bg-card focus:outline-none focus:border-accent transition-all duration-300"
                    />
                  </div>
                  <div className="relative">
                    <label 
                      htmlFor="company" 
                      className={`absolute left-4 transition-all duration-300 ${
                        focusedField === 'company' || formData.company 
                          ? '-top-2 text-xs bg-background px-2 text-accent' 
                          : 'top-3 text-muted-foreground'
                      }`}
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('company')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-border bg-card focus:outline-none focus:border-accent transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-border bg-card focus:outline-none focus:border-accent transition-all duration-300 text-foreground"
                  >
                    <option value="">Select a service</option>
                    <option value="Dump Truck">Dump Truck Haulage Services</option>
                    <option value="Logistics Platform & Digital Solutions">Logistics Platform & Digital Solutions</option>
                    <option value="Agency & Intermediary Services">Agency & Intermediary Services</option>
                    <option value="Logistics Advisory & Management Services">Logistics Advisory & Management Services</option>
                    <option value="Partnerships & Joint Ventures">Partnerships & Joint Ventures</option>
                   
                  </select>
                </div>

                <div className="relative">
                  <label 
                    htmlFor="message" 
                    className={`absolute left-4 transition-all duration-300 ${
                      focusedField === 'message' || formData.message 
                        ? '-top-2 text-xs bg-background px-2 text-accent' 
                        : 'top-3 text-muted-foreground'
                    }`}
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border-2 border-border bg-card focus:outline-none focus:border-accent transition-all duration-300 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="accent"
                  size="xl"
                  className="w-full md:w-auto group pulse-glow"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-5 w-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Map Placeholder & Additional Info */}
            <div className="space-y-8 opacity-0 animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
              <div className="bg-secondary rounded-3xl p-8 h-80 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="text-center relative z-10">
                  <MapPin className="h-16 w-16 text-accent mx-auto mb-4 animate-bounce-gentle" />
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Our Headquarters
                  </h3>
                  <p className="text-muted-foreground">
                     10 Aighimien street, OFF Ekhator Street<br />
                  Off Ogiemwenken, Benin City,Edo State.
                  </p>
                </div>
              </div>

              <div className="bg-card rounded-3xl border border-border p-8 hover-lift">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Why Contact Us?
                </h3>
                <ul className="space-y-4">
                  {[
                    "Free shipping consultation",
                    "Customized logistics solutions",
                    "Competitive pricing",
                    "24/7 customer support",
                    "Real-time shipment tracking",
                  ].map((item, index) => (
                    <li 
                      key={item} 
                      className="flex items-center gap-3 text-foreground opacity-0 animate-fade-in group"
                      style={{ animationDelay: `${0.4 + 0.1 * index}s` }}
                    >
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 group-hover:scale-125 transition-transform" />
                      <span className="group-hover:text-accent transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider opacity-0 animate-fade-in">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Frequently Asked <span className="text-accent">Questions</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "What areas do you serve?",
                a: "We provide logistics services across 50+ countries worldwide, covering major trade routes in North America, Europe, Asia, and more.",
              },
              {
                q: "How can I track my shipment?",
                a: "Once your shipment is booked, you'll receive a tracking number that you can use on our website or mobile app for real-time updates.",
              },
              {
                q: "What types of cargo do you handle?",
                a: "We handle all types of cargo including general goods, perishables, hazardous materials, oversized items, and temperature-sensitive products.",
              },
              {
                q: "How do I get a quote?",
                a: "Simply fill out the contact form above or call us directly. Our team will provide you with a customized quote within 24 hours.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl border border-border p-6 hover-lift group opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <h3 className="font-bold text-foreground mb-2 group-hover:text-accent transition-colors">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

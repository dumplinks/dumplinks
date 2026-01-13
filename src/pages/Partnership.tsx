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
    details: ["10 Aighimien street, Off Ekhator Street Off Ogiemwenken, Benin City,Edo State."],
    color: "bg-accent",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: [ "+2348103117158"],
    color: "bg-primary",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@dumplinklogisticsltd.net"],
    color: "bg-accent",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sat: 8:00 AM - 6:00 PM"],
    color: "bg-primary",
  },
];

const PartnerShip = () => {
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
    const public_key="LP_gdQVqVkKCNgmIL"
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
              Be Our <span className="text-accent">Partner</span> Today.
            </h1>
            {/* <p className="text-lg md:text-xl text-primary-foreground/80 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p> */}
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
   

      {/* Contact Form & Map */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="opacity-0 animate-slide-in-left">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Partnership Form</span>
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

           
        </div>
        </div>
      </section>

    </div>
  );
};

export default PartnerShip;
